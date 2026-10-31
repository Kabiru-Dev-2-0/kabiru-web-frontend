import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";

export default function LearnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar tetap di kiri */}
      <Sidebar />

      {/* Area utama */}
      <div className="ml-[306px] min-h-screen">
        {/* TopBar tetap di atas */}
        <div className="fixed left-[306px] right-0 top-0 z-40">
          <TopBar />
        </div>

        {/* Hanya bagian konten yang bisa di-scroll */}
        <main className="mt-[72px] h-full overflow-y-auto p-10">{children}</main>
      </div>
    </div>
  );
}
