import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiTelevisionSimpleLight } from "react-icons/pi";

const navSchema = [
  { title: "Compass", link: "/compass" },
  { title: "Explore", link: "/explore" },
  { title: "Academy", link: "/academy" },
  { title: "NFTs", link: "/nfts" },
  { title: "For Projects", link: "/projects" },
];

const Navbar = () => {
  const [showNav, setShowNav] = React.useState(false);
  const router = useRouter();
  const [showAcademyButton, setShowAcademyButton] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (router.pathname === "/") {
      router.push("/academy");
    }
  }, [router]);

  // useEffect(() => {
  //   if (router.pathname === "/academy") {
  //     if (!localStorage.getItem("visitedAcademy")) {
  //       setShowAcademyButton(true);
  //       localStorage.setItem("visitedAcademy", "true");
  //     }
  //   }
  // }, [router.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = (e: any) => {
    e.target.dataset.closesidebar && setShowNav(false);
  };
  return (
    <>
      <section
        className={`common-transition sticky top-0 z-[999] hidden lg:block py-4 border-b border-white/20 ${
          isScrolled
            ? "backdrop-blur-md shadow-md"
            : "shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        }`}
      >
        <div className="main-container flex items-center justify-between gap-2">
          <div className="">
            <Link href="/">
              <img src="/logo.png" alt="" className="w-32" />
            </Link>
          </div>
          <div
            className={`common-transition items-center gap-8 ${
              searchFocused ? "hidden" : "flex"
            }`}
          >
            {navSchema.map((item, i) => (
              <div
                key={i}
                className={`common-transition text-xl flex items-center gap-2 ${
                  router.pathname === item.link
                    ? "border-b-4 border-white pb-2 text-white"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <Link href={item.link}>{item.title}</Link>
                {router.pathname === item.link && item.link === "/academy" && (
                  // showAcademyButton &&
                  <button className="bg-primary rounded-lg py-1 px-2 text-sm">
                    New
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <div
              className={`transition-width duration-300 ${
                searchFocused ? "2xl:w-[65rem] w-[45rem]" : "2xl:w-[40rem]"
              }`}
            >
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-lg text-white rounded-full bg-white/10 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search for ecosystems, trending quests ets.."
                    required
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                  />
                </div>
              </form>
            </div>
            <div className="text-orange-400 text-2xl border border-orange-400 rounded-full p-3.5 cursor-pointer">
              <PiTelevisionSimpleLight />
            </div>
            <Link href="/signin">
              <button  className="common-transition py-2 px-8 bg-white text-black hover:bg-white/90 rounded-lg text-xl">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Responsive Navbar */}
      <section className="sticky top-0 z-[999] block bg-black lg:hidden">
        <div className="main-container relative flex h-[4.5rem] items-center justify-between py-2 shadow">
          <Link href="/">
            <img src="/logo.png" alt="logo" className="w-20" />
          </Link>

          <div className="flex items-center justify-end gap-2">
            <div className="text-orange-400 text-md border border-orange-400 rounded-full p-3 cursor-pointer">
              <PiTelevisionSimpleLight />
            </div>
            <Link href="/signin">
              <button className="bg-white text-sm px-3 py-2 rounded-md text-black font-normal">
                Sign In
              </button>
            </Link>
            <span onClick={() => setShowNav(!showNav)} className="z-20">
              {showNav ? (
                <AiOutlineClose className="text-white text-xl" />
              ) : (
                <AiOutlineMenu className="text-white text-xl" />
              )}
            </span>
          </div>

          <div
            id="nav-menu"
            data-closesidebar
            className={`absolute top-40 left-0 z-10 flex h-screen w-screen bg-black/20 transition-all duration-500 ease-in-out lg:-left-[1.7rem]  ${
              showNav ? "-translate-y-0" : "translate-y-full"
            } `}
            onClick={handleClose}
          >
            <div className="z-20 w-full overflow-y-auto font-semibold bg-white py-4 px-3">
              <div className="flex flex-col gap-2 pt-2 items-start">
                {navSchema.map((item, i) => (
                  <div key={i}>
                    <Link href={item.link}>
                      <div className="flex items-center justify-center gap-1 text-xl py-4">
                        <h1 className="text-black">{item.title}</h1>
                        <h1>
                          <IoIosArrowRoundForward />
                        </h1>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
