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
    sectionId: "bagian-1",
    section: "Bagian 1",
    title: "Pengenalan Algoritma",
    completed: false,
    locked: false,
    progress: 50,
    currentStep: 4,
    totalSteps: 8,
  },
  {
    id: 1,
    sectionId: "bagian-2",
    section: "Bagian 2",
    title: "Struktur Kontrol",
    completed: false,
    locked: false,
    progress: 0,
    currentStep: 0,
    totalSteps: 5,
  },
];
