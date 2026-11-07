import SectionHeading from "@/components/eksplorasi/SectionHeading";
import ProgressCourseCard from "@/components/eksplorasi/ProgressCourseCard";
import ModuleCatalog from "@/components/eksplorasi/ModuleCatalog";

import { progressCourses } from "@/data/eksplorasiData";

export default function EksplorasiPage() {
  return (
    <div className="-mx-4 -mt-1.5 flex flex-col gap-8">
      {/* PROGRES KAMU */}
      <section className="flex flex-col gap-[14px]">
        <SectionHeading title="Progres Kamu" />

        <div className="grid max-w-[719.34px] grid-cols-1 gap-[14px] md:grid-cols-2">
          {progressCourses.map((course) => (
            <ProgressCourseCard key={course.moduleLabel} course={course} />
          ))}
        </div>
      </section>

      {/* DAFTAR MODUL */}
      <ModuleCatalog variant="action" />
    </div>
  );
}
