import Link from "next/link";
import { ChevronLeft, Code2 } from "lucide-react";

import LessonItem from "@/components/eksplorasi/LessonItem";
import DashboardWidgets from "@/components/dashboard/DashboardWidgets";

import { algorithmLessons } from "@/data/eksplorasiData";
import { dashboardData } from "@/data/dashboardData";

export default function EksplorasiDetailPage() {
  return (
    <div className="-mx-4 -mt-1.5">
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,2.5fr)_minmax(0,1fr)]">
        {/* KONTEN KIRI */}
        <div className="flex min-w-0 flex-col gap-8">
          {/* HEADER MODUL */}
          <section className="box-border flex min-h-[218px] flex-col justify-between gap-5 rounded-[14px] border-2 border-[#205994] bg-[#3674B5] p-8 shadow-[0_6px_0_#205994] md:flex-row">
            {/* Informasi modul */}
            <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
              <div className="flex items-center gap-2">
                <Link href="/eksplorasi" aria-label="Kembali ke Eksplorasi" className="flex shrink-0 items-center justify-center text-white no-underline">
                  <ChevronLeft size={32} strokeWidth={3} />
                </Link>

                <h1 className="font-['Encode_Sans'] text-2xl font-bold leading-8 text-white">Dasar Algoritma dan Pemrograman</h1>
              </div>

              <p className="font-['Encode_Sans'] text-base font-medium leading-6 text-white">Mempelajari algoritma, jenis-jenis algoritma, menulis kode sederhana dan memperbaiki kesalahan kode</p>

              <div>
                <Link
                  href="/eksplorasi"
                  className="inline-flex h-10 items-center justify-center rounded-xl border border-[#E4E4E7] bg-white px-4 font-['Encode_Sans'] text-sm font-semibold text-[#3674B5] no-underline shadow-[0_3px_0_#E4E4E7] transition-transform hover:-translate-y-0.5"
                >
                  Lihat modul lain
                </Link>
              </div>
            </div>

            {/* Progress lingkaran */}
            <div className="flex shrink-0 items-center justify-center">
              <div
                className="grid h-[110px] w-[110px] place-items-center rounded-full"
                style={{
                  background: "conic-gradient(#F5A524 0deg 90deg, #D9D9D9 90deg 360deg)",
                }}
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Progres modul 25 persen"
              >
                <div className="grid h-[88px] w-[88px] place-items-center rounded-full bg-[#3674B5]">
                  <span className="font-['Roboto'] text-lg font-semibold text-white">25%</span>
                </div>
              </div>
            </div>
          </section>

          {/* DAFTAR LESSON */}
          <section className="flex flex-col gap-[14px]">
            {algorithmLessons.map((lesson) => (
              <LessonItem key={lesson.number} number={lesson.number} title={lesson.title} description={lesson.description} />
            ))}

            {/* PRACTICE */}
            <Link
              href="/practice"
              className="flex min-h-[98px] items-center gap-[18px] rounded-[14px] border-2 border-[#E4E4E7] bg-white px-6 py-5 no-underline transition-colors hover:border-[#3674B5]"
            >
              <Code2 size={26} className="shrink-0 text-[#3674B5]" />

              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <h3 className="font-['Encode_Sans'] text-xl font-semibold leading-8 text-[#3F3F46]">Practice</h3>

                <p className="font-['Encode_Sans'] text-sm font-medium leading-[18px] text-[#71717A]">Menerapkan semua konsep untuk membuat aplikasi sederhana.</p>
              </div>
            </Link>
          </section>
        </div>

        {/* KONTEN KANAN */}
        <aside className="min-w-0">
          <DashboardWidgets data={dashboardData.widgets} className="space-y-6" />
        </aside>
      </div>
    </div>
  );
}
