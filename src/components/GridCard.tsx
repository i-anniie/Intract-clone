import React from "react";
import { BiMoviePlay } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";

const cardSchema = [
  {
    img: "/grid_img_1.png",
    title: "How to plan your retirement with crypto?",
    link: "https://youtube.com/shorts/NkDtaXvzt-I?si=JbuZ0sQwQlStR8do",
  },
  {
    img: "/grid_img_2.png",
    title: "Why are there limited Bitcoin?",
    link: "https://youtube.com/shorts/-kmxV_JO7eY?si=__7wqWnyPPilBw7F",
  },
  {
    img: "/grid_img_3.png",
    title: "How does Uniswap actually work?",
    link: "https://youtube.com/shorts/9fyVLvY3P14?si=-02HNwqzZE3jXMz4",
  },
  {
    img: "/grid_img_4.png",
    title: "How to spot crypto projects to invest in?",
    link: "https://youtube.com/shorts/kYeFSwvt1sQ?si=wSQnw0sYAcpkSzz6",
  },
];

const GridCard = () => {
  return (
    <section className="main-container bottom-space">
      <div className="flex flex-col gap-6">
        <div className="text-center space-y-2">
          <h1 className="text-xl lg:text-3xl">
            Top Crypto Creators and Projects to Follow
          </h1>
          <h1 className="text-white/50 lg:text-lg">
            Answers to your crypto doubts, straight from the experts
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
          {cardSchema.map((item, index) => (
            <div
              key={index}
              className="relative h-[70vh] lg:h-[55vh] w-full lg:w-[19vw] overflow-hidden rounded-2xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 w-full h-fit bg-gradient-to-t from-black/50 to-transparent p-4 flex items-end">
                <h1 className="text-white text-2xl mix-blend-plus-lighter">
                  {item.title}
                </h1>
              </div>
              <div className="absolute top-0 w-full h-fit rounded-full p-4 flex justify-end">
                <h1 className="bg-black/40 text-white border rounded-full p-3 text-2xl">
                  <BiMoviePlay />
                </h1>
              </div>

              <div className="common-transition absolute top-10 hover:bg-black/40 hover:top-0 opacity-0 hover:opacity-100 w-full h-full flex items-center justify-center">
                <a href={item.link} target="_blank">
                  <h1 className="text-white bg-black/40 text-2xl border rounded-full p-4 cursor-pointer">
                    <FaPlay />
                  </h1>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridCard;
