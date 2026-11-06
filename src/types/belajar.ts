export interface LearningModuleData {
  moduleNumber: number;
  title: string;
  progress: number;
  completedMaterials: number;
  totalMaterials: number;
}

export interface LearningMaterialData {
  id: string | number;
  section: string;
  title: string;
  completed: boolean;
  locked?: boolean;
  progress?: number;
  currentStep?: number;
  totalSteps?: number;
  message?: string;
  actionLabel?: string;
  progressColor?: string;
}
