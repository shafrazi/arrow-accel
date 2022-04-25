import Head from "next/head";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import FocusIntro from "../components/focus-intro";
import BuildIt from "../components/build-it";
import ContactBanner from "../components/contact-banner";
import OurFuture from "../components/our-future";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Causes() {
  return (
    <ParallaxProvider>
      <Layout>
        <Head>
          <title>Causes | Arrow Accel</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <FocusIntro />
        <BuildIt />
        <ContactBanner
          title="Let's talk"
          description={
            <div>
              <p>
                Let's have a good talk about your latest venture. Book an
                exploratory meeting with us and discuss your next moves.
              </p>
            </div>
          }
          topButtonText="Book appointment"
          topButtonLink="https://meetings-eu1.hubspot.com/robert-schaeffer"
          bottomButtonText="call us"
          bottomButtonLink="tel:0031625283072"
        />
        <OurFuture />
        <Footer
          backgroundComponent={<img src="/images/causes-footer.png" />}
          imageOverText={
            <p className="text-2xl md:text-4xl">
              The best way to <br />
              predict the future <br />
              is to create it.
            </p>
          }
          showIcon={false}
          fontSize="3vw"
          topImage="/images/city-mobile.png"
          mobileTitleText={
            <p className="text-2xl md:text-5xl">
              The best way to <br />
              predict the future <br />
              is to create it.
            </p>
          }
        />
      </Layout>
    </ParallaxProvider>
  );
}
