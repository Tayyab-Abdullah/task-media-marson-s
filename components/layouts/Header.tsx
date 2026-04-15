"use client";

import React from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { Grid } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { user } = useAuth();

  return (
    <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-30 px-6 py-3 md:px-8 border-b border-slate-200/60 shadow-sm">
      <div className="flex items-center justify-between w-full max-w-[1600px] mx-auto">

        {/* LEFT: Logo + Greeting */}
        <div className="flex items-center gap-6">
          {/* Mobile hamburger */}
          <button
            onClick={onMenuClick}
            className="md:hidden w-10 h-10 rounded-xl bg-primary-blue/5 flex items-center justify-center text-primary-blue hover:bg-primary-blue/10 transition-colors"
          >
            <Grid className="w-5 h-5" strokeWidth={2.5} />
          </button>

          {/* Logo (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image src="/logo.png" alt="Logica" fill className="object-contain" />
            </div>
            <span className="font-black text-[24px] text-primary-blue tracking-tighter leading-none">logica</span>
          </div>

          <div className="h-8 w-px bg-slate-200 hidden md:block mx-2" />

          {/* Greeting */}
          <div className="flex flex-col">
            <h1 className="text-[18px] md:text-[20px] font-black text-slate-900 tracking-tight leading-tight">
              Ciao, Dr. Luca!
            </h1>
            <p className="text-[11px] text-slate-500 font-medium hidden md:block">
              Inizia la giornata con un nuovo corso!
            </p>
          </div>
        </div>

        {/* CENTER: Coin pill */}
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-full pl-4 pr-1.5 py-1.5 flex items-center gap-3 shadow-md border border-amber-600/20">
            <span className="font-black text-amber-950 text-[16px] md:text-[18px] tracking-tight">345</span>
            <div className="bg-white rounded-full p-1 shadow-sm flex items-center justify-center">
              <Image src="/coin.png" alt="coin" width={22} height={22} className="w-5 h-5 md:w-5.5 md:h-5.5" />
            </div>
          </div>
        </div>

        {/* RIGHT: Avatar */}
        <div className="flex items-center">
          <div className="w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-slate-100 shadow-md relative hover:ring-4 hover:ring-primary-blue/10 transition-all cursor-pointer">
            <Image
              src={user?.avatar || "/profile-image.png"}
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </header>
  );
};

