"use client"
import { ThemeChanger } from "..";
import { IconsLink } from "./icons-link";

interface Props {}

export const Navbar = () => {
  
  return (
    <div className="flex justify-between pt-4">
      <p className={`text-2xl  dark:text-white`}>Daniel Calderón</p>
      <p>Daniel Calderón</p>
      <div className="flex items-center ">
        <IconsLink />
        <ThemeChanger/>
      </div>
    </div>
  );
};
