import Image from "next/image";

interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-[10px]">
      <Image src="/icons/book-star.svg" alt="" width={40} height={40} aria-hidden="true" />

      <h2 className="font-['Encode_Sans'] text-2xl font-semibold leading-8 text-[#11181C]">{title}</h2>
    </div>
  );
}
