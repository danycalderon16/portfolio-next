"use client"
import { useState } from "react";
import { ThemeChanger } from "..";

interface Props {}

export const Navbar = () => {
  
  return (
    <div className="flex justify-between pt-4">
      <p className={`text-2xl text-red-500 dark:text-white`}>Daniel Calderón</p>
      <p>Daniel Calderón</p>
      <div>
        <ThemeChanger/>
      </div>
    </div>
  );
};
