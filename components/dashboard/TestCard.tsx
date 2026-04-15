"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/lib/redux/apiService";

interface TestCardProps {
  project: Project;
  index: number;
}

export const TestCard: React.FC<TestCardProps> = ({ index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -2, x: 4 }}
      className="w-full bg-white rounded-2xl !p-5 flex items-center !gap-5 shadow-sm hover:shadow-md transition-all cursor-pointer border border-slate-100 group"
    >
      {/* Avatar */}
      <div className="relative w-12 h-12 shrink-0">
        <Image
          src="/cards-profile.png"
          alt="User"
          width={48}
          height={48}
          className="rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform"
        />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <h3 className="font-extrabold text-primary-blue text-[15px] tracking-tight leading-tight group-hover:text-primary-blue-dark transition-colors">
          Admin logica test {index + 1}
        </h3>
        <p className="text-[12px] text-slate-500 font-medium !mt-1 leading-relaxed line-clamp-1 group-hover:text-slate-600 transition-colors">
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      {/* Action Arrow */}
      <div className="text-slate-300 group-hover:text-primary-blue group-hover:translate-x-1 transition-all">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </div>
    </motion.div>
  );
};

