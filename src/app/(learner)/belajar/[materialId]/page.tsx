import LearningJourneyContent from "@/components/belajar/journey/LearningJourneyContent";
import DashboardWidgets from "@/components/dashboard/DashboardWidgets";

import { dashboardData } from "@/data";
import { learningJourneyData } from "@/data/learningJourneyData";

interface LearningJourneyPageProps {
  params: Promise<{
    materialId: string;
  }>;
}

export default async function LearningJourneyPage({ params }: LearningJourneyPageProps) {
  const { materialId } = await params;

  // Sementara menggunakan satu data dummy.
  // Nantinya ambil data journey berdasarkan materialId dari API.
  const journeyData = {
    ...learningJourneyData,
    materialId,
  };

  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12 space-y-12 xl:col-span-8">
        <LearningJourneyContent data={journeyData} />
      </div>

      <div className="col-span-12 xl:col-span-4">
        <DashboardWidgets data={dashboardData.widgets} className="space-y-6" />
      </div>
    </div>
  );
}
