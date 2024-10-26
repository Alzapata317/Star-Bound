// context/AppContext.tsx
"use client"
import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of your context
interface AppContextProps {
  active: string;
  setActive: (active: string) => void;
  videoEnded: boolean;
  setVideoEnded: (ended: boolean) => void;
}

// Create the context with default values
export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [active, setActive] = useState<string>('Home');
  const [videoEnded, setVideoEnded] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ active, setActive, videoEnded, setVideoEnded }}>
      {children}
    </AppContext.Provider>
  );
};