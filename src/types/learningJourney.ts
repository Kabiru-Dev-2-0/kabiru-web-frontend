export type JourneyNodeStatus = "completed" | "current" | "locked";

export interface JourneyNodeData {
  id: string | number;
  title: string;
  status: JourneyNodeStatus;
  description?: string;
}

export interface JourneySectionData {
  id: string | number;
  section: string;
  title: string;
  nodes: JourneyNodeData[];
}

export interface LearningJourneyData {
  sectionId: string;
  sections: JourneySectionData[];
}

export interface JourneyNodeProps {
  data: JourneyNodeData;
  isOpen?: boolean;
  onSelect?: (id: string | number) => void;
  onClick?: (id: string | number) => void;
}

export interface JourneySectionProps {
  data: JourneySectionData;
  selectedNodeId: string | number | null;
  onNodeSelect: (id: string | number) => void;
  onNodeClick?: (id: string | number) => void;
}

export interface LearningJourneyContentProps {
  data: LearningJourneyData;
  onNodeClick?: (id: string | number) => void;
}
