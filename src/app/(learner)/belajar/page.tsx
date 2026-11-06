import LearningContent from "@/components/belajar/LearningContent";
import DashboardWidgets from "@/components/dashboard/DashboardWidgets";
import { dashboardData } from "@/data";

export default function Belajar() {
  const { widgets } = dashboardData;

  return (
    <div className="grid grid-cols-12 gap-8">
      {/* Kolom Kiri: Konten Belajar */}
      <div className="col-span-12 xl:col-span-8">
        <LearningContent />
      </div>

      {/* Kolom Kanan: Dashboard Widgets */}
      <div className="col-span-12 xl:col-span-4">
        <DashboardWidgets data={widgets} className="space-y-6" />
      </div>
    </div>
  );
}
