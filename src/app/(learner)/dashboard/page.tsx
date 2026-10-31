import AIBanner from "@/components/dashboard/AiBanner";
import DashboardWidgets from "@/components/dashboard/DashboardWidgets";
import ModuleSection from "@/components/dashboard/ModuleSection";
import { dashboardData } from "@/data";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

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
          icon={<Image src="/icons/book-star.svg" alt="Book Star" width={32} height={32} />}
          iconBgColor="bg-transparent"
          modules={inProgressSection?.modules}
          progressVariant="warning"
          progressColor="#F5A524"
        />

        <hr className="border-border-surface" />

        {/* Section: Selesai Dipelajari */}
        <ModuleSection
          title={completedSection?.title ?? "Selesai Dipelajari"}
          icon={<Image src="/icons/certificate.svg" alt="Certificate" width={32} height={32} />}
          iconBgColor="bg-transparent"
          modules={completedSection?.modules}
          emptyMessage={completedSection?.emptyMessage}
          progressVariant="success"
        />
      </div>

      {/* Kolom Kanan: Sidebar Widgets */}
      <DashboardWidgets data={widgets} />
    </div>
  );
}
