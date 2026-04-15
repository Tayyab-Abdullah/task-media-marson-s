"use client";

import React from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { Grid } from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { user } = useAuth();

  return (
    <header className="w-full bg-white border-b border-slate-50 !px-8 !py-2">
      <div className="mx-auto flex items-center justify-between">
        {/* LEFT: Logo and Greeting */}
        <div className="flex items-center !gap-12">
          {/* Mobile hamburger - Restored for functionality */}
          <button
            onClick={onMenuClick}
            className="md:hidden w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary-blue hover:bg-slate-100 transition-colors !p-1"
          >
            <Grid className="w-6 h-6" strokeWidth={2.5} />
          </button>

          {/* Logo - Made bigger as requested */}
          <div className="hidden md:flex items-center !gap-4">
            <div className="relative w-[200px] h-[100px]">
              <Image
                src="/logo.png"
                alt="Logica"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Welcome Text */}
          <div className="flex flex-col !gap-1">
            <h1 className="text-[#2D3648] md:text-[32px] text-[20px] font-bold leading-none">
              Ciao, Dr. Luca!
            </h1>
            <p className="text-[#A0AEC0] md:text-[18px] text-[14px] font-medium">
              Inizia la giornata con un nuovo corso!
            </p>
          </div>
        </div>

        {/* CENTER: Coins Pill */}
        <div className="flex-1 flex justify-start !ml-10 !px-10">
          <div className="relative flex items-center h-[56px] w-full max-w-[220px]">
            {/* The Blue Base Layer */}
            <div className="absolute inset-0 bg-[#2E69FF] rounded-full shadow-lg" />

            {/* The Yellow Content Layer - Adjusted with the red glow from the image */}
            <div className="absolute left-[-6px] top-[4px] bottom-[4px] w-[95%] bg-[#FFC34D] rounded-full flex items-center justify-center shadow-[10px_0px_20px_rgba(255,100,100,0.3)] z-10">
              <span className="text-[#2D3648] text-[30px] font-black tracking-tight bg-[#FFC34D] !px-6 rounded-full">
                345
              </span>
            </div>

            {/* The Coin Icon */}
            <div className="hidden md:absolute !right-5 z-20">
              <div className="w-10 h-10 relative">
                <Image
                  src="/coin.png"
                  alt="coin"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Profile Image */}
        <div className="hidden md:flex items-center">
          <div className="relative w-20 h-20 rounded-full border-[6px] border-slate-50 overflow-hidden shadow-sm hover:ring-2 hover:ring-[#3ABEF9] transition-all cursor-pointer">
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
