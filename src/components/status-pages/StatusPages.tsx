import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

import TopBar from "@/components/layout/TopBar";

type Audience = "guest" | "learner";

/* =====================================================
   PUBLIC HEADER
===================================================== */

function PublicHeader() {
  const menus = [
    { label: "Beranda", href: "/" },
    { label: "Kurikulum", href: "/#kurikulum" },
    { label: "Fitur", href: "/#fitur" },
    { label: "Tentang Kami", href: "/#tentang-kami" },
  ];

  return (
    <header className="flex min-h-[96px] items-center border-b border-[#E8E8E8] bg-white px-6 py-5 lg:px-12">
      {/* Logo */}
      <Link href="/" className="shrink-0">
        <Image src="/icons/logo.svg" alt="Kabiru Web" width={140} height={42} priority />
      </Link>

      {/* Navigasi */}
      <nav className="mx-6 hidden flex-1 items-center justify-center gap-6 lg:flex">
        {menus.map((menu) => (
          <Link key={menu.label} href={menu.href} className="whitespace-nowrap font-['Encode_Sans'] text-lg font-medium leading-7 text-[#71717A] no-underline transition-colors hover:text-[#277BC0]">
            {menu.label}
          </Link>
        ))}
      </nav>

      {/* Tombol */}
      <div className="ml-auto flex shrink-0 items-center gap-[14px]">
        <Link href="/login" className="inline-flex h-12 w-[90px] items-center justify-center rounded-xl bg-[#F4F4F5] font-['Encode_Sans'] text-lg font-medium text-[#71717A] no-underline">
          Masuk
        </Link>

        <Link
          href="/register"
          className="inline-flex h-12 w-[103px] items-center justify-center rounded-xl bg-[#3674B5] font-['Encode_Sans'] text-lg font-medium text-white no-underline transition-colors hover:bg-[#205994]"
        >
          Daftar
        </Link>
      </div>
    </header>
  );
}

/* =====================================================
   PUBLIC FOOTER
===================================================== */

