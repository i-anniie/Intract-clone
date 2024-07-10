import Link from "next/link";
import React, { useState } from "react";
import { FaCheck, FaDiscord, FaInfoCircle } from "react-icons/fa";
import {
  IoIosArrowRoundForward,
  IoMdArrowDropdown,
  IoMdTime,
} from "react-icons/io";

const cardSchema = [
  {
    img: "/map_img_1.png",
    title: "Basics of Crypto",
    subTitle: "The safest and easiest place to start your crypto journey!",
    quest: "6 Quests",
    point: "1490 XPs",
  },
  {
    img: "/map_img_3.png",
    title: "Introduction to Airdrops",
    subTitle: "Your best bet to make it big in crypto!",
    quest: "4 Quests",
    point: "1040 XPs",
  },
];

const Map = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="main-container top-space bottom-space">
      <div className="flex flex-col gap-4">
        {cardSchema.map((item, i) => (
          <div
            key={i}
            className={`w-full lg:w-[30vw] ${
              i % 2 === 0 ? "self-start" : "self-end"
            }`}
          >
            <div className="bg-[#141414] min-h-[15rem] rounded-3xl flex items-center justify-between gap-4 p-4">
              <div className="relative border border-white/50 rounded-3xl p-3 bg-white/10">
                <img
                  src={item.img}
                  alt=""
                  className="w-36 h-36 object-cover rounded-3xl"
                />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <h1 className="rounded-full bg-white/10 py-2 px-2 text-sm">
                    {item.point}
                  </h1>
                </div>
              </div>
              <div className="flex flex-col w-3/4">
                <div className="flex items-start justify-end -translate-y-6 cursor-pointer">
                  <IoMdArrowDropdown
                    className="text-3xl"
                    onClick={() => handleToggle(i)}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                  <h1 className="text-white/50 text-sm lg:text-base">
                    {item.subTitle}
                  </h1>
                  <div className="w-full bg-white border-t border-dotted"></div>
                  <h1 className="rounded-full bg-white/10 py-1 px-2 w-fit text-sm lg:text-base flex items-center gap-1">
                    <img src="/coin.svg" alt="" className="w-6 h-6" />
                    <span>{item.point}</span>
                  </h1>
                </div>
              </div>
            </div>
            {activeIndex === i && (
              <div className="bg-[#141414] rounded-3xl p-4 mt-4">
                <div className="relative border border-white/50 rounded-3xl p-3 bg-white/10">
                  <img
                    src={item.img}
                    alt=""
                    className="w-36 h-36 object-cover rounded-3xl"
                  />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                    <h1 className="rounded-full bg-white/10 py-2 px-2 text-sm">
                      {item.point}
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-4">
                  <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                  <h1 className="text-white/50 text-sm lg:text-base">
                    {item.subTitle}
                  </h1>
                  <div className="w-full bg-white border-t border-dotted"></div>
                  <h1 className="rounded-full bg-white/10 py-1 px-2 w-fit text-sm lg:text-base flex items-center gap-1">
                    <img src="/coin.svg" alt="" className="w-6 h-6" />
                    <span>{item.point}</span>
                  </h1>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="relative">
        <div className="flex items-center justify-center top-space">
          <div className="w-full lg:w-[20vw]">
            <div className="bg-[#141414] rounded-2xl flex flex-col gap-4 p-4">
              <div className="flex items-center gap-2">
                <h1 className="text-xl">
                  <IoMdTime className="text-orange-500" />
                </h1>
                <h1>Reward unlocks in</h1>
              </div>
              <div className="w-full border-white border-t border-dotted"></div>
              <div className="grid grid-cols-4 place-items-center gap-2 p-4 bg-white/10 rounded-2xl">
                <div className="flex flex-col items-center">
                  <h1 className="text-4xl">00</h1>
                  <h1 className="text-white/50">Days</h1>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-4xl">09</h1>
                  <h1 className="text-white/50">Hrs</h1>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-4xl">20</h1>
                  <h1 className="text-white/50">Mins</h1>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-4xl">34</h1>
                  <h1 className="text-white/50">Secs</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-2">
          <div className="w-full bg-[#141414] rounded-2xl lg:w-[20vw] p-4">
            <div className="  flex flex-col gap-4">
              <img
                src="/map_img_5.gif"
                alt=""
                className="object-cover rounded-2xl"
              />
              <div className="flex items-center justify-between  border-b border-dotted pb-1">
                <h1 className="text-white/50">Exclusive Community</h1>
                <div className="flex items-center gap-2 text-lg">
                  <h1>
                    <FaDiscord className="text-discord" />
                  </h1>
                  <h1>Earndrop</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex justify-between items-center">
                <h1 className="text-white/50">Complete all Essential quests</h1>
                <h1 className="p-2 rounded-full border border-white/50 text-sm">
                  <FaCheck className="text-white/50" />
                </h1>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-white/50">
                  Complete at least 1 Alpha Hub quest today
                </h1>
                <h1 className="p-2 rounded-full border border-white/50 text-sm">
                  <FaCheck className="text-white/50" />
                </h1>
              </div>
              <div className="flex justify-center">
                <Link
                  href="https://www.intract.io/quest/6660ccb062834ed1b3399725"
                  target="_blank"
                >
                  <div className="btn-primary bg-white/20 w-full lg:w-80 flex items-center gap-2 justify-center text-lg">
                    <h1 className="">Claim Now</h1>
                    <IoIosArrowRoundForward className="text-3xl" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute right-36 top-32 border border-white/30 rounded-sm">
          <div className="flex items-center justify-center">
            <div className="w-full lg:w-[20vw]">
              <div className="bg-[#141414] rounded-2xl flex flex-col gap-4 p-4">
                <div className="flex items-center gap-2 border-b border-white/20 pb-2">
                  <h1 className="text-white/50">Reward info</h1>
                  <h1 className="text-xl">
                    <FaInfoCircle className="text-white/50" />
                  </h1>
                </div>
                <h1>Free access to paid KOL (crypto earning) communities!</h1>
                <p className="text-white/50">
                  Win access to exclusive earning communities of some of the the
                  greatest earners in crypto for a month, every 24 hours. Get
                  access to unmatched insights, a close-knit community of the
                  best airdrop earners, and more.
                </p>
                <p className="text-white/50">
                  To win: make sure you{"'"}ve connected your Twitter and
                  Discord accounts - and follow our criteria!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
