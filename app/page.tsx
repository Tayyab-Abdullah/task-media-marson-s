"use client";

import React, { useState } from "react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { XPBanner } from "@/components/dashboard/XPBanner";
import { TestList } from "@/components/dashboard/TestList";
import { LeaderboardSide } from "@/components/dashboard/LeaderboardSide";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"CORSI" | "STORICO" | "LEADERBOARD">("CORSI");
  const tabs = ["CORSI", "STORICO", "LEADERBOARD"] as const;

  return (
    <MainLayout>
      <div className="flex flex-col gap-5 h-full w-full">

        {/* XP Banner */}
        <XPBanner />

        {/* Desktop: 2-col grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 lg:gap-6 items-start w-full">
          <TestList />
          <LeaderboardSide />
        </div>

        {/* Mobile: tab switcher + content */}
        <div className="md:hidden flex flex-col gap-4 w-full">

          {/* Tab switcher */}
          <div className="flex w-full bg-white rounded-[32px] p-[5px] shadow-sm border border-black/[0.05]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3.5 px-2 rounded-[28px] text-[11px] font-extrabold tracking-wide transition-all duration-300 relative ${
                  activeTab === tab ? "text-white" : "text-[#8a94a6]"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="mobileTab"
                    className="absolute inset-0 bg-[#0359C8] rounded-[28px] shadow-[0_4px_12px_rgba(3,89,200,0.35)]"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.55 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="w-full min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === "CORSI" && (
                <motion.div
                  key="corsi"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <TestList />
                </motion.div>
              )}
              {activeTab === "LEADERBOARD" && (
                <motion.div
                  key="leaderboard"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <LeaderboardSide />
                </motion.div>
              )}
              {activeTab === "STORICO" && (
                <motion.div
                  key="storico"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mb-4 text-4xl">
                    🕒
                  </div>
                  <h3 className="font-black text-zinc-400">Nessuna simulazione archiviata</h3>
                  <p className="text-sm text-zinc-300 max-w-[200px] mt-2">
                    Qui troverai lo storico delle tue simulazioni passate.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </MainLayout>
  );
}
