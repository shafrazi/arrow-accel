import Head from "next/head";
import AboutUsHero from "../components/about-us-hero";
import FoundationBanner from "../components/foundation-banner";
import Header from "../components/header";
import Layout from "../components/layout";
import MissionBanner from "../components/mission-banner";
import Partners from "../components/partners";
import PromotionBanner from "../components/promotion-banner";
import Footer from "../components/footer";
import AboutWhatWeDo from "../components/about-what-we-do";

export default function AboutUs() {
  return (
    <Layout>
      <Head>
        <title>About Us | Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header backgroundColor="bg-black" textColor="text-white" />
      <AboutUsHero />
      <AboutWhatWeDo />
      <FoundationBanner />
      <MissionBanner />
      <PromotionBanner />
      <Partners />
      <Footer
        backgroundComponent={
          <video
            loop
            autoPlay
            muted
            className="w-full pointer-events-none object-cover h-[55rem]"
          >
            <source src="/videos/global-video-low.mp4" type="video/mp4" />
          </video>
        }
        imageOverText={"Think global."}
      />
    </Layout>
  );
}
