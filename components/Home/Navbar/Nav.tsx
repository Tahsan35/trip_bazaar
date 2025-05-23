"use client";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TbAirBalloon } from "react-icons/tb";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBG, setNavBG] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBG(true);
      if (window.scrollY < 90) setNavBG(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={` ${
        navBG ? "bg-blue-950 shadow-md" : "fixed"
      } transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
            {/* Replace with your AirBalloon component or image */}
            <TbAirBalloon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-justify md:text-2xl text-white uppercase font-extralight">
            Trip Bazaar
          </h1>
        </Link>
        {/* LINKS */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="relative text-white text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-amber-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-right">
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        {/* buttons */}
        <div className="flex items-center space-x-4">
          <button className="md:px-12 md:py-2.5 px-4 py-1.5 text-sm md:text-base text-green-500 bg-white hover:bg-gray-700 hover:text-white font-medium transition-all duration-300 rounded-lg shadow-md hover:shadow-lg active:scale-95">
            Book Now
          </button>
          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
