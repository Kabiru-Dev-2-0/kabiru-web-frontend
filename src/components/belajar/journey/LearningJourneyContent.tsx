"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import LearningJourneyHeader from "./LearningJourneyHeader";
import JourneySection from "./JourneySection";

import type { LearningJourneyContentProps } from "@/types/learningJourney";

export default function LearningJourneyContent({ data, onNodeClick }: LearningJourneyContentProps) {
  const router = useRouter();

  const sections = data?.sections ?? [];

  const [activeSectionId, setActiveSectionId] = useState<string | number | null>(data.sectionId);

  const [selectedNodeId, setSelectedNodeId] = useState<string | number | null>(null);

  // Sinkronisasi section aktif.
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

  const activeSection = sections.find((section) => String(section.id) === String(activeSectionId));

  // Mengambil section aktif.
  // const activeSection = useMemo(() => {
  //   return sections.find((section) => String(section.id) === String(activeSectionId)) ?? sections[0];
  // }, [sections, activeSectionId]);

  // Menghitung progress seluruh journey.
  const progress = useMemo(() => {
    const allNodes = sections.flatMap((section) => section.nodes ?? []);

    if (allNodes.length === 0) return 0;

    const completedNodes = allNodes.filter((node) => node.status === "completed").length;

    return Math.round((completedNodes / allNodes.length) * 100);
  }, [sections]);

  // Navigasi menuju section berdasarkan URL hash.
  useEffect(() => {
    if (sections.length === 0) return;

    const hash = window.location.hash;

    if (!hash) return;

    const targetId = decodeURIComponent(hash.substring(1));

    const targetSection = sections.find((section) => `journey-section-${section.id}` === targetId);

    if (!targetSection) {
      console.warn("Journey section tidak ditemukan:", targetId);
      return;
    }

    setActiveSectionId(targetSection.id);

    const animationFrame = window.requestAnimationFrame(() => {
      const targetElement = document.getElementById(targetId);

      if (!targetElement) {
        console.warn("Element tujuan tidak ditemukan:", targetId);
        return;
      }

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [data.sectionId, sections]);

  // Memantau section yang sedang terlihat.
  useEffect(() => {
    if (sections.length === 0) return;

    const sectionElements = document.querySelectorAll<HTMLElement>("[data-journey-section]");

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const currentSection = visibleSections[0];

        if (!currentSection) return;

        const target = currentSection.target as HTMLElement;
        const sectionId = target.dataset.journeySection;

        const matchedSection = sections.find((section) => String(section.id) === sectionId);

        if (matchedSection) {
          setActiveSectionId(matchedSection.id);
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

  // Memilih node untuk membuka popup.
  const handleNodeSelect = useCallback((id: string | number) => {
    setSelectedNodeId((currentId) => (String(currentId) === String(id) ? null : id));
  }, []);

  // Aksi tombol Mulai.
  const handleNodeClick = useCallback(
    (id: string | number) => {
      setSelectedNodeId(null);
      onNodeClick?.(id);
    },
    [onNodeClick],
  );

  return (
    <div className="relative flex flex-col gap-6">
      {/* Sticky Header */}
      {activeSection && (
        <div className="fixed right-10 z-[1000] flex w-full justify-center">
          <LearningJourneyHeader activeSection={activeSection} progress={progress} onBack={() => router.back()} />
        </div>
      )}

      {/* Seluruh Journey Sections */}
      {sections.length > 0 ? (
        <div className="relative mt-24 flex flex-col gap-4 overflow-visible">
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
