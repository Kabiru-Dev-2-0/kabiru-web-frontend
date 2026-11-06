import type { LearningJourneyData } from "@/types/learningJourney";

export const learningJourneyData: LearningJourneyData = {
  materialId: "1",

  sections: [
    {
      id: "bagian-1",
      section: "Bagian 1",
      title: "Apa itu Algoritma dan Mengapa Penting?",
      nodes: [
        { id: 1, title: "Pengenalan Algoritma", status: "completed" },
        { id: 2, title: "Karakteristik Algoritma", status: "completed" },
        { id: 3, title: "Konsep Dasar Algoritma", status: "completed" },
        { id: 4, title: "Struktur Algoritma", status: "completed" },
        { id: 5, title: "Latihan Algoritma", status: "completed" },
        { id: 6, title: "Searching", status: "current" },
        { id: 7, title: "Evaluasi Bagian 1", status: "locked" },
        { id: 8, title: "Latihan Tambahan", status: "locked" },
        { id: 9, title: "Studi Kasus", status: "locked" },
      ],
    },
    {
      id: "bagian-2",
      section: "Bagian 2",
      title: "Mengenal Jenis-Jenis Algoritma",
      nodes: [
        { id: 10, title: "Algoritma Searching", status: "locked" },
        { id: 11, title: "Algoritma Sorting", status: "locked" },
        { id: 12, title: "Algoritma Rekursif", status: "locked" },
        { id: 13, title: "Algoritma Greedy", status: "locked" },
        { id: 14, title: "Algoritma Divide and Conquer", status: "locked" },
      ],
    },
    {
      id: "bagian-3",
      section: "Bagian 3",
      title: "Penerapan Algoritma dalam Pemrograman",
      nodes: [
        { id: 15, title: "Pengenalan Pseudocode", status: "locked" },
        { id: 16, title: "Flowchart", status: "locked" },
        { id: 17, title: "Implementasi Algoritma", status: "locked" },
        { id: 18, title: "Latihan Implementasi", status: "locked" },
        { id: 19, title: "Evaluasi Bagian 3", status: "locked" },
        { id: 20, title: "Studi Kasus Akhir", status: "locked" },
        { id: 21, title: "Tantangan Algoritma", status: "locked" },
      ],
    },
  ],
};
