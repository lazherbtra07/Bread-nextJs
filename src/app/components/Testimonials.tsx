"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { clients } from "../export";

export const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="testimonials"
      className="w-full flex flex-col justify-center items-center gap-20 bg-center bg-cover h-fit py-20 lg:px-20 px-10"
      style={{ backgroundImage: `url('/banner1.jpg ')` }}
    >
      <h1
        data-aos="zoom-in"
        className="text-white text-center text-[55px] font-semibold"
      >
        Read what our clients says
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="w-full grid lg:grid-cols-3 xl:grid-cols-4 lg:gap-y-20 md:grid-cols-2 grid-cols-1 justify-center items-center gap-20 lg:gap-8"
      >
        {clients.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-start gap-4 bg-orange-600 p-10 top-10 h-[350px] rounded-xl relative"
          >
            <div
              id="icon-box"
              className=" absolute w-28 h-28 rounded-full bg-white -top-14"
            >
              <Image
                alt="bread"
                src={item.image}
                width={50}
                height={50}
                className=" w-full h-full rounded-full transform hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <h1 className="text-white font-bold uppercase text-xl lg:pt-10">
              {item.name}
            </h1>
            <p className="text-white text-lg">{item.about}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
