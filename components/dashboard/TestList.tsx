"use client";

import React from "react";
import { useGetProjectsQuery } from "@/lib/redux/apiService";
import { TestCard } from "./TestCard";
import { motion } from "framer-motion";
import { AlertCircle, Loader2 } from "lucide-react";

export const TestList: React.FC = () => {
  const { data: projects, isLoading, error, refetch } = useGetProjectsQuery();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 py-16 items-center justify-center min-h-[400px] bg-white/40 rounded-3xl border border-dashed border-slate-200">
        <div className="relative">
          <Loader2 className="w-10 h-10 text-primary-blue animate-spin" strokeWidth={2.5} />
          <div className="absolute inset-0 bg-primary-blue/10 rounded-full blur-xl animate-pulse" />
        </div>
        <p className="text-slate-500 font-bold text-[15px] animate-pulse">Preparamo i tuoi test...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col gap-4 py-16 items-center justify-center min-h-[400px] text-center bg-white/40 rounded-3xl border border-dashed border-red-100">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-2">
          <AlertCircle className="w-8 h-8 text-red-500" />
        </div>
        <div className="space-y-1">
          <p className="text-slate-900 font-black text-lg">Oops! Qualcosa è andato storto</p>
          <p className="text-slate-500 font-medium text-sm">Non siamo riusciti a caricare i test in questo momento.</p>
        </div>
        <button
          onClick={() => refetch()}
          className="mt-2 text-sm font-black text-white bg-primary-blue px-8 py-3 rounded-full hover:bg-primary-blue-dark transition-all shadow-md hover:shadow-lg active:scale-95"
        >
          Riprova
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="flex flex-col gap-4 overflow-y-auto custom-scrollbar pr-2"
      style={{ maxHeight: "calc(100vh - 380px)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      {projects?.map((project, idx) => (
        <TestCard key={project.id} project={project} index={idx} />
      ))}
    </motion.div>
  );
};
