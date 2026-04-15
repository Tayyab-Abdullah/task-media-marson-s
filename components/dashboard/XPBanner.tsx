"use client";

import React from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const XPBanner: React.FC = () => {
  const { user } = useAuth();

  const currentXP = user?.xp || 800;
  const minXP = 500;
  const maxXP = 1000;

  // Set to 80% visually as requested
  const progressPercent = 80;

  return (
    <section className="relative w-full h-[120px] md:h-[220px] bg-linear-to-r from-[#99CCFF] via-[#74A9F6] to-[#1D71D4] rounded-[24px] md:rounded-[40px] overflow-hidden flex items-center shadow-2xl group !p-0">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full blur-2xl md:blur-3xl !-mr-16 !-mt-16 md:!-mr-32 md:!-mt-32" />

      {/* Left doctor - Hidden on small screens */}
      <div className="hidden md:block absolute left-4 md:left-8 bottom-0 w-[120px] md:w-[160px] h-[95%] pointer-events-none z-10">
        <Image
          src="/doctor-image-2.png"
          alt="Doctor Left"
          fill
          className="object-contain object-bottom drop-shadow-2xl"
          priority
        />
      </div>

      {/* Progress area - Full width on mobile, 80% on desktop */}
      <div className="relative z-20 flex-1 !px-6 md:!px-50 flex flex-col justify-center w-full md:w-[80%] !mx-auto">
        <div className="relative !py-8 md:!py-12">
          {/* XP bubble Tooltip - Scaled for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ left: `${progressPercent}%` }}
            className="absolute -top-4 md:-top-6 -translate-x-1/2 flex flex-col items-center z-30 pointer-events-none"
          >
            <div className="bg-white text-[#2E69FF] !px-3 md:!px-5 !py-1 md:!py-2 rounded-xl md:rounded-2xl text-[14px] md:text-[18px] font-black shadow-2xl whitespace-nowrap border-b-2 md:border-b-4 border-slate-200">
              {currentXP} XP
            </div>
            <div className="w-5 h-5 md:w-7 md:h-7 bg-[#2E69FF] rounded-full flex items-center justify-center shadow-lg !-mt-1.5 md:!-mt-2.5 border-2 md:border-[3px] border-white">
              <ChevronDown
                className="w-3 h-3 md:w-5 md:h-5 text-white"
                strokeWidth={4}
              />
            </div>
          </motion.div>

          {/* Progress bar track - Smaller height on mobile */}
          <div className="h-10 md:h-14 w-full bg-white/20 backdrop-blur-md rounded-full relative border-2 md:border-[4px] border-white/40 shadow-inner overflow-hidden !p-1">
            {/* Left XP label - Hidden/Smaller on mobile */}
            <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-[12px] md:text-[18px] font-black text-white drop-shadow-md">
              {minXP} XP
            </div>

            {/* Filled bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute left-0 top-0 h-full rounded-full overflow-hidden shadow-[10px_0_20px_rgba(0,0,0,0.1)]"
              style={{
                background:
                  "repeating-linear-gradient(45deg, #FFB347, #FFB347 10px, #FFCC33 10px, #FFCC33 20px)",
              }}
            >
              {/* Internal Gloss */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            </motion.div>

            {/* Right XP label - Hidden/Smaller on mobile */}
            <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-[12px] md:text-[18px] font-black text-white/50 drop-shadow-sm">
              {maxXP} XP
            </div>
          </div>
        </div>
      </div>

      {/* Right doctor - Hidden on small screens */}
      <div className="hidden md:block absolute right-4 md:right-8 bottom-0 w-[140px] md:w-[200px] h-[95%] pointer-events-none z-10">
        <Image
          src="/doctor-image-1.png"
          alt="Doctor Right"
          fill
          className="object-contain object-bottom drop-shadow-2xl"
          priority
        />
      </div>
    </section>
  );
};
