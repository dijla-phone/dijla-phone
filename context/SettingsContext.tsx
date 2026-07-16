"use client";

import { createContext, useContext } from "react";

export type Settings = {
  store_name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  facebook: string;
  instagram: string;
  telegram: string;
  logo: string;
};

const SettingsContext = createContext<Settings | null>(null);

export function SettingsProvider({
  settings,
  children,
}: {
  settings: Settings;
  children: React.ReactNode;
}) {
  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error(
      "useSettings must be used inside SettingsProvider"
    );
  }

  return context;
}