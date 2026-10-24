import Image from "next/image";
import { Encode_Sans, Roboto_Condensed } from "next/font/google";
import { ChevronDown } from "lucide-react";

const encodeSans = Encode_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

export default function TopBar() {
  // Data sementara untuk tampilan TopBar.
  // Nantinya dapat diganti dengan data dari API.
  const user = {
    name: "Annisa Isnaini Tsaniya",
    rank: "Pemula",
    exp: 0,
    streak: "-",
    points: 0,
  };

  return (
    <header
      className={`${encodeSans.className} flex w-full items-center justify-end gap-5 border-b border-[#e8e8e8] bg-white px-[22px] py-4`}
    >
      {/* EXP */}
      <div
        className={`${robotoCondensed.className} flex shrink-0 items-center gap-1 text-2xl font-extrabold leading-5 text-[#3674b5]`}
      >
        <span className="bg-[linear-gradient(157.48deg,#6adcfc_16.738%,#5b71e0_59.657%,#8f5ed7_83.158%)] bg-clip-text text-transparent">
          EXP
        </span>
        <span>{user.exp}</span>
      </div>

      {/* Streak */}
      <div
        className={`${robotoCondensed.className} flex shrink-0 items-center gap-1 text-2xl font-extrabold leading-5 text-[#f5a524]`}
      >
        <Image
          src="/icons/trophy.svg"
          alt=""
          width={28}
          height={28}
          aria-hidden="true"
        />
        <span>{user.streak}</span>
      </div>

      {/* Points */}
      <div
        className={`${robotoCondensed.className} flex shrink-0 items-center gap-1 text-2xl font-extrabold leading-5 text-[#7828c8]`}
      >
        <Image
          src="/icons/ribbon-star.svg"
          alt=""
          width={28}
          height={28}
          aria-hidden="true"
        />
        <span>{user.points}</span>
      </div>

      {/* Divider */}
      <div
        className="self-stretch w-px shrink-0 bg-[rgba(17,17,17,0.15)]"
        role="separator"
        aria-orientation="vertical"
      />

      {/* Profile */}
      <button
        type="button"
        aria-haspopup="menu"
        className="flex shrink-0 items-center gap-3 border-0 bg-transparent p-0 text-right focus-visible:rounded-lg focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#5295cd]"
      >
        {/* Nama dan rank */}
        <span className="flex flex-col items-end justify-center">
          <span className="whitespace-nowrap text-lg font-normal leading-7 text-[#11181c]">
            {user.name}
          </span>

          <span className="flex items-center gap-1 whitespace-nowrap text-sm font-semibold leading-5 text-[#f5a524]">
            <Image
              src="/icons/paw.svg"
              alt=""
              width={18}
              height={18}
              aria-hidden="true"
            />
            {user.rank}
          </span>
        </span>

        {/* Avatar dan chevron */}
        <span className="flex items-center gap-2">
          <Image
            src="/icons/avatar.svg"
            alt="Avatar pengguna"
            width={40}
            height={40}
            className="block rounded-full bg-[#d4d4d8] object-cover"
          />

          <ChevronDown
            size={18}
            strokeWidth={2}
            className="text-[#11181c]"
            aria-hidden="true"
          />
        </span>
      </button>
    </header>
  );
}
