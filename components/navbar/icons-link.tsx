
import { redirect } from "next/navigation";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const menuItems = [
  {
    id: 1,
    icon: <FaLinkedin />,
    title: "Linkedin",
    path: "https://www.linkedin.com/in/daniel-calderon-vi/",
  },
  {
    id: 2,
    icon: <FaGithub />,
    title: "Github",
    path: "https://github.com/danycalderon16",
  },
];

export const IconsLink = () => {
  const handleClick = () => {
    redirect("/git")
  } 
  return menuItems.map((item) => (
    <a
      href={item.path}
      title={item.title}
      target="_blank"
      className={`
        flex
        justify-center
        items-center
        h-8
        rounded-full
        text-white text-xl  
        bg-black 
        dark:bg-white
        dark:text-slate-900
        transition-colors
        duration-300
        ease-in-out cursor-pointer  
        m-1  
        w-8 
        `}
    >
      {item.icon}
    </a>
  ));
};
