"use client";
import { ThemeChanger } from "..";
import { IconsLink } from "./icons-link";
import { IoMdMenu } from "react-icons/io";
import Sections from "./sections";

interface Props {}

export const Navbar = () => {
  return (
    <div className="flex justify-between pt-4">
      <div className="flex items-center gap-x-4">
        <button>
          
        <IoMdMenu className="md:hidden mt-1 dark:text-white" size={30} />
        </button>
        <p className={`hidden sm:block text-2xl  dark:text-white`}>Daniel Calderón</p>
      </div>
      <Sections />
      <div className="flex items-center ">
        <IconsLink />
        <ThemeChanger />
      </div>
    </div>
  );
};
