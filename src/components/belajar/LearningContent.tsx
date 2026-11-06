"use client";

import React from "react";
import { useRouter } from "next/navigation";

import LearningModuleHeader from "./LearningModuleHeader";
import LearningMaterialCard from "./LearningMaterialCard";

import { learningModuleData, learningMaterialsData } from "@/data/belajarData";

export default function LearningContent() {
  const router = useRouter();

  const handleMaterialAction = (id: string | number) => {
    const material = learningMaterialsData.find((item) => item.id === id);

    if (!material) return;

    // Arahkan ke halaman learning journey berdasarkan ID materi
    router.push(`/belajar/${material.id}`);
  };

  return (
    <div className="space-y-5">
      {/* Header Modul */}
      <LearningModuleHeader
        {...learningModuleData}
        onBack={() => router.back()}
        onChangeModule={() => {
          console.log("Ganti modul");
        }}
      />

      {/* Daftar Materi */}
      <div className="space-y-4">
        {learningMaterialsData.map((material) => (
          <LearningMaterialCard key={material.id} data={material} onAction={handleMaterialAction} />
        ))}
      </div>
    </div>
  );
}
