import type { LearningModuleData, LearningMaterialData } from "@/types/belajar";

export const learningModuleData: LearningModuleData = {
  moduleNumber: 4,
  title: "Dasar Algoritma dan Pemrograman",
  progress: 27,
  completedMaterials: 0,
  totalMaterials: 20,
};

export const learningMaterialsData: LearningMaterialData[] = [
  {
    id: 1,
    section: "Bagian 1",
    title: "Apa itu Algoritma dan Mengapa Penting?",
    completed: true,
    message: "Aku ingin mengenal lebih dalam tentang AI",
  },
  {
    id: 2,
    section: "Bagian 2",
    title: "Mengenal Jenis-Jenis Algoritma",
    completed: false,
    progress: 37,
    currentStep: 3,
    totalSteps: 10,
    message: "Aku ingin mengenal lebih dalam tentang AI",
    progressColor: "#F5A524",
  },
  {
    id: 3,
    section: "Bagian 3",
    title: "Struktur Dasar Algoritma",
    completed: false,
    locked: true,
    message: "Selesaikan materi sebelumnya terlebih dahulu, ya!",
  },
];
