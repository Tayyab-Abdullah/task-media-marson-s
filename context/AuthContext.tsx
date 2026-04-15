"use client";

import React, { createContext, useContext } from "react";
import { UserProfile, useGetUserQuery } from "@/lib/redux/apiService";

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  refreshUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: user, isLoading, refetch } = useGetUserQuery();

  const refreshUser = () => {
    refetch();
  };

  return (
    <AuthContext.Provider value={{ user: user ?? null, isLoading, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
