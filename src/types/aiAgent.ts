export type HintLevel = 1 | 2 | 3;

export type QuestionType =
  | "multiple_choice"
  | "fill_blank"
  | "true_false"
  | "multi_select"
  | "sorting"
  | "drag_drop";

export type AgentTab = "hint" | "chatbot";

export interface HintStatus {
  wrongAttempts: number;
  availableLevel: HintLevel | null;
  isSolved: boolean;
}

export interface HintResult {
  questionId: string;
  level: HintLevel;
  text: string;
  requestedAt: string;
}

export interface HintRequest {
  questionId: string;
  wrongAttempts?: number;
}

export interface HintPanelProps {
  questionId: string;
  questionType: QuestionType;
  questionContext: string;
  status: HintStatus;
  isSubmitting: boolean;
  onRequestHint: (req: HintRequest) => Promise<HintResult>;
}

export interface ChatMessage {
  id: string;
  role: "bot" | "user";
  text: string;
}

export type AIAgentProps = HintPanelProps & {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: AgentTab;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  chatMessages?: ChatMessage[];
  isChatLoading?: boolean;
  onSendMessage?: (message: string) => void;
};