"use client";

import React from "react";
import {
  FileText,
  Gamepad2,
  FolderArchive,
  BookOpen,
  Award,
  BarChart2,
  LogOut,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { id: "annunci",     label: "Bacheca annunci",         icon: FileText },
  { id: "simulatore", label: "Simulatore",               icon: Gamepad2 },
  { id: "archiviate", label: "Simulazioni archiviate",   icon: FolderArchive },
  { id: "errori",     label: "Quadernino degli errori",  icon: BookOpen },
  { id: "ufficiale",  label: "Simulazione ufficiale",    icon: Award },
  { id: "statistiche",label: "Le mie statistiche",       icon: BarChart2 },
];

const SidebarContent: React.FC<{ onClose?: () => void; isMobile?: boolean }> = ({ onClose, isMobile }) => (
  <div className="flex flex-col h-full">

    {/* Mobile: X close button top-left */}
    {isMobile && onClose && (
      <button
        onClick={onClose}
        className="self-start mb-6 p-1 text-white hover:opacity-70 transition-opacity"
      >
        <X className="w-6 h-6" strokeWidth={2.5} />
      </button>
    )}

    {/* Dashboard button */}
    <button className="w-full bg-slate-900 text-white py-4 px-5 rounded-2xl font-black text-[15px] mb-8 shadow-lg tracking-wide transition-all active:scale-95 hover:bg-slate-800">
      Dashboard
    </button>

    {/* Nav items */}
    <nav className="flex-1 flex flex-col gap-2">
      {navItems.map((item) => (
        <button
          key={item.id}
          className="w-full flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-white/10 transition-all text-left group"
        >
          <item.icon
            className="w-5 h-5 text-white/90 group-hover:text-white shrink-0 transition-colors"
            strokeWidth={2}
          />
          <span className="font-semibold text-[14px] text-white/90 group-hover:text-white tracking-wide transition-colors">
            {item.label}
          </span>
        </button>
      ))}
    </nav>

    {/* Logout */}
    <div className="mt-8">
      <button className="w-full bg-white text-red-500 py-3.5 px-5 rounded-full flex items-center justify-center gap-2.5 font-bold text-[14px] shadow-sm hover:bg-zinc-50 transition-all active:scale-95 border border-black/5">
        <LogOut className="w-[18px] h-[18px]" strokeWidth={2.5} />
        Logout
      </button>
    </div>
  </div>
);

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-[240px] shrink-0 bg-linear-to-b from-primary-blue to-primary-blue-dark rounded-[32px] p-6 my-4 ml-4 mr-0 self-start sticky top-4 shadow-premium" style={{ minHeight: "calc(100vh - 80px)" }}>
        <SidebarContent />
      </aside>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed top-0 left-0 bottom-0 w-[80vw] max-w-[300px] bg-linear-to-b from-primary-blue to-primary-blue-dark z-50 flex flex-col pt-8 pb-8 px-6 shadow-2xl md:hidden"
          >
            <SidebarContent onClose={onClose} isMobile />
          </motion.aside>
        )}
      </AnimatePresence>


    </>
  );
};
