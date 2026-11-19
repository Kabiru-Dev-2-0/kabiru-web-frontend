import SectionHeading from "./SectionHeading";
import ModuleCard from "./ModuleCard";

import { explorationModules } from "@/data/eksplorasiData";

interface ModuleCatalogProps {
  variant?: "action" | "description";
}

export default function ModuleCatalog({ variant = "action" }: ModuleCatalogProps) {
  return (
    <section className="flex w-full flex-col gap-[14px]">
      {/* Judul */}
      <SectionHeading title="Modul" />

      {/* Daftar modul */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {explorationModules.map((module) => (
          <ModuleCard key={module.id} module={module} variant={variant} />
        ))}
      </div>
    </section>
  );
}
