import Head from "next/head";
import AboutUsHero from "../components/about-us-hero";
import FoundationBanner from "../components/foundation-banner";
import Header from "../components/header";
import HeroTwo from "../components/hero2";
import Layout from "../components/layout";
import MissionBanner from "../components/mission-banner";
import Partners from "../components/partners";
import PromotionBanner from "../components/promotion-banner";

export default function AboutUs() {
  return (
    <Layout>
      <Head>
        <title>About Us | Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AboutUsHero />
      <HeroTwo />
      <FoundationBanner />
      <MissionBanner />
      <PromotionBanner />
      <Partners />
    </Layout>
  );
}
