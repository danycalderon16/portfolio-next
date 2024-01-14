"use client";

import Link from "next/link";

const navItems = [
  { id: 1, text: "About", href:"about" },
  { id: 2, text: "Project", href:"projects"},
  { id: 3, text: "Solutions", href:"solutions"},
];
export function ItemNavbar() {
  return navItems.map((item) => (
      <li key={item.id} className="text-xl dark:text-white list-none">
        <Link href={`/#${item.href}`}>{item.text}</Link>
      </li>
    ));
  
}
