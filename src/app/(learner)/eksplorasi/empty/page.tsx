import SectionHeading from "@/components/eksplorasi/SectionHeading";
import ModuleCatalog from "@/components/eksplorasi/ModuleCatalog";

export default function EksplorasiEmptyPage() {
  return (
    <div className="-mx-4 -mt-1.5 flex flex-col gap-8">
      {/* PROGRES KAMU */}
      <section className="flex flex-col gap-[14px]">
        <SectionHeading title="Progres Kamu" />

        {/* Empty State */}
        <div className="flex min-h-[128px] w-full items-center justify-center px-6 py-8">
          <p className="max-w-[950px] text-center font-['Encode_Sans'] text-xl font-medium leading-8 text-[#71717A]">
            Belum ada modul yang kamu mulai. Yuk, pilih topik pertama dan mulai petualangan belajarmu! 🚀
          </p>
        </div>
      </section>

      {/* DAFTAR MODUL */}
      <ModuleCatalog variant="description" />
    </div>
  );
}
