"use client";

import React from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const XPBanner: React.FC = () => {
  const { user } = useAuth();

  const currentXP = user?.xp || 650;
  const minXP = 500;
  const maxXP = 800;
  const progressPercent = Math.min(100, Math.max(0, ((currentXP - minXP) / (maxXP - minXP)) * 100));

  return (
    <section className="relative w-full h-[180px] md:h-[200px] bg-linear-to-br from-primary-blue-light via-primary-blue to-primary-blue-dark rounded-[32px] overflow-hidden flex items-center shadow-premium group">
      
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-110 duration-700" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -ml-24 -mb-24 transition-transform group-hover:scale-110 duration-700" />

      {/* Left doctor */}
      <div className="absolute left-4 md:left-8 bottom-0 w-[100px] md:w-[130px] h-[90%] pointer-events-none z-10 transition-transform group-hover:translate-x-1 duration-500">
        <Image
          src="/doctor-image-2.png"
          alt="Doctor Left"
          fill
          className="object-contain object-bottom drop-shadow-lg"
          priority
        />
      </div>

      {/* Progress area */}
      <div className="relative z-20 flex-1 px-28 sm:px-32 md:px-44 flex flex-col justify-center max-w-4xl mx-auto w-full">
        <div className="relative py-8">

          {/* XP bubble */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            style={{ left: `${progressPercent}%` }}
            className="absolute -top-4 -translate-x-1/2 flex flex-col items-center z-30 pointer-events-none"
          >
            <div className="bg-white text-primary-dark px-3 py-1.5 rounded-2xl text-[12px] font-black shadow-xl whitespace-nowrap border-2 border-primary-blue/10 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
              {currentXP} XP
            </div>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg mt-1 border border-primary-blue/5">
              <ChevronDown className="w-4 h-4 text-primary-blue" strokeWidth={3} />
            </div>
          </motion.div>

          {/* Progress bar track */}
          <div className="h-10 w-full bg-black/10 backdrop-blur-sm rounded-full relative border border-white/20 shadow-inner overflow-hidden">
            {/* Left XP label */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 px-3 py-1 rounded-full text-[11px] font-black text-slate-700 shadow-sm">
              {minXP} XP
            </div>

            {/* Filled bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute left-0 top-0 h-full rounded-full overflow-hidden"
              style={{
                background: "repeating-linear-gradient(45deg, #F1B913 0px, #F1B913 15px, #FFD54F 15px, #FFD54F 30px)",
              }}
            >
              {/* Shine effect */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent w-1/2"
              />
            </motion.div>

            {/* Right XP label */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 px-3 py-1 rounded-full text-[11px] font-black text-slate-700 shadow-sm">
              {maxXP} XP
            </div>
          </div>
        </div>
      </div>

      {/* Right doctor */}
      <div className="absolute right-4 md:right-8 bottom-0 w-[100px] md:w-[130px] h-[90%] pointer-events-none z-10 hidden lg:block transition-transform group-hover:-translate-x-1 duration-500">
        <Image
          src="/doctor-image-1.png"
          alt="Doctor Right"
          fill
          className="object-contain object-bottom drop-shadow-lg"
          priority
        />
      </div>
    </section>
  );
};

