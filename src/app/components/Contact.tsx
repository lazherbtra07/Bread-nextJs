"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="contact"
      className="w-full flex flex-col bg-cover bg-center justify-start items-end gap-20 h-fit lg:py-20 py-10 lg:px-20 px-10"
      style={{ backgroundImage: `url('/banner.jpg')` }}
    >
      <div className=" text-center lg:w-[60%] w-full flex flex-col justify-start items-center gap-10">
        <h1
          data-aos="zoom-in"
          className="text-[55px] text-black font-semibold text-center"
        >
          Contact Us
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-xl text-black"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod velit
          sunt possimus unde doloribus dolores voluptatem officia,
        </p>
        <div className=" flex flex-col justify-center items-center gap-6 w-full lg:w-[80%]">
          <div
            id="form-box"
            className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-4 w-full"
          >
            <div className=" flex flex-col justify-center items-start gap-2 ">
              <h1 className="text-lg font-semibold text-black">Full Name</h1>
              <input
                type="text"
                placeholder="inter your full name"
                className="bg-white text-black px-6 py-3 w-full rounded-full border-2 border-slate-400"
              />
            </div>
            <div className=" flex flex-col justify-center items-start gap-2 ">
              <h1 className="text-lg font-semibold text-black">Email</h1>
              <input
                type="text"
                placeholder="inter your Email"
                className="bg-white text-black px-6 py-3 w-full rounded-full border-2 border-slate-400"
              />
            </div>
          </div>
          <button className=" w-full bg-black px-6 py-3 rounded-full text-white font-semibold hover:bg-orange-500 hover:text-white hover:border-white uppercase">
            Submit
          </button>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          id="address-box"
          className="w-full md:text-start text-center  grid md:grid-cols-3  grid-cols-1  md:justify-start items-center gap-6 mt-10 "
        >
          <div className="flex flex-col justify-start md:justify-start items-center md:items-start  gap-3">
            <h1>FIND US</h1>
            <p>
              121 Rock Sreet, 21 Avenue,
              <br /> New York, NY 92103-9000
            </p>
          </div>
          <div className="flex flex-col md:justify-start items-center md:items-start gap-3">
            <h1>HOURS</h1>
            <p>
              Monday – Saturday <br />
              9am – 7pm
            </p>
            <p>
              Sunday <br />
              10am – 6pm
            </p>
          </div>
          <div className="flex flex-col justify-start items-center md:items-start gap-3">
            <h1>CALL US</h1>
            <p>7382 9320 8393</p>
            <p>7382 9320 8393</p>
          </div>
        </div>
      </div>
    </section>
  );
};
