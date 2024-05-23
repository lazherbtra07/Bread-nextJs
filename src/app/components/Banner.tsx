"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export const Banner = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <section
      id="benner"
      className="w-full text-center flex flex-col justify-center items-center gap-6 py-20 lg:px-20 px-10 "
    >
      <h1 data-aos="zoom-in" className="text-[50px] text-black leading-[60px]">
        Our freshly baked bread is the <br />
        hero of our breakfast menu
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="200"
        className="  text-xl text-slate-600"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil
        harum amet <br /> consequuntur facilis sint tempore iusto necessitatibus
        illum fuga.
      </p>
      <button
        data-aos="zoom-in"
        data-aos-delay="400"
        className="  border-2 border-black rounded-full px-14 py-4 font-bold hover:bg-orange-500 hover:text-white hover:border-white uppercase"
      >
        Read More
      </button>
      <div
        className="w-full bg-cover bg-center
      flex flex-col justify-center items-center"
      >
        <Image
          data-aos="zoom-in"
          data-aos-delay="400"
          alt="imag-benner"
          src={"/banner3.jpg"}
          width={900}
          height={600}
        />
      </div>
    </section>
  );
};
