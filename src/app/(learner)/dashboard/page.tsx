import AIBanner from "@/components/dashboard/AiBanner";
import DashboardWidgets from "@/components/dashboard/DashboardWidgets";
import ModuleSection from "@/components/dashboard/ModuleSection";
import { dashboardData } from "@/data";
import { CheckCircle2, BookOpen } from "lucide-react";

export default function Dashboard() {
  const { aiBanner, inProgressSection, completedSection, widgets } = dashboardData;

  return (
    <div className="grid grid-cols-12 gap-8">
      {/* Kolom Kiri: Konten Pembelajaran Utama */}
      <div className="col-span-8 space-y-8">
        <AIBanner data={aiBanner} />
        <hr className="border-border-surface" />

        {/* Section: Sedang Dipelajari */}
        <ModuleSection
          title={inProgressSection?.title ?? "Sedang Dipelajari"}
          icon={<BookOpen size={16} className="text-white" />}
          iconBgColor="bg-primary-default"
          modules={inProgressSection?.modules}
        />
        <hr className="border-border-surface" />

        {/* Section: Selesai Dipelajari */}
        <ModuleSection
          title={completedSection?.title ?? "Selesai Dipelajari"}
          icon={<CheckCircle2 size={16} className="text-white" />}
          iconBgColor="bg-success-default"
          modules={completedSection?.modules}
          emptyMessage={completedSection?.emptyMessage}
        />
      </div>

      {/* Kolom Kanan: Sidebar Widgets */}
      <DashboardWidgets data={widgets} />
    </div>
  );
}