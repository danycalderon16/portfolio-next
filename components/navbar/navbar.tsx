"use client";
import React, { useState } from "react";
import { ThemeChanger } from "..";
import { IconsLink } from "./icons-link";
import { IoMdMenu, IoIosClose } from "react-icons/io";
import { ItemNavbar } from "./items-navbar";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="fixed w-full z-20 top-0 start-0 dark:bg-slate-900 pb-3">
      <div className="flex justify-between pt-4 mr-2">
        <div className="flex items-center gap-x-4">
          <button onClick={() => setNav(!nav)}>
            <IoMdMenu className="md:hidden mt-1 dark:text-white" size={30} />
          </button>
          <p className={`hidden sm:block text-2xl  dark:text-white`}>
            Daniel Calderón
          </p>
        </div>
        <ul className="hidden md:flex gap-x-5 items-center">
          <ItemNavbar />
        </ul>
        <div className="flex items-center ">
          <IconsLink />
          <ThemeChanger />
        </div>
        <div
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <button
            onClick={() => setNav(!nav)}
            className="flex w-full justify-end md:hidden "
          >
            <IoIosClose size={40} className="dark:text-white" />
          </button>
          <ul className="flex flex-col gap-y-3 mx-6">
            <ItemNavbar />
          </ul>
        </div>
      </div>
    </nav>
  );
};
