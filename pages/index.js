import Head from "next/head";
import AboutUsSideBar from "../components/about-us-sidebar";
import Header from "../components/header";
import Hero from "../components/hero";
import HeroTwo from "../components/hero2";
import HeroThree from "../components/hero3";
import Footer from "../components/footer";
import Layout from "../components/layout";

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

      <div
        className="w-full bg-center bg-cover h-[22rem] mt-12"
        style={{
          backgroundImage: "url(/images/about-us-hero.png)",
        }}
      >
        <div
          className="flex w-full h-full bg-black justify-center items-center"
          style={{ opacity: 0.86 }}
        >
          <div className="flex justify-center items-center w-full">
            <div className="w-1/4 flex flex-col justify-center items-center text-white">
              <p className="font-bold text-7xl">35</p>
              <p className="text-xl">clients served</p>
            </div>
            <div className="w-1/4 flex flex-col justify-center items-center text-white">
              <p className="font-bold text-7xl">67m</p>
              <p className="text-xl">people reached</p>
            </div>
            <div className="w-1/4 flex flex-col justify-center items-center text-white">
              <p className="font-bold text-7xl">150+</p>
              <p className="text-xl">creative projects</p>
              <p className="text-xl">& events</p>
            </div>
            <div className="w-1/4 flex flex-col justify-center items-center text-white">
              <p className="font-bold text-7xl">55</p>
              <p className="text-xl">campaigns delivered</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full py-[10rem] my-10">
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
