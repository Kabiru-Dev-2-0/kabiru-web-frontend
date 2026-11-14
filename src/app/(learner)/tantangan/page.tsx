import DashboardWidgets from "@/components/dashboard/DashboardWidgets";
import TantanganBoard from "@/components/tantangan/TantanganBoard";
import { tantanganData } from "@/data/tantanganData";

export default function TantanganPage() {
  const { stages, activeStage, widgets } = tantanganData;

  return (
    <div className="grid grid-cols-12 gap-8">
      {/* Kolom Kiri: Daftar Tantangan */}
      <div className="col-span-8">
        <TantanganBoard stages={stages} initialStage={activeStage} />
      </div>

      {/* Kolom Kanan: Sidebar Widgets */}
      <DashboardWidgets data={widgets} />
    </div>
  );
}
