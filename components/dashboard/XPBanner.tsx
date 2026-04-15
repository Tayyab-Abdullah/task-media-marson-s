"use client";

import React from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const XPBanner: React.FC = () => {
  const { user } = useAuth();

  // Using provided user object logic
  const currentXP = user?.xp || 800;
  const minXP = 500;
  const maxXP = 1000;

  // Set to 80% visually as requested
  const progressPercent = 80;

  return (
    <section className="relative w-full h-[180px] md:h-[220px] bg-linear-to-r from-[#99CCFF] via-[#74A9F6] to-[#1D71D4] rounded-[40px] overflow-hidden flex items-center shadow-2xl group !p-0">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl !-mr-32 !-mt-32" />

      {/* Left doctor */}
      <div className="absolute left-4 md:left-8 bottom-0 w-[120px] md:w-[160px] h-[95%] pointer-events-none z-10">
        <Image
          src="/doctor-image-2.png"
          alt="Doctor Left"
          fill
          className="object-contain object-bottom drop-shadow-2xl"
          priority
        />
      </div>

      {/* Progress area - Forced to 80% width */}
      <div className="relative z-20 flex-1 !px-0 flex flex-col justify-center w-[60%] !mx-50">
        <div className="relative !py-12">
          {/* XP bubble Tooltip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ left: `${progressPercent}%` }}
            className="absolute -top-6 -translate-x-1/2 flex flex-col items-center z-30 pointer-events-none"
          >
            <div className="bg-white text-[#2E69FF] !px-5 !py-2 rounded-2xl text-[18px] font-black shadow-2xl whitespace-nowrap border-b-4 border-slate-200">
              {currentXP} XP
            </div>
            <div className="w-7 h-7 bg-[#2E69FF] rounded-full flex items-center justify-center shadow-lg !-mt-2.5 border-[3px] border-white">
              <ChevronDown className="w-5 h-5 text-white" strokeWidth={4} />
            </div>
          </motion.div>

          {/* Progress bar track */}
          <div className="h-14 w-full bg-white/20 backdrop-blur-md rounded-full relative border-[4px] border-white/40 shadow-inner overflow-hidden !p-1">
            {/* Left XP label (Integrated like screenshot) */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 text-[18px] font-black text-white drop-shadow-md">
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
                  "repeating-linear-gradient(45deg, #FFB347, #FFB347 15px, #FFCC33 15px, #FFCC33 30px)",
              }}
            >
              {/* Internal Gloss */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            </motion.div>

            {/* Right XP label (Integrated like screenshot) */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 text-[18px] font-black text-white/50 drop-shadow-sm">
              {maxXP} XP
            </div>
          </div>
        </div>
      </div>

      {/* Right doctor */}
      <div className="absolute right-4 md:right-8 bottom-0 w-[140px] md:w-[200px] h-[95%] pointer-events-none z-10 hidden lg:block">
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
