import Head from "next/head";
import AboutUsSideBar from "../components/about-us-sidebar";
import Header from "../components/header";
import Hero from "../components/hero";
import HeroTwo from "../components/hero2";
import HeroThree from "../components/hero3";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <HeroTwo />
      <HeroThree />
      <div className="flex w-full justify-center items-center mt-16">
        <div className="flex w-11/12 my-[10rem]">
          <AboutUsSideBar />
          <div className="w-2/3">
            <div className="text-center w-3/4">
              <p className="text-xl">
                To truly understand how to further your relevance to the world,
                increase the build out your client base and improve the way that
                projects, ideas and products are being brought to market, are
                financed, and are distributed is not just our passion.{" "}
              </p>
              <div className="font-bold text-4xl my-8">
                <p>For us,</p>
                <p>it's life.</p>
              </div>
              <p className="text-xl">
                Our experience, knowledge and ability to quickly grasp complex
                matter and theory, accelerates go-to-market and funding
                trajectories, working systematically, with a deep understanding
                on how projects and ideas are financed, sold and distributed.
              </p>
              <p className="text-xl mt-8">
                We are proud of what we have accomplished so far. And there is
                still so much to do. Keep up the good work.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-center bg-cover h-[22rem] mt-12"
        style={{
          backgroundImage: "url(/images/about-us-hero.png)",
        }}
      >
        <div className="flex w-full h-full bg-black bg-opacity-75 justify-center items-center">
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
    </div>
  );
}
