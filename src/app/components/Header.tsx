"use client";
import React, { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";
import Image from "next/image";
import Headroom from "react-headroom";

export const Header = () => {
  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const closeNavbar = () => {
    setisMenuOpen(false);
  };

  const navItems = [
    { link: "Breads", path: "menu" },
    { link: "About", path: "about" },
    { link: "Menu", path: "breads" },
    { link: "Testimonials", path: "testimonials" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <>
      <Headroom>
        <div>
          <nav className=" z-10  p-5 md:px-20 flex w-full justify-between py-5 bg-slate-500">
            <div className=" cursor-pointer">
              <Image
                onClick={top}
                className=" invert"
                alt="logo"
                src={"/logo.png"}
                width={50}
                height={50}
              />
            </div>

            <div className="hidden lg:flex justify-center items-center gap-5 lg:gap-5 ">
              {navItems.map(({ link, path }) => (
                <Link
                  className="text-white uppercase hover:bg-orange-500 px-3 py-2 rounded-xl cursor-pointer "
                  to={path}
                  spy={true}
                  offset={-100}
                  smooth={true}
                >
                  {link}
                </Link>
              ))}
            </div>
            <button className="px-8 py-2 bg-orange-500 text-white rounded-full uppercase text-lg font-bold transform hover:scale-110 transition-transform duration-300">
              <Link to={"contact"} spy={true} offset={-100} smooth={true}>
                Order now
              </Link>
            </button>
            {/* Mobile Mood */}
            <div className="flex justify-center lg:hidden">
              <button className="" onClick={toggleMenu}>
                {isMenuOpen ? (
                  <>
                    <FaXmark color="white" size={25} />
                    <div className=" w-full h-fit p-4 top-[80px] left-0 flex flex-col absolute bg-slate-500 text-white ">
                      {navItems.map(({ link, path }) => (
                        <Link
                          onClick={closeNavbar}
                          to={path}
                          spy={true}
                          offset={-100}
                          smooth={true}
                          className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-600 hover:text-white w-full text-center "
                        >
                          {link}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <FaBars color="white" size={25} />
                )}
              </button>
            </div>
          </nav>
        </div>
      </Headroom>
    </>
  );
};
