import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";

import type { ExplorationModule } from "@/data/eksplorasiData";

interface ModuleCardProps {
  module: ExplorationModule;
  variant?: "action" | "description";
}

export default function ModuleCard({ module, variant = "action" }: ModuleCardProps) {
  const isDescription = variant === "description";

  return (
    <article
      className={[
        "box-border flex flex-col items-center",
        "gap-4 rounded-[14px] border border-[#F4F4F5]",
        "bg-white p-4",
        "shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
        isDescription ? "h-[447px]" : "h-[445px]",
      ].join(" ")}
    >
      {/* Gambar modul */}
      <div className="relative h-[213px] w-full shrink-0 overflow-hidden rounded-[14px]">
        {module.image ? (
          <Image src={module.image} alt={module.title} fill sizes="(max-width: 768px) 100vw, 349px" className="object-cover" />
        ) : (
          <div
            className="grid h-full w-full place-items-center"
            style={{
              background: module.imageBackground,
            }}
          >
            <BookOpen size={64} strokeWidth={1.5} className="text-white/90" />
          </div>
        )}
      </div>

      {/* Informasi modul */}
      <div className="flex h-[110px] w-full flex-col px-3 pt-3">
        <div className="flex flex-col gap-[2px]">
          <p className="font-['Encode_Sans'] text-xs font-bold leading-4 text-[#11181C]/60">{module.categoryLabel}</p>

          {module.lessonLabel && <p className="font-['Encode_Sans'] text-xs font-medium leading-4 text-[#11181C]/50">{module.lessonLabel}</p>}
        </div>

        <h3 className="mt-2 line-clamp-2 font-['Encode_Sans'] text-2xl font-bold leading-8 text-[#11181C]">{module.title}</h3>
      </div>

      {/* Tampilan untuk halaman empty */}
      {isDescription ? (
        <div className="flex h-[60px] w-full items-center px-3">
          <p className="line-clamp-3 font-['Encode_Sans'] text-sm font-medium leading-5 text-[#71717A]">{module.description}</p>
        </div>
      ) : (
        /* Tampilan untuk halaman utama */
        <div className="flex h-[58px] w-full items-center justify-between gap-2 border-t border-[rgba(17,17,17,0.15)] px-3 py-3">
          <p className="line-clamp-2 max-w-[182px] font-['Encode_Sans'] text-xs font-medium leading-4 text-[#11181C]">{module.footerText}</p>

          {module.detailHref ? (
            <Link
              href={module.detailHref}
              className="inline-flex h-[34px] shrink-0 items-center justify-center rounded-lg bg-[#3674B5] px-3 text-sm font-semibold leading-[18px] text-white no-underline shadow-[0_3px_0_#205994] transition-transform hover:-translate-y-0.5"
            >
              Lihat Modul
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex h-[34px] shrink-0 cursor-not-allowed items-center justify-center rounded-lg bg-[#3674B5] px-3 text-sm font-semibold leading-[18px] text-white opacity-60 shadow-[0_3px_0_#205994]"
            >
              Lihat Modul
            </button>
          )}
        </div>
      )}
    </article>
  );
}
