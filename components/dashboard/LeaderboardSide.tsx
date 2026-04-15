"use client";

import React from "react";
import Image from "next/image";
import { useGetLeaderboardQuery } from "@/lib/redux/apiService";
import { motion } from "framer-motion";
import { Star, Loader2, Crown } from "lucide-react";

export const LeaderboardSide: React.FC = () => {
  const { data: rankings, isLoading } = useGetLeaderboardQuery();

  if (isLoading) {
    return (
      <div className="bg-[#0d2b6e] rounded-[24px] p-6 flex items-center justify-center min-h-[360px]">
        <Loader2 className="w-7 h-7 text-white/40 animate-spin" />
      </div>
    );
  }

  const scores = [2980, 2721, 2579, 2579];
  const starCounts = [5, 4, 3, 3];

  const rankStyle = [
    { text: "text-[#f1b913]", border: "border-[#f1b913]" },
    { text: "text-zinc-400",  border: "border-zinc-400" },
    { text: "text-orange-400",border: "border-orange-400" },
    { text: "text-zinc-300",  border: "border-zinc-300" },
  ];

  const avatarStyle = [
    null,
    "bg-[#b8c8ff] border-[#7b9eff]",
    "bg-[#ffb99b] border-[#ff8a5c]",
    "bg-[#c8b8ff] border-[#9b7bff]",
  ];

  return (
    <div className="bg-deep-navy rounded-[32px] !p-6 lg:!p-7 shadow-premium flex flex-col !gap-6">

      {/* Title */}
      <div className="border-[3px] border-accent-gold/40 rounded-2xl !py-4 !px-5 flex items-center justify-center bg-white/5 backdrop-blur-sm">
        <h2 className="text-[20px] md:text-[22px] font-black text-white tracking-[0.25em] uppercase">
          LEADERBOARD
        </h2>
      </div>

      {/* Rows */}
      <div className="flex flex-col !gap-3.5">
        {(rankings?.slice(0, 4) ?? Array(4).fill(null)).map((user, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white rounded-[20px] !py-3.5 !px-5 flex items-center !gap-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-default group"
          >
            {/* Rank circle */}
            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-black text-[13px] shrink-0 transition-colors ${rankStyle[idx].text} ${rankStyle[idx].border} bg-white group-hover:bg-slate-50`}>
              {idx + 1}
            </div>

            {/* Avatar */}
            {idx === 0 ? (
              <div className="relative shrink-0 w-10 h-10">
                <div className="w-10 h-10 rounded-full bg-accent-gold flex items-center justify-center shadow-lg border-2 border-white">
                  <Crown className="w-5 h-5 text-white fill-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[7px] font-black !px-2 !py-0.5 rounded-sm tracking-widest whitespace-nowrap shadow-md uppercase">
                  Winner
                </div>
              </div>
            ) : (
              <div className={`w-10 h-10 rounded-full shrink-0 border-2 overflow-hidden shadow-sm ${avatarStyle[idx] || "border-slate-100 bg-slate-50"}`}>
                {user?.avatar && (
                  <Image src={user.avatar} alt={user.name || "User"} width={40} height={40} className="object-cover w-full h-full" />
                )}
              </div>
            )}

            {/* Name + stars */}
            <div className="flex flex-col flex-1 min-w-0">
              <span className="font-extrabold text-slate-800 text-[14px] truncate leading-tight group-hover:text-primary-blue transition-colors">
                {user?.name || "Giulia Verdini"}
              </span>
              <div className="flex items-center !gap-0.5 !mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-[11px] h-[11px] ${i < starCounts[idx] ? "text-accent-gold fill-accent-gold" : "text-slate-200 fill-slate-100"}`} />
                ))}
              </div>
            </div>

            {/* Score */}
            <div className="flex flex-col items-end shrink-0">
              <span className="font-black text-[14px] text-accent-gold tabular-nums">
                {scores[idx]}
              </span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Points</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

