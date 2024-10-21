'use client'

import React, { useContext } from 'react'
import { AppContext } from "../../context/AppContext";

export default function Home() {
  const context = useContext(AppContext);

  if (!context) {
      throw new Error("Home component must be used within an AppProvider");
  }
  
  const { active, setActive } = context;
  return (
    <div className="text-white w-full h-[80vh] text-[4vh] flex justify-center items-center">
      {active == "Merch" && (
        <div>
          COMING SOON ....
        </div>
      )}
    </div>
  );
}
