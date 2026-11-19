interface LessonItemProps {
  number: string;
  title: string;
  description: string;
}

export default function LessonItem({ number, title, description }: LessonItemProps) {
  return (
    <article className="box-border flex min-h-[98px] w-full items-center gap-[18px] rounded-[14px] border-2 border-[#E4E4E7] bg-white px-6 py-5">
      {/* Nomor */}
      <span className="w-6 shrink-0 font-['Encode_Sans'] text-2xl font-normal leading-7 text-[#52525B]">{number}</span>

      {/* Informasi materi */}
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <h3 className="font-['Encode_Sans'] text-xl font-semibold leading-8 text-[#3F3F46]">{title}</h3>

        <p className="font-['Encode_Sans'] text-sm font-medium leading-[18px] text-[#71717A]">{description}</p>
      </div>
    </article>
  );
}
