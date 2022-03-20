import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import HeroTwo from "../components/hero2";
import HeroThree from "../components/hero3";

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
    </div>
  );
}
