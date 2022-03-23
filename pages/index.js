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
import CallToActionBanner from "../components/call-to-action-banner";
import GetToKnowBanner from "../components/get-to-know-banner";
import Clients from "../components/clients";

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
      <CallToActionBanner />
      <GetToKnowBanner />
      <Clients />
      <Footer
        backgroundImage={"/images/about-us-footer.png"}
        imageOverText={"Keep going."}
      />
    </Layout>
  );
}
