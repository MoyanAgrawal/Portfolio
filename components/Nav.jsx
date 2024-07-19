"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { links } from "@/constants/path";
// const links = [
//   {
//     name: "Home",
//     path: "/",
//   },
//   {
//     name: "Services",
//     path: "/services",
//   },
//   {
//     name: "Resume",
//     path: "/resume",
//   },
//   {
//     name: "Work",
//     path: "/work",
//   },
//   {
//     name: "Contact",
//     path: "/contact",
//   },
// ];

function Nav() {
  const pathName=usePathname();
  // console.log(pathName)
  return (
    <nav className="flex gap-8">
      {links.map((link, ind) => {
        return (
          <Link href={link.path} key={ind} className={`${link.path ===pathName && "text-accent border-b-2 border-accent"} capitalise font-medium hover:text-accent transition-all`}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
