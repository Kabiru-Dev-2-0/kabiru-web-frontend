import type { ProgressCourse } from "@/data/eksplorasiData";

interface ProgressCourseCardProps {
  course: ProgressCourse;
}

export default function ProgressCourseCard({ course }: ProgressCourseCardProps) {
  return (
    <article className="flex h-[166px] flex-col justify-between rounded-[14px] border border-[#F4F4F5] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      {/* Informasi modul */}
      <div className="flex flex-col">
        <p className="font-['Encode_Sans'] text-base font-medium leading-6 text-[#71717A]">{course.moduleLabel}</p>

        <h3 className="font-['Encode_Sans'] text-xl font-bold leading-7 text-[#27272A]">{course.title}</h3>
      </div>

      {/* Progress */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm text-[#11181C]">
          <span>Progres</span>

          <span>{course.progress}%</span>
        </div>

        <div className="h-1 w-full overflow-hidden rounded-full bg-[#E4E4E7]" role="progressbar" aria-valuenow={course.progress} aria-valuemin={0} aria-valuemax={100}>
          <div
            className="h-full rounded-full bg-[#3674B5]"
            style={{
              width: `${course.progress}%`,
            }}
          />
        </div>
      </div>
    </article>
  );
}
