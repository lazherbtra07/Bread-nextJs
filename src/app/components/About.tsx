"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <section
      id="about"
      className=" w-full flex flex-col lg:flex-row justify-between items-center "
    >
      <div
        id="conrtent-section"
        className=" w-full lg:w-[50%] flex flex-col justify-center items-center gap-10 p-10 md:p-20"
      >
        <h1
          data-aos="zoom-in"
          className="text-[50px] text-black text-center leading-[55px]"
        >
          where Every Treat <br />
          Tells a Tale
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-center text-xl text-slate-600"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt a
          tempore suscipit aperiam amet minima alias corporis repellendus, aut
          exercitationem?
        </p>
        <button
          data-aos="flip-up"
          data-aos-delay="300"
          className="border-2 border-black rounded-full px-14 py-4 font-bold hover:bg-orange-500 hover:text-white hover:border-white uppercase"
        >
          Read More
        </button>
      </div>
      <div
        id=" image-section "
        data-aos="zoom-in"
        data-aos-delay="600"
        className=" w-full lg:w-[50%]"
      >
        <Image
          src={"/banner6.jpg"}
          alt="about"
          width={800}
          height={500}
          className="md:w-full bg-cover bg-center"
        />
      </div>
    </section>
  );
};
