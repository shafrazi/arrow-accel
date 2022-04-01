import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer-copy";
import Layout from "../components/layout";
import Stats from "../components/stats";
import Clients from "../components/clients";
import GetToKnow from "../components/get-to-know";
import Carousel from "../components/carousel";
import SmallSteps from "../components/small-steps-banner";
import LinkItem from "../components/link-item";
import SideLinks from "../components/side-links";
import ClientLogos from "../components/client-logos";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Carousel />
      <GetToKnow />
      <SmallSteps />
      <SideLinks />
      <Stats />
      <Clients />
      <ClientLogos />
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
