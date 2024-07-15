"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../atoms/button";
import { Logo } from "./logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MENUS } from "@/constants/navbar";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  return (
    <div className="px-5 py-3 flex justify-between fixed w-full bg-[#171717] z-50">
      <div className="w-full flex flex-col md:flex-row">
        <div className="flex justify-between">
          <Logo />
          <div className="flex items-center gap-4 md:hidden">
            <button
              className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <X color="white" /> : <Menu color="white" />}
            </button>
          </div>
        </div>
        <div
          className={`z-50 mt-5 flex w-full flex-col gap-5 md:mt-0 md:flex md:flex-row md:justify-end md:items-center ${
            navbar ? "slide-right block pb-4" : "hidden"
          }`}
        >
          {MENUS.map((menu) => (
            <Link
              href={menu.href}
              key={menu.title}
              className={`lineNavMenu ${
                pathname === menu.href ? "text-text" : "text-orangePrimary"
              } md:lineNavMenu-none relative flex w-max items-center text-lg transition delay-150 ease-in md:font-medium md:hover:text-orangePrimary`}
            >
              {menu.title}
            </Link>
          ))}
          <Button className="hover:bg-orangePrimary hover:text-text border border-orangePrimary text-orangePrimary rounded-full">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};
