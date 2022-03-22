import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import HeroTwo from "../components/hero2";
import HeroThree from "../components/hero3";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Image from "next/image";
import homePageCanvasImg from "../public/images/home-page-canvas.png";
import Stats from "../components/stats";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <HeroTwo />
      <Stats />
      {/* <div className="w-full h-12">
        <Image src={homePageCanvasImg} />
      </div> */}
      <div
        className="flex justify-center items-center w-full py-[10rem] my-10"
        style={{ fontFamily: "OpenSauceOne" }}
      >
        <div className="w-1/3 text-3xl text-center font-bold">
          <p className="">
            To reach your goals, you need to translate your mission effectively,
            by understanding your audience, needs, connecting them to the brand
          </p>
          <p className="mt-10">and why the world should pay attention.</p>
        </div>
      </div>
      <Footer
        backgroundImage={"/images/about-us-footer.png"}
        imageOverText={"Keep going."}
      />
    </Layout>
  );
}
