"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import LearningJourneyHeader from "./LearningJourneyHeader";
import JourneySection from "./JourneySection";

import type { LearningJourneyContentProps } from "@/types/learningJourney";

export default function LearningJourneyContent({ data, onNodeClick }: LearningJourneyContentProps) {
  const router = useRouter();

  // Pastikan sections selalu berupa array.
  const sections = data?.sections ?? [];

  // Section yang sedang aktif.
  const [activeSectionId, setActiveSectionId] = useState<string | number | null>(sections[0]?.id ?? null);

  // Node yang sedang dipilih untuk menampilkan BubbleChat.
  const [selectedNodeId, setSelectedNodeId] = useState<string | number | null>(null);

  /**
   * Sinkronisasi active section ketika data berubah.
   */
  useEffect(() => {
    if (sections.length === 0) {
      setActiveSectionId(null);
      setSelectedNodeId(null);
      return;
    }

    setActiveSectionId((currentId) => {
      const sectionExists = sections.some((section) => String(section.id) === String(currentId));

      return sectionExists ? currentId : sections[0].id;
    });
  }, [sections]);

  /**
   * Mengambil section yang sedang aktif.
   */
  const activeSection = useMemo(() => {
    return sections.find((section) => String(section.id) === String(activeSectionId)) ?? sections[0];
  }, [sections, activeSectionId]);

  /**
   * Menghitung progress seluruh materi.
   */
  const progress = useMemo(() => {
    const allNodes = sections.flatMap((section) => section.nodes ?? []);

    if (allNodes.length === 0) return 0;

    const completedNodes = allNodes.filter((node) => node.status === "completed").length;

    return Math.round((completedNodes / allNodes.length) * 100);
  }, [sections]);

  /**
   * Memantau section yang sedang terlihat.
   */
  useEffect(() => {
    if (sections.length === 0) return;

    const sectionElements = document.querySelectorAll<HTMLElement>("[data-journey-section]");

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const currentSection = visibleSections[0];

        if (currentSection) {
          const target = currentSection.target as HTMLElement;
          const sectionId = target.dataset.journeySection;

          const matchedSection = data.sections.find((section) => String(section.id) === sectionId);

          if (matchedSection) {
            setActiveSectionId(matchedSection.id);
          }
        }
      },
      {
        root: null,
        rootMargin: "-120px 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    sectionElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  /**
   * Memilih node untuk menampilkan BubbleChat.
   * Klik node yang sama akan menutup BubbleChat.
   */
  const handleNodeSelect = useCallback((id: string | number) => {
    setSelectedNodeId((currentId) => (String(currentId) === String(id) ? null : id));
  }, []);

  /**
   * Aksi ketika tombol Mulai ditekan.
   */
  const handleNodeClick = useCallback(
    (id: string | number) => {
      setSelectedNodeId(null);
      onNodeClick?.(id);
    },
    [onNodeClick],
  );

  return (
    <div className="relative flex flex-col gap-6">
      {/* Header section aktif */}
      {activeSection && (
        <div className="sticky top-4 z-40">
          <LearningJourneyHeader activeSection={activeSection} progress={progress} onBack={() => router.back()} />
        </div>
      )}

      {/* Journey Sections */}
      {sections.length > 0 ? (
        <div className="relative flex flex-col gap-4 overflow-visible">
          {sections.map((section) => (
            <JourneySection key={section.id} data={section} selectedNodeId={selectedNodeId} onNodeSelect={handleNodeSelect} onNodeClick={handleNodeClick} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[200px] items-center justify-center">
          <p className="text-paragraph text-text-paragraph-75">Belum ada materi pembelajaran.</p>
        </div>
      )}
    </div>
  );
}
