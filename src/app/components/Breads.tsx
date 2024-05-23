"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { menus } from "../export";

export const Breads = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="breads"
      className="w-full bg-cover bg-center h-fit flex flex-col justify-start items-center gap-10 py-20 lg:px-20 px-10"
      style={{ backgroundImage: `url('/banner10.jpg')` }}
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-[55px] text-white font-semibold text-center"
      >
        Our Fresh Menu
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-4"
      >
        {menus.map((item, index) => (
          <div
            key={index}
            className="text-white flex flex-col gap-3 justify-start items-start bg-black rounded-xl p-10 opacity-75 h-auto lg:h-72 hover:bg-slate-300 hover:text-slate-800"
          >
            <h1 className=" text-2xl font-semibold leading-8  ">
              {item.title}
            </h1>
            <p className=" text-lg ">{item.about}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
