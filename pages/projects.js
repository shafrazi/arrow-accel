import Head from "next/head";

import Header from "../components/header";
import Layout from "../components/layout";

import Footer from "../components/footer";
import ProjectsHero from "../components/projects-hero";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects | Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header backgroundColor="bg-black" textColor="text-white" />
      <ProjectsHero />
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
