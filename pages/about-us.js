import Head from "next/head";
import Header from "../components/header";
import SectionListItem from "../components/section-list-item";

export default function AboutUs() {
  return (
    <div className="w-full">
      <Head>
        <title>About Us | Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex w-full justify-center items-center mt-16">
        <div className="flex w-11/12">
          <div className="w-1/3 flex flex-col">
            <h1 className="font-bold text-4xl mb-14">About us</h1>
            <SectionListItem text="foundation" />
            <SectionListItem text="philosophy" />
            <SectionListItem text="what we do" />
            <SectionListItem text="partners" />
          </div>
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
      <div className="flex justify-center items-center w-full py-[10rem]">
        <div className="w-1/3 text-3xl text-center font-bold">
          <p className="">
            To reach your goals, you need to translate your mission effectively,
            by understanding your audience, needs, connecting them to the brand
          </p>
          <p className="mt-10">and why the world should pay attention.</p>
        </div>
      </div>
      <div
        className="w-full bg-center bg-cover h-[60rem] mt-12"
        style={{
          backgroundImage: "url(/images/about-us-footer.png)",
        }}
      >
        <div className="flex flex-col w-full h-full bg-opacity-50 relative">
          <div className="mx-20 mt-36">
            <h1 className="text-4xl font-semibold text-white lg:text-5xl font-serif">
              Keep going.
            </h1>
          </div>
          <img
            src="/images/logo-icon-white.png"
            alt="logo-icon"
            width="700"
            className="opacity-20 absolute bottom-[25rem] left-[2rem]"
          />
          <div className="flex bg-black opacity-80 w-full h-[25rem] absolute bottom-0 left-0">
            <div className="w-1/3 mt-16 mx-20">
              <img src="/images/logo-white.png" alt="logo" width="400" />
            </div>
            <div className="w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