function PublicFooter() {
  const groups = [
    {
      title: "Navigasi",
      links: ["Beranda", "Kurikulum", "Fitur", "Tentang Kami"],
    },
    {
      title: "Fitur",
      links: ["Pembelajaran Bertahap", "Latihan Soal Interaktif", "Gamifikasi", "Asisten AI"],
    },
    {
      title: "Informasi",
      links: ["Pusat Bantuan", "Kebijakan Privasi", "Syarat & Ketentuan"],
    },
  ];

  return (
    <footer className="bg-[#001731] text-[#E4E4E7]">
      {/* Konten Footer */}
      <div className="mx-auto grid min-h-[394px] max-w-[1212px] grid-cols-1 gap-10 px-6 pb-16 pt-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[449px_112px_192px_155px_144px] xl:px-0">
        {/* Deskripsi */}
        <div className="flex flex-col gap-6">
          <Image src="/icons/logo.svg" alt="Kabiru Web" width={140} height={42} />

          <p className="font-['Poppins'] text-base leading-7">
            Platform pembelajaran berbasis web yang membantu siswa mempelajari koding dan kecerdasan artifisial secara bertahap dan terstruktur. Materi disusun berdasarkan kurikulum pembelajaran
            koding dan AI, dilengkapi latihan interaktif untuk mendukung pemahaman konsep.
          </p>
        </div>

        {/* Navigasi, fitur, informasi */}
        {groups.map((group) => (
          <div key={group.title} className="flex flex-col gap-[10px]">
            <h3 className="font-['Kumbh_Sans'] text-2xl font-semibold leading-8 text-white">{group.title}</h3>

            <ul className="flex list-none flex-col p-0">
              {group.links.map((item) => (
                <li key={item}>
                  <Link href="/" className="inline-flex min-h-7 items-center font-['Poppins'] text-base leading-7 text-[#E4E4E7]/80 no-underline hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Sosial */}
        <div className="flex flex-col gap-[10px]">
          <h3 className="font-['Kumbh_Sans'] text-2xl font-semibold leading-8 text-white">Sosial</h3>

          <div className="flex items-center gap-1">
            {["f", "◎", "in", "𝕏"].map((item) => (
              <span key={item} className="flex h-9 w-9 items-center justify-center rounded-full text-lg font-semibold text-[#E4E4E7]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#D4D4D8]/40">
        <div className="mx-auto flex min-h-[68px] max-w-[1212px] flex-wrap items-center justify-between gap-3 px-6 py-5 xl:px-0">
          <p className="font-['Kumbh_Sans'] text-base leading-7">© Copyright KABIRU 2026. All Rights Reserved</p>

          <p className="font-['Kumbh_Sans'] text-base leading-7">Disusun berdasarkan Kurikulum Koding dan Kecerdasan Artifisial</p>
        </div>
      </div>
    </footer>
  );
}

/* =====================================================
   LEARNER HEADER
===================================================== */

function LearnerHeader() {
  return (
    <header className="grid h-[82px] grid-cols-[306px_minmax(0,1fr)] bg-white">
      {/* Logo sebelah kiri */}
      <div className="flex items-center border-b border-[#E8E8E8] pl-16">
        <Link href="/dashboard">
          <Image src="/icons/logo.svg" alt="Kabiru Web" width={140} height={42} />
        </Link>
      </div>

      {/* TopBar dari project */}
      <div className="min-w-0">
        <TopBar />
      </div>
    </header>
  );
}

/* =====================================================
   ILLUSTRATION NOT FOUND
===================================================== */

function NotFoundIllustration() {
  return (
    <div className="relative flex h-[350px] w-[500px] max-w-full items-center justify-center">
      {/* Ilustrasi karakter */}
      <Image src="/images/errors/not-found-illustration.png" alt="Karakter Kabiru" width={320} height={527} className="object-contain" />

      {/* Speech bubble */}
      <MessageCircle className="absolute left-[300px] top-0 h-[163px] w-[173px] text-[#2370AF]" strokeWidth={1} aria-hidden="true" />

      {/* Text bubble */}
      <span className="absolute left-[350px] top-[66px] w-[75px] text-center font-sans text-xs font-medium leading-[15px] text-[#2370AF]">Oops! Error 404</span>
    </div>
  );
}

/* =====================================================
   ILLUSTRATION SERVER ERROR
===================================================== */

function ServerErrorIllustration() {
  return (
    <svg width="90" height="112" viewBox="0 0 90 112" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M45 21.6663C45 13.8886 48.8889 9.44412 56.6667 8.33301" stroke-width="3.33333" stroke-linecap="round" stroke="#8AA4D6" />
      <path
        d="M58.3335 13.333C61.0949 13.333 63.3335 11.0944 63.3335 8.33301C63.3335 5.57158 61.0949 3.33301 58.3335 3.33301C55.5721 3.33301 53.3335 5.57158 53.3335 8.33301C53.3335 11.0944 55.5721 13.333 58.3335 13.333Z"
        fill="#9FB3D9"
      />
      <path
        d="M58.3333 21.667H31.6667C19.7005 21.667 10 31.3675 10 43.3337V55.0003C10 66.9665 19.7005 76.667 31.6667 76.667H58.3333C70.2995 76.667 80 66.9665 80 55.0003V43.3337C80 31.3675 70.2995 21.667 58.3333 21.667Z"
        fill="#3F7FD0"
      />
      <path
        d="M58.3335 31.667H31.6668C24.303 31.667 18.3335 37.6365 18.3335 45.0003V53.3337C18.3335 60.6975 24.303 66.667 31.6668 66.667H58.3335C65.6973 66.667 71.6668 60.6975 71.6668 53.3337V45.0003C71.6668 37.6365 65.6973 31.667 58.3335 31.667Z"
        fill="#0F2748"
      />
      <path
        d="M33.3333 51.9993C36.555 51.9993 39.1667 49.0146 39.1667 45.3327C39.1667 41.6508 36.555 38.666 33.3333 38.666C30.1117 38.666 27.5 41.6508 27.5 45.3327C27.5 49.0146 30.1117 51.9993 33.3333 51.9993Z"
        fill="#6FF0FF"
      />
      <path
        d="M56.6668 51.9993C59.8885 51.9993 62.5002 49.0146 62.5002 45.3327C62.5002 41.6508 59.8885 38.666 56.6668 38.666C53.4452 38.666 50.8335 41.6508 50.8335 45.3327C50.8335 49.0146 53.4452 51.9993 56.6668 51.9993Z"
        fill="#6FF0FF"
      />
      <path d="M25 37H41.6667V42C36.1111 40.8889 30.5556 42 25 45.3333V37Z" fill="#0F2748" />
      <path d="M65.0002 37H48.3335V42C53.8891 40.8889 59.4446 42 65.0002 45.3333V37Z" fill="#0F2748" />
      <path d="M36.6665 56.9997C42.2221 53.1108 47.7776 53.1108 53.3332 56.9997" stroke-width="2.91667" stroke-linecap="round" stroke="#6FF0FF" />
      <path d="M59.9998 52C62.7776 56.4444 62.7776 59.5 59.9998 61.1667C57.2221 59.5 57.2221 56.4444 59.9998 52Z" fill="#9BE8FF" />
      <path
        d="M58.3333 80H31.6667C25.2233 80 20 85.2233 20 91.6667V96.6667C20 103.11 25.2233 108.333 31.6667 108.333H58.3333C64.7767 108.333 70 103.11 70 96.6667V91.6667C70 85.2233 64.7767 80 58.3333 80Z"
        fill="#2C5F9E"
      />
    </svg>
  );
}

/* =====================================================
   404 PAGE
===================================================== */

export function NotFoundStatusPage({ audience }: { audience: Audience }) {
  const isGuest = audience === "guest";

  const description = isGuest
    ? "Sepertinya halaman yang kamu cari tidak ada atau sudah dipindahkan. Yuk kembali ke beranda dan lanjutkan belajarmu."
    : "Sepertinya halaman yang kamu cari tidak ada atau sudah dipindahkan. Yuk kembali ke dashboard dan lanjutkan belajarmu.";

  return (
    <div className="min-h-screen bg-[#FCFDFD]">
      {isGuest ? <PublicHeader /> : <LearnerHeader />}

      <main className={["relative", isGuest ? "min-h-[786px]" : "min-h-[800px]"].join(" ")}>
        <div
          className={[
            "grid grid-cols-1 gap-10 px-6 py-14 items-center", // <--- Tambahkan items-center di sini
            "lg:ml-[4.44vw] lg:mr-[4.44vw]",
            "lg:grid-cols-[317px_minmax(0,1fr)]",
            "lg:gap-[250px] lg:px-0 lg:py-0",
            isGuest ? "lg:pt-[142px]" : "lg:pt-[156px]",
          ].join(" ")}
        >
          <NotFoundIllustration />

          {/* Text */}
          <div className="lg:mt-[8px]">
            <h1 className="font-sans text-4xl font-bold leading-[1.5] text-[#3F3F46]">OH NO!</h1>

            <p className="mt-[11px] max-w-[759px] font-sans text-2xl font-normal leading-[1.5] text-[#27272A]">{description}</p>

            <Link
              href={isGuest ? "/" : "/dashboard"}
              className="mt-8 inline-flex min-h-[39px] items-center justify-center rounded-lg border-[3px] border-[#277BC0] bg-[rgba(240,241,243,0.2)] px-4 font-sans text-xs font-semibold text-[#277BC0] no-underline shadow-[0_6px_0_#2370AF] transition-transform hover:-translate-y-0.5"
            >
              Kembali ke {isGuest ? "Beranda" : "Dashboard"}
            </Link>
          </div>
        </div>
      </main>

      {isGuest && <PublicFooter />}
    </div>
  );
}

/* =====================================================
   500 PAGE
===================================================== */

export function ServerErrorStatusPage({ audience }: { audience: Audience }) {
  const isGuest = audience === "guest";

  const retryHref = isGuest ? "/preview/500-guest" : "/preview/500-learner";

  const backHref = isGuest ? "/" : "/dashboard";
  const backLabel = isGuest ? "Beranda" : "Dashboard";

  const description = isGuest
    ? "Sepertinya server kami sedang bermasalah. Tenang, ini bukan salahmu. Yuk muat ulang halamannya atau kembali ke beranda dan lanjutkan belajarmu."
    : "Sepertinya server kami sedang bermasalah. Tenang, ini bukan salahmu. Yuk muat ulang halamannya atau kembali ke dashboard dan lanjutkan belajarmu.";

  return (
    <div className="min-h-screen bg-[#FCFDFD]">
      {isGuest ? <PublicHeader /> : <LearnerHeader />}

      <main className={["flex flex-col items-center px-6", "min-h-[786px] pt-[50px]", !isGuest ? "min-h-[800px] pt-[82px]" : ""].join(" ")}>
        {/* Ilustrasi */}
        <ServerErrorIllustration />

        {/* Angka 500 dan label */}
        <div className="relative mt-[10px] flex h-[174px] w-[343px] items-center justify-center">
          <span className="flex h-[154px] w-[323px] items-center justify-center font-sans text-[150px] font-semibold leading-none text-[#277BC0] [text-shadow:0px_6px_0px_#2370AF]">500</span>

          <span className="absolute left-[211px] top-[-16px] flex h-[32px] w-[149px] rotate-[10deg] items-center justify-center rounded-full border-[3px] border-[#E8A200] bg-[#FFB200] px-2 text-[13px] font-bold leading-[19px] text-white shadow-[0_4px_0_#E8A200]">
            SERVER ERROR!
          </span>
        </div>

        {/* Deskripsi */}
        <p className="mt-5 max-w-[619px] text-center font-sans text-xl font-normal leading-[1.5] text-[#27272A]">{description}</p>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-[27px]">
          {/* Reload */}
          <a
            href={retryHref}
            className="inline-flex h-[45px] w-[108px] items-center justify-center rounded-lg border-[3px] border-[#2370AF] bg-[#277BC0] px-4 font-sans text-xs font-semibold text-white no-underline shadow-[0_6px_0_#2370AF] transition-transform hover:-translate-y-0.5"
          >
            Muat Ulang
          </a>

          {/* Back */}
          <Link
            href={backHref}
            className="inline-flex h-[45px] w-[180px] items-center justify-center rounded-lg border-[3px] border-[#277BC0] bg-[rgba(240,241,243,0.2)] px-3 font-sans text-xs font-semibold text-[#277BC0] no-underline shadow-[0_6px_0_#2370AF] transition-transform hover:-translate-y-0.5"
          >
            Kembali ke {backLabel}
          </Link>
        </div>
      </main>

      {isGuest && <PublicFooter />}
    </div>
  );
}
