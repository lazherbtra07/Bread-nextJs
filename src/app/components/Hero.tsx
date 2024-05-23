"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <section
      id="section"
      className="w-full flex lg:flex-row  flex-col-reverse justify-between items-start"
    >
      <div id="image-section " className="  lg:w-[50%] w-full">
        <Image
          data-aos="zoom-in"
          alt="hero"
          src={"/hero.jpg"}
          width={800}
          height={500}
          className="w-full lg:h-[670px]  bg-cover bg-center "
        />
      </div>

      <div
        id="content-section"
        className="  lg:w-[50%] w-full flex flex-col justify-center items-center gap-10 lg:gap-5 p-10 md:p-20 pt-20 lg:pt-5 md:pt-32 md:pb-10 lg:pb-0"
      >
        <Image
          data-aos="zoom-in"
          data-aos-delay="200"
          alt="logo"
          src={"/logo.png"}
          width={120}
          height={100}
        />
        <h1
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-[50px] text-black text-center leading-[55px]"
        >
          Fresh Breads
          <br /> Handcrafted daily
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="600"
          className="text-center text-xl text-slate-600"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
          laboriosam nisi vero, iste saepe libero asperiores aspernatur
          doloremque incidunt voluptas, eum repellat ut enim labore. Aliquid
          explicabo ipsam accusamus fugiat?
        </p>
        <button
          data-aos="zoom-in"
          data-aos-delay="800"
          className=" border-2 border-black rounded-full px-14 py-4 font-bold hover:bg-orange-500 hover:text-white hover:border-white uppercase"
        >
          Read More
        </button>
      </div>
    </section>
  );
};
