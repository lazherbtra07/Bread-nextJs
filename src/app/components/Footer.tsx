"use client";
import { IoIosArrowDropup } from "react-icons/io";

export const Footer = () => {
  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="!scroll-smooth">
      <section className=" w-full bg-black text-white flex justify-center items-center py-5 gap-4">
        <h1 className="text-white text-center font-semibold text-xl">
          Copyright 2024, Crave Bakes, All Rights Reserved
        </h1>
      </section>
      {/* scroll to top button */}
      <div
        id="icon-box"
        className=" !scroll-smooth md:bg-orange-500 bg-white   p-[2px] lg:p3 rounded-full md:hover:bg-white cursor-pointer fixed md:bottom-6 bottom-[75px] right-3"
        onClick={top}
      >
        <span className=" text-orange-500 md:text-white hover:text-orange-500 ">
          <IoIosArrowDropup size={40} />
        </span>
      </div>
    </div>
  );
};
