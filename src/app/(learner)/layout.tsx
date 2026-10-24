import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";

export default function LearnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar di sebelah kiri */}
      <Sidebar />

      {/* Area utama di sebelah kanan */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* TopBar berada di luar main dan tanpa padding konten */}
        <TopBar />

        {/* Konten halaman dengan padding 20px */}
        <main className="min-w-0 flex-1 p-10">{children}</main>
      </div>
    </div>
  );
}
