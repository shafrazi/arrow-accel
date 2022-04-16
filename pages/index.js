import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Stats from "../components/stats";
import Clients from "../components/clients";
import GetToKnow from "../components/get-to-know";
import Carousel from "../components/carousel";
import SmallSteps from "../components/small-steps-banner";
import LinkItem from "../components/link-item";
import SideLinks from "../components/side-links";
import ClientLogos from "../components/client-logos";
import Partners from "../components/partners";
import ContactBanner from "../components/contact-banner";
import SmallStepsImage from "../components/small-steps-image";

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
      <SmallStepsImage />
      <SmallSteps />
      <Partners />
      <SideLinks />
      <Stats />
      <Clients />
      <ClientLogos />
      <ContactBanner
        title="Let's strategize"
        description={
          <div>
            <p>Unlock the future's unlimited</p>
            <p>potential. Work with us and </p>
            <p>make your mark.</p>
          </div>
        }
        topButtonText="Send us an email"
        topButtonLink={"mailto:agency@arrowaccel.com"}
        bottomButtonText="Schedule a call"
        bottomButtonLink="https://meetings-eu1.hubspot.com/robert-schaeffer"
      />
      <Footer
        backgroundComponent={
          <img src="/images/about-us-footer.png" className="w-full" />
        }
        imageOverText={"Pushing limits."}
        showIcon={false}
        topImage="/images/about-us-footer-crop.png"
        mobileTitleText={
          <p>
            Pushing <br />
            limits.
          </p>
        }
      />
    </Layout>
  );
}
