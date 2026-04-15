"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { Trophy, Zap, TrendingUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const XPCard: React.FC = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="card-soft w-full max-w-sm animate-pulse space-y-4">
        <div className="h-6 w-1/3 bg-zinc-200 dark:bg-zinc-800 rounded" />
        <div className="h-10 w-full bg-zinc-200 dark:bg-zinc-800 rounded" />
        <div className="h-4 w-2/3 bg-zinc-200 dark:bg-zinc-800 rounded" />
      </div>
    );
  }

  if (!user) return null;

  const currentLevelProgress = (user.xp % 1000) / 10; // Simple mock calculation

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="card-soft w-full p-6 relative overflow-hidden group border-2 border-transparent hover:border-indigo-500/20 transition-all shadow-xl hover:shadow-2xl bg-white dark:bg-zinc-950"
    >
      {/* Background Decorative Elements */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500" />
      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-amber-500/10 dark:bg-amber-400/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500" />

      <div className="flex items-start justify-between mb-6 relative z-10">
        <div>
          <h3 className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
            <Trophy className="w-3 h-3 text-amber-500" /> Experience Level
          </h3>
          <p className="text-3xl font-black text-zinc-900 dark:text-zinc-100 flex items-baseline gap-2">
            Level {user.level}
            <span className="text-xs font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 rounded-full">
              {user.performance} performance
            </span>
          </p>
        </div>
        <div className="xp-badge">
          <Zap className="w-4 h-4 fill-current" />
          {user.xp.toLocaleString()} <span className="text-[10px]">XP</span>
        </div>
      </div>

      <div className="space-y-4 relative z-10">
        <div className="flex items-center justify-between text-xs font-bold">
          <span className="text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">
            Next Level: {user.level + 1}
          </span>
          <span className="text-indigo-600 dark:text-indigo-400">
            {currentLevelProgress}%
          </span>
        </div>

        {/* Progress Bar Container */}
        <div className="relative h-4 w-full bg-zinc-100 dark:bg-zinc-900 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${currentLevelProgress}%` }}
            transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
            className="absolute top-0 left-0 h-full bg-linear-to-r from-indigo-500 via-purple-500 to-indigo-600"
          >
            {/* Animated Shine Effect */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent w-full h-full -skew-x-45 animate-[shimmer_2s_infinite]" />
          </motion.div>
        </div>

        <div className="flex items-center gap-6 pt-4 border-t border-zinc-100 dark:border-zinc-900">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-black">
              Department
            </span>
            <span className="text-sm font-semibold flex items-center gap-1.5 text-zinc-900 dark:text-zinc-100">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              {user.department}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-black">
              Rank
            </span>
            <span className="text-sm font-semibold flex items-center gap-1.5 text-zinc-900 dark:text-zinc-100">
              <TrendingUp className="w-3.5 h-3.5 text-green-500" />
              Top 5%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
