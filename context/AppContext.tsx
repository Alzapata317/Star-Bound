// context/AppContext.tsx
"use client"
import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of your context
interface AppContextProps {
  active: string | null;
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
}

// Create the context with default values
export const AppContext = createContext<AppContextProps | undefined>(undefined);

// Define the props for the provider
interface AppProviderProps {
  children: ReactNode;
}

// Create the provider component
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [active, setActive] = useState<string | null>("Home");

  return (
    <AppContext.Provider value={{ active, setActive }}>
      {children}
    </AppContext.Provider>
  );
};