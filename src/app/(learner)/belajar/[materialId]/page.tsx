import LearningJourneyContent from "@/components/belajar/journey/LearningJourneyContent";
import DashboardWidgets from "@/components/dashboard/DashboardWidgets";

import { dashboardData } from "@/data";
import { learningJourneyData } from "@/data/learningJourneyData";

interface LearningJourneyPageProps {
  params: Promise<{ sectionId: string }>;
}

export default async function LearningJourneyPage({ params }: LearningJourneyPageProps) {
  const { sectionId } = await params;

  const journeyData = {
    ...learningJourneyData,
    sectionId: sectionId,
  };

  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12 space-y-12 xl:col-span-8">
        <LearningJourneyContent key={sectionId} data={journeyData} />
      </div>

      <div className="col-span-12 xl:col-span-4">
        <DashboardWidgets data={dashboardData.widgets} className="space-y-6" />
      </div>
    </div>
  );
}
