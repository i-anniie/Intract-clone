import Link from "next/link";
import { BiCaretRight } from "react-icons/bi";
import { FaDiscord, FaSpotify, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  interface SubTitle {
    name: string;
    path: string;
  }

  interface FooterSchema {
    title: string;
    subTitle: SubTitle[];
  }
  const footerSchema: FooterSchema[] = [
    {
      title: "Intract",
      subTitle: [
        {
          name: "Explore Quests",
          path: "/",
        },
        {
          name: "Comunities",
          path: "/",
        },
        {
          name: "Alpha Hub",
          path: "/",
        },
      ],
    },
    {
      title: "Earn",
      subTitle: [
        {
          name: "Refer & Earn",
          path: "/",
        },
        {
          name: "Leaderboard",
          path: "/",
        },
        {
          name: "Achievements",
          path: "/",
        },
      ],
    },
    {
      title: "About",
      subTitle: [
        {
          name: "Product Roadmap",
          path: "/",
        },
        {
          name: "Affiliate Program",
          path: "/",
        },
        {
          name: "Sign up Program",
          path: "/",
        },
        {
          name: "Growth Community",
          path: "/",
        },
        {
          name: "Blogs",
          path: "/",
        },
      ],
    },
    {
      title: "Support",
      subTitle: [
        {
          name: "Help Center",
          path: "/",
        },
        {
          name: "Create your quest",
          path: "/",
        },
        {
          name: "Terms of Service",
          path: "/",
        },
        {
          name: "Privacy Policy",
          path: "/",
        },
        {
          name: "Community Guidelines",
          path: "/",
        },
      ],
    },
  ];

  return (
    <footer className="text-white main-container">
      <section className="w-full grid lg:grid-cols-6 gap-8 top-space bottom-space">
        <div className="lg:col-span-2 flex flex-col items-start w-full gap-8 justify-start">
          <Link href="/">
            <img src="/logo.png" alt="logo" className="w-32" />
          </Link>
          <h1 className="text-white/50 text-sm lg:text-lg lg:w-[70%]">
            We are your personal guide for exploring web3 projects & earning
            100x rewards
          </h1>
        </div>
        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {footerSchema.map((item, index) => (
            <div key={index} className="flex lg:col-span-1 flex-col w-full">
              <h1 className="lg:text-xl font-semibold uppercase mb-2">
                {item.title}
              </h1>
              <ul className="flex flex-col gap-2">
                {item.subTitle.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="mt-1 flex w-fit cursor-pointer list-none common-transition"
                  >
                    <Link
                      href={subItem.path}
                      className="common-transition text-sm lg:text-lg text-white/50 flex items-center gap-1 group hover:text-white"
                    >
                      <h1>{subItem.name}</h1>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="border-t border-white/20 py-12">
        <div className="text-white/50 text-sm lg:text-lg">
          <span className="font-semibold text-white">Disclaimer:</span> Crypto
          Products, Virtual Digital Assets, and NFTs are unregulated and can be
          highly risky. There may be no regulatory recourse for any loss from
          such transactions. We advise the viewer to proceed with caution.
          Nothing in this website or any communication published by us amounts
          to, is intended to be, or should be construed as investment or
          purchase advice of any kind or financial advice or promotion under any
          applicable laws. Any decision made based on the content provided on
          this website or any communication published by us shall not be
          attributable to us.
        </div>
      </section>
      <section className="border-t border-white/20 top-space bottom-space flex flex-col md:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0">
        <div className="font-semibold lg:text-lg">
          CREATED BY{" "}
          <span className="common-transition underline hover:text-white/40">
            <Link href="/">
                INTRACT
            </Link>
          </span>
        </div>
        <div className="flex items-center gap-2 lg:gap-4 text-xl lg:text-2xl">
          <Link href="/">
            <div className="text-twitter bg-[#1a1a1a] rounded-xl p-3">
              <FaTwitter />
            </div>
          </Link>
          <Link href="/">
            <div className="text-discord bg-[#1a1a1a] rounded-xl p-3">
              <FaDiscord />
            </div>
          </Link>
          <Link href="/">
            <div className="text-telegram bg-[#1a1a1a] rounded-xl p-3">
              <FaTelegram />
            </div>
          </Link>
          <Link href="/">
            <div className="text-spotify bg-[#1a1a1a] rounded-xl p-3">
              <FaSpotify />
            </div>
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
