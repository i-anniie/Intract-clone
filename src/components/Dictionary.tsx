import React, { useEffect, useRef, useState } from "react";
import { IoMdBook } from "react-icons/io";

const Dictionary = () => {
  const [selectButton, setSelectButton] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const onClick = () => {
    window.open("https://docs.intract.io/v/intract-academy", "_blank");
  };

  const handleChange = (selectIndex: number) => {
    setSelectButton(selectIndex);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <section className="main-container top-space bottom-space flex flex-col gap-8 items-center justify-center lg:w-[80%]">
      <div className="text-center space-y-2">
        <h1 className="text-xl lg:text-3xl">Crypto Dictionary</h1>
        <h1 className="text-white/50 lg:text-lg">
          Your one-stop to catch up on all crypto terms
        </h1>
      </div>
      <div
        className="bg-[url('/dictionary_img.svg')] flex items-end justify-between bg-no-repeat bg-contain bg-center rounded-3xl h-[20vh] md:h-[30vh] lg:h-[40vh] 2xl:h-[60vh] w-full px-8 pb-6 cursor-pointer"
        onClick={onClick}
      >
        <div className="flex flex-col">
          <h1 className="text-lg lg:text-3xl text-white/70">
            Web3 + Degen Glossary
          </h1>
          <h1 className="lg:text-lg text-white/50">
            Your own crypto dictionary
          </h1>
        </div>
        <div className="rounded-full p-4 backdrop-blur-md bg-black/20">
          <IoMdBook className="text-xl lg:text-4xl" />
        </div>
      </div>
      <div ref={buttonRef} className={`pt-6 ${isFixed ? "h-0" : "h-auto"}`}>
        <div
          className={`flex flex-col gap-4 backdrop-blur-md ${
            isFixed
              ? "fixed bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-xs rounded-full"
              : "relative"
          }`}
        >
          <div className="flex items-center justify-center rounded-full h-12 bg-white/10">
            <button
              onClick={() => {
                handleChange(0);
              }}
              className={`${
                selectButton === 0
                  ? "bg-white/20 text-white"
                  : "bg-transparent text-white hover:bg-white/10"
              } w-44 h-12 rounded-full text-xl font-medium duration-500 px-6 `}
            >
              Essentials
            </button>
            <button
              onClick={() => {
                handleChange(1);
              }}
              className={`${
                selectButton === 1
                  ? "bg-white/20 text-white"
                  : "bg-transparent text-white hover:bg-white/10"
              } w-44 h-12 rounded-full text-xl font-medium duration-500 px-6 `}
            >
              Alpha Hub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dictionary;
