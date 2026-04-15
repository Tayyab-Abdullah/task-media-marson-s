"use client";

import React from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";

export const XPCard: React.FC = () => {
  const { user, isLoading } = useAuth();

  // Fallback for demo if user context is empty, using your provided object
  const currentUser = user || {
    xp: 800,
    level: 42,
  };

  const minXP = 500;
  const maxXP = 1000;
  const currentXP = currentUser.xp;

  // Logic: (800 - 500) / (1000 - 500) = 0.6 or 60%
  // To force 80% as requested:
  const progressPercent = 80;

  if (isLoading)
    return (
      <div className="w-full h-[220px] animate-pulse bg-slate-200 rounded-[40px]" />
    );

  return (
    <div className="w-full relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#99CCFF] via-[#74A9F6] to-[#1D71D4] h-[220px] flex items-center !px-0 shadow-2xl">
      {/* LEFT CHARACTER */}
      <div className="absolute left-4 bottom-0 w-[180px] h-[200px] z-20">
        <Image
          src="/doctor-mask.png"
          alt="Doctor"
          fill
          className="object-contain object-bottom"
        />
      </div>

      {/* CENTER PROGRESS SECTION - Forced to 80% of main container */}
      <div className="w-[80%] mx-auto relative h-full flex flex-col justify-center z-10">
        {/* Floating Tooltip Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ left: `${progressPercent}%` }}
          className="absolute top-6 -translate-x-1/2 flex flex-col items-center z-30"
        >
          <div className="bg-white !px-5 !py-2 rounded-2xl shadow-xl border-b-4 border-slate-200">
            <span className="text-[#2E69FF] font-black text-xl whitespace-nowrap">
              {currentXP} XP
            </span>
          </div>
          {/* Arrow / Circle indicator */}
          <div className="w-7 h-7 bg-[#2E69FF] rounded-full flex items-center justify-center !-mt-2.5 border-[3px] border-white shadow-lg">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </motion.div>

        {/* The Progress Bar Container */}
        <div className="relative w-full h-16 bg-white/25 backdrop-blur-md rounded-full border-[4px] border-white/40 overflow-hidden !p-1.5 shadow-inner">
          {/* Track Labels (Min/Max) */}
          <div className="absolute inset-0 flex items-center justify-between !px-10 z-20 pointer-events-none">
            <span className="text-white font-black text-xl drop-shadow-md">
              {minXP} XP
            </span>
            <span className="text-white/70 font-black text-xl drop-shadow-md">
              {maxXP} XP
            </span>
          </div>

          {/* Progress Fill (Striped Orange) */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full rounded-full relative overflow-hidden shadow-[0_0_20px_rgba(255,165,0,0.4)]"
            style={{
              background:
                "linear-gradient(45deg, #FFB347 25%, #FFCC33 25%, #FFCC33 50%, #FFB347 50%, #FFB347 75%, #FFCC33 75%, #FFCC33 100%)",
              backgroundSize: "32px 32px",
            }}
          >
            {/* White Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* RIGHT CHARACTER */}
      <div className="absolute right-4 bottom-0 w-[220px] h-[210px] z-20">
        <Image
          src="/doctor-coat.png"
          alt="Doctor"
          fill
          className="object-contain object-bottom"
        />
      </div>

      {/* Background Depth Tints */}
      <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-blue-900/20 to-transparent" />
    </div>
  );
};
