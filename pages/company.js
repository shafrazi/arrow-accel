import Head from "next/head";
import AboutUsHero from "../components/about-us-hero";

import Header from "../components/header";
import Layout from "../components/layout";

import Footer from "../components/footer";
import AboutWhatWeDo from "../components/about-what-we-do";
import MissionImage from "../components/mission-image";
import Projects from "../components/projects";
import TeamTopSection from "../components/team-top-section";
import TeamMembers from "../components/team-members";
import MissionStatement from "../components/mission-statement";

export default function Company() {
  return (
    <Layout>
      <Head>
        <title>Company | Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header backgroundColor="bg-black" textColor="text-white" />
      <AboutUsHero />
      <AboutWhatWeDo />
      <MissionStatement />
      <MissionImage />
      <Projects />
      <TeamTopSection />
      <TeamMembers />
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
        imageOverText={"Creation."}
        topImage="/images/globe-mobile.png"
        mobileTitleText="Creation."
      />
    </Layout>
  );
}
