import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className=" bg-[url('/hero_img.png')] bg-no-repeat bg-cover h-[40vh] lg:h-[80vh] flex items-center justify-center">
      <div className="main-container flex flex-col items-center gap-8 lg:gap-14">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-center">
            <img
              src="/hero_logo.gif"
              alt=""
              className="mix-blend-lighten w-[50%]"
            />
          </div>
          <div className="lg:w-3/5 text-center">
            <h1 className="lg:text-2xl">
              Intract users
              <span className="text-white/50">
                have together made more than{" "}
              </span>
              $100 million{" "}
              <span className="text-white/50">in web3. Join them and </span>
              learn how to earn crypto!
            </h1>
          </div>
        </div>
        <Link
          href="https://www.intract.io/quest/6660ccb062834ed1b3399725"
          target="_blank"
        >
          <div className="group btn-primary w-44 lg:w-80 flex items-center gap-2 justify-center text-lg">
            <h1 className="common-transition group-hover:translate-x-2">
              Get Started
            </h1>
            <IoIosArrowRoundForward className="common-transition group-hover:translate-x-2 text-3xl" />
          </div>
        </Link>
        {/* <button className="group btn-primary w-1/2 lg:w-1/5 flex items-center gap-2 justify-center text-lg">
          <span className="common-transition group-hover:translate-x-2">
            Get Started
          </span>
          <span>
            <IoIosArrowRoundForward className="common-transition group-hover:translate-x-2 text-3xl" />
          </span>
        </button> */}
      </div>
    </div>
  );
};

export default HeroSection;
