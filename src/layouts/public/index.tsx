import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
};
export default function PublicLayout({
  children = <></>,
  title = "Intract Quests",
  description,
  ogImage,
}: Props) {
  return (
    <>
      <Head>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <title>{title ? title : "Intract Quests"}</title>
        <meta
          name="description"
          content={
            description
              ? description
              : "Embark on epic quests on Intract in the world of Web3 and unlock exciting rewards!"
          }
        />
        <meta property="og:image" content={ogImage ? ogImage : ""} />
      </Head>
      <main className=" w-full relative ">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
