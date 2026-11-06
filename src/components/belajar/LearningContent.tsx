"use client";

import { useRouter } from "next/navigation";

import LearningModuleHeader from "./LearningModuleHeader";
import LearningMaterialCard from "./LearningMaterialCard";

import { learningModuleData, learningMaterialsData } from "@/data/belajarData";

export default function LearningContent() {
  const router = useRouter();

  const handleMaterialAction = (id: string | number) => {
    const material = learningMaterialsData.find((item) => String(item.id) === String(id));

    if (!material || material.locked) return;

    router.push(`/belajar/${material.sectionId}#journey-section-${material.sectionId}`);
  };

  return (
    <div className="space-y-5">
      <LearningModuleHeader
        {...learningModuleData}
        onBack={() => router.back()}
        onChangeModule={() => {
          console.log("Ganti modul");
        }}
      />

      <div className="space-y-4">
        {learningMaterialsData.map((material) => (
          <LearningMaterialCard key={material.id} data={material} onAction={handleMaterialAction} />
        ))}
      </div>
    </div>
  );
}
