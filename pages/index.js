import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import HeroTwo from "../components/hero2";
import HeroThree from "../components/hero3";
import Footer from "../components/footer-copy";
import Layout from "../components/layout";
import Image from "next/image";
import homePageCanvasImg from "../public/images/home-page-canvas.png";
import Stats from "../components/stats";
import CallToActionBanner from "../components/call-to-action-banner";
import GetToKnowBanner from "../components/get-to-know-banner";
import Clients from "../components/clients";
import GetToKnow from "../components/get-to-know";

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
      {/* <GetToKnowBanner /> */}
      <GetToKnow />
      <Clients />
      <Footer
        backgroundComponent={
          <img src="/images/about-us-footer.png" className="w-full" />
        }
        imageOverText={"Keep moving."}
        showIcon={true}
      />
    </Layout>
  );
}
