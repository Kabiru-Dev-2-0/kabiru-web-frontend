"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const mainMenus = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: "/icons/dashboard.svg",
  },
  {
    label: "Belajar",
    href: "/belajar",
    icon: "/icons/belajar.svg",
    large: true,
  },
  {
    label: "Eksplorasi",
    href: "/eksplorasi",
    icon: "/icons/eksplorasi.svg",
  },
  {
    label: "Practice",
    href: "/practice",
    icon: "/icons/eksplorasi.svg",
  },
  {
    label: "Tantangan",
    href: "/tantangan",
    icon: "/icons/tantangan.svg",
  },
  {
    label: "Papan Peringkat",
    href: "/peringkat",
    icon: "/icons/papan-peringkat.svg",
  },
];

const accountMenus = [
  {
    label: "Pengaturan",
    href: "/pengaturan",
    icon: "/icons/pengaturan.svg",
  },
  {
    label: "Keluar Akun",
    href: "/logout",
    icon: "/icons/keluar.svg",
    danger: true,
  },
];

type MenuItem = {
  label: string;
  href: string;
  icon: string;
  large?: boolean;
  danger?: boolean;
};

function SidebarMenu({ item, pathname }: { item: MenuItem; pathname: string }) {
  const isActive =
    pathname === item.href ||
    (item.href !== "/" && pathname.startsWith(`${item.href}/`));

  return (
    <li>
      <Link
        href={item.href}
        aria-current={isActive ? "page" : undefined}
        className={[
          "group flex h-12 w-full items-center gap-2 rounded-lg px-5",
          "whitespace-nowrap no-underline",
          "font-['Encode_Sans'] text-lg font-medium leading-7",
          "transition-colors duration-150",
          "focus-visible:outline-2 focus-visible:outline-offset-2",
          "focus-visible:outline-[#5295CD]",
          item.danger ? "text-[#F31260] hover:bg-[#FFF0F5]" : "text-[#71717A]",
          item.large ? "text-xl" : "",
          isActive
            ? "rounded-xl bg-[#2370AF] font-semibold text-white shadow-[0_3px_0_#205994]"
            : "",
          !isActive && !item.danger
            ? "hover:rounded-xl hover:bg-[#5295CD] hover:font-semibold hover:text-white hover:shadow-[0_3px_0_#205994]"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <img
          src={item.icon}
          alt=""
          aria-hidden="true"
          className="h-7 w-7 shrink-0"
        />
        <span>{item.label}</span>
      </Link>
    </li>
  );
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="box-border flex min-h-screen w-[306px] shrink-0 flex-col gap-8 border-r border-[#E8E8E8] bg-white p-6">
      {/* Logo */}
      <Link href="/dashboard" aria-label="Kabiru Web - Dashboard">
        <img
          src="/assets/logo.svg"
          alt="Kabiru Web"
          className="block h-[42px] w-[140px] object-contain"
        />
      </Link>

      {/* Navigasi utama dan navigasi akun */}
      <div className="flex min-h-0 flex-1 flex-col justify-between">
        <nav aria-label="Navigasi utama">
          <ul className="m-0 flex list-none flex-col gap-[14px] p-0">
            {mainMenus.map((item) => (
              <SidebarMenu key={item.href} item={item} pathname={pathname} />
            ))}
          </ul>
        </nav>

        <nav aria-label="Navigasi akun">
          <ul className="m-0 flex list-none flex-col gap-[14px] p-0">
            {accountMenus.map((item) => (
              <SidebarMenu key={item.href} item={item} pathname={pathname} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
