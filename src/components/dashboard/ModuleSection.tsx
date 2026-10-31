"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import ModuleItem from "./ModuleItem";
import { ModuleData, ModuleSectionData } from "../../types/dashboard";

export interface ModuleSectionProps {
  /** Seluruh data section dari API response */
  data?: ModuleSectionData;
  /** Judul section (override) */
  title?: string;
  /** Ikon header (override) */
  icon?: React.ReactNode;
  /** Warna background ikon (misal: "bg-[#277BC0]" atau "bg-[#00BC7D]") */
  iconBgColor?: string;
  /** Daftar modul dari API response */
  modules?: ModuleData[];
  /** Pesan ketika modul kosong */
  emptyMessage?: string;
  /** State loading skeleton/spinner jika diperlukan */
  loading?: boolean;
  className?: string;
}

// Default mock data untuk fallback jika belum ada API
const DEFAULT_MOCK_MODULES: ModuleData[] = [
  {
    id: "default-1",
    category: "Modul 1: Pemula",
    title: "Dasar Pemrograman & Logika Komputasi",
    description: "Pelajari variabel, percabangan, dan pemikiran komputasi",
    progressPercentage: 45,
    href: "/belajar/dasar-pemrograman",
    showIllustration: true,
    speechBubbleText: "Aku ingin mengenal lebih dalam tentang AI",
    illustrationIcon: "🤖",
  },
];

export default function ModuleSection({ data, title, icon, iconBgColor, modules, emptyMessage = "Belum ada modul di kategori ini.", loading = false, className = "" }: ModuleSectionProps) {
  const sectionTitle = title ?? data?.title ?? "Sedang dipelajari";
  const sectionIcon = icon ?? data?.icon;
  const sectionIconBg = iconBgColor ?? data?.iconBgColor ?? "bg-primary-default";
  const moduleList = modules ?? data?.modules ?? DEFAULT_MOCK_MODULES;

  return (
    <section className={`space-y-4 ${className}`.trim()}>
      <SectionHeader title={sectionTitle} icon={sectionIcon} iconBgColor={sectionIconBg} />

      {loading ? (
        <div className="bg-white p-6 rounded-xl border border-border-main shadow-sm animate-pulse h-28 flex items-center justify-center text-paragraph text-text-paragraph-75">Memuat modul...</div>
      ) : moduleList.length === 0 ? (
        <div className="bg-white p-8 rounded-xl border border-dashed border-border-main text-center text-paragraph text-text-paragraph-75">{emptyMessage}</div>
      ) : (
        <div className="space-y-4">
          {moduleList.map((item) => (
            <ModuleItem key={item.id} data={item} />
          ))}
        </div>
      )}
    </section>
  );
}
