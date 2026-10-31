"use client";

import { LeaderboardUser } from "@/types/peringkat";

interface Props {
  user: LeaderboardUser;
  color: "success" | "warning" | "danger";
  height: "tall" | "medium" | "short";
  avatarSrc?: string;
}

const trophyImages: Record<number, string> = {
  1: "/rank-1.png",
  2: "/rank-2.png",
  3: "/rank-3.png",
};

export const PodiumCard = ({ user, color, height, avatarSrc }: Props) => {
  const colorClasses = {
    success: "bg-[#17C964] shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_10px_15px_-3px_rgba(23,201,100,0.4)]",
    warning: "bg-[#F5A524] shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_10px_15px_-3px_rgba(245,165,36,0.4)]",
    danger: "bg-[#F31260] shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_10px_15px_-3px_rgba(243,18,96,0.4)]",
  };

  const heightClasses = {
    tall: "pt-[60px] pb-[40px]",
    medium: "pt-[40px] pb-[20px]", // not used in this context
    short: "pt-[40px] pb-[20px]",
  };

  const avatarBorder = {
    success: "border-4 border-[#17C964]",
    warning: "border-4 border-[#F5A524]",
    danger: "border-4 border-[#F31260]",
  };

  // Pilih gambar trophy sesuai rank, kalau di luar 1-3 fallback ke null (tidak tampil)
  const trophyImgSrc = trophyImages[user.rank] || null;

  let avatarContainerClass = "flex flex-col items-center z-10";
  let avatarContainerStyle = { left: 0, right: 0, marginLeft: "auto", marginRight: "auto" };

  if (height === "tall") {
    avatarContainerClass += " absolute bottom-52 -mb-[69px]";
  } else if (height === "short") {
    avatarContainerClass += " absolute bottom-36 -mb-[40px]";
  } else {
    avatarContainerClass += " absolute bottom-52 -mb-[69px]";
  }

  return (
    <div className="flex flex-col items-center gap-[8px] relative" style={{ width: "145px" }}>
      <div className={`${avatarContainerClass} w-full`} style={avatarContainerStyle}>
        {trophyImgSrc && (
          <div className="relative w-[42px] h-[42px] mb-[6px] flex items-center justify-center">
            <img src={trophyImgSrc} alt={`Trophy ${user.rank}`} className="w-[42px] h-[42px] object-contain" />
          </div>
        )}
        {/* Avatar */}
        <img src={user.avatar} alt={user.username} className={`w-[56px] h-[56px] ${avatarBorder[color]} ring-2 ring-white rounded-full`} />
      </div>

      <div className={`rounded-lg w-full flex flex-col items-center gap-[8px] ${heightClasses[height]} ${colorClasses[color]} justify-center p-2 shadow-md`}>
        <p className="text-lg text-white text-center">{user.username}</p>
        <p className="text-2xl font-extrabold text-white">{user.exp}</p>
      </div>
      {/* Card */}
      {/* <Card className={`w-full ${colorClasses[color]}`} radius="lg">
        <CardBody className={`${heightClasses[height]} flex flex-col items-center gap-[8px]`}>
          <span className="text-lg text-white text-center">{name}</span>
          {rank === 1 ? (
            <div className="flex items-center justify-center gap-[10px]">
              <span className="text-2xl font-extrabold text-white">{exp}</span>
            </div>
          ) : (
            <span className="text-2xl font-extrabold text-white">{exp}</span>
          )}
        </CardBody>
      </Card> */}
    </div>
  );
};
