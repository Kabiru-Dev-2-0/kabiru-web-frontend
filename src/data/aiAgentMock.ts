import type {
  ChatMessage,
  HintLevel,
  HintRequest,
  HintResult,
  HintStatus,
  QuestionType,
} from "@/types/aiAgent";

export const DEMO_QUESTION = {
  badge: "Tahukah Kamu?",
  info: "Dekomposisi adalah proses memecah masalah kompleks menjadi bagian-bagian kecil yang lebih sederhana. Dengan membagi masalah, setiap bagian dapat dianalisis dan diselesaikan secara lebih mudah dan terstruktur.",
  prompt: "Dekomposisi dalam berpikir komputasional adalah…",
  options: [
    { id: "a", text: "Menggabungkan masalah" },
    { id: "b", text: "Menunda penyelesaian" },
    { id: "c", text: "Menghindari masalah" },
    { id: "d", text: "Memecah masalah menjadi bagian-bagian kecil" },
  ],
  correctOptionId: "d",
};

export const MOCK_QUESTION = {
  questionId: "q-dekomposisi-penting",
  questionType: "multiple_choice" as QuestionType,
  questionContext: DEMO_QUESTION.prompt,
};

export const CHATBOT_PLACEHOLDER: {
  messages: ChatMessage[];
  inputPlaceholder: string;
} = {
  inputPlaceholder: "Ketik pesanmu disini...",
  messages: [
    {
      id: "m1",
      role: "bot",
      text: "Halo! Aku Kabi, asisten belajarmu. Ada bagian materi yang ingin kamu tanyakan?",
    },
    { id: "m2", role: "user", text: "Apa contoh dekomposisi dalam sehari-hari?" },
    {
      id: "m3",
      role: "bot",
      text: "Misalnya saat ingin membersihkan kamar yang berantakan. Kamu bisa membaginya menjadi tugas kecil:\n\n1. Merapikan meja belajar\n2. Menyusun buku di rak\n3. Menyapu lantai\n\nDengan begitu pekerjaan terasa jauh lebih ringan ✨",
    },
  ],
};

export const mockBackend = {
  wrongAttempts: 0,
  isSolved: false,
  shouldFail: false,
  latencyMs: 900,
};

export function getMockStatus(
  wrongAttempts: number = mockBackend.wrongAttempts,
  isSolved: boolean = mockBackend.isSolved,
): HintStatus {
  let availableLevel: HintLevel | null = null;
  if (wrongAttempts >= 3) availableLevel = 3;
  else if (wrongAttempts === 2) availableLevel = 2;
  else if (wrongAttempts === 1) availableLevel = 1;
  return { wrongAttempts, availableLevel, isSolved };
}

const MOCK_HINT_TEXT: Record<HintLevel, string> = {
  1: "Pikirkan apa yang terjadi pada masalah besar ketika dipecah menjadi bagian-bagian kecil. Apakah jadi lebih sulit atau lebih mudah ditangani?",
  2: "Perhatikan tujuan memecah masalah: menyelesaikannya satu bagian demi satu bagian. Pilihan mana yang sejalan dengan tujuan itu, dan mana yang justru berlawanan?",
  3: "Gunakan kalimat di kotak Tahukah Kamu?: dekomposisi membantu secara bertahap. Tanyakan pada tiap pilihan, apakah ini manfaat nyata dari memecah masalah, atau justru menjauhkan kita dari penyelesaian?",
};

export async function mockRequestHint(req: HintRequest): Promise<HintResult> {
  await new Promise((r) => setTimeout(r, mockBackend.latencyMs));
  if (mockBackend.shouldFail) {
    throw new Error("Gagal mengambil hint");
  }
  const attempts = req.wrongAttempts ?? mockBackend.wrongAttempts;
  const { availableLevel } = getMockStatus(attempts);
  if (availableLevel === null) {
    throw new Error("Hint belum tersedia");
  }
  return {
    questionId: req.questionId,
    level: availableLevel,
    text: MOCK_HINT_TEXT[availableLevel],
    requestedAt: new Date().toISOString(),
  };
}