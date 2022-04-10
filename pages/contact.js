import Head from "next/head";
import Layout from "../components/layout";
import Header from "../components/header";

import Services from "../components/services";
import Coffee from "../components/coffee";
import Mission from "../components/mission11";
import Promoting from "../components/promoting12";
import MobileFooter from "../components/mobile-footer";
import MobileAffirm from "../components/affirmMobile";
import GetInTouch from "../components/getInTouch";
import Footer from "../components/footer";
import ContactBanner from "../components/contact-banner";
import Map from "../components/map";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact | Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <GetInTouch />
      <Map
        location={{
          address: "Keizersgracht 391-A, 1016 EJ Amsterdam",
          lat: 52.36800324329436,
          lng: 4.8850198986950755,
        }}
        zoomLevel={14}
        address={
          <p>
            Keizersgracht 391-A, <br />
            1016 EJ Amsterdam
          </p>
        }
      />
      <ContactBanner
        title="Let's do coffee"
        description={
          <div>
            <p>We love a good cup of coffee, on a sunny</p>
            <p>terrace in Amsterdam Centre for instance!</p>
            <p>Let's discuss your bold ideas or outrageous</p>
            <p>plans and determine your new course of </p>
            <p>action from there.</p>
          </div>
        }
        topButtonText="Book appointment"
        topButtonLink="https://meetings-eu1.hubspot.com/robert-schaeffer"
        bottomButtonText="call us"
      />
      <Footer
        backgroundComponent={
          <video
            loop
            autoPlay
            muted
            className="w-full pointer-events-none object-cover h-[55rem]"
          >
            <source src="/videos/connect-dots-video.mp4" type="video/mp4" />
          </video>
        }
        imageOverText={"Connect the dots."}
        showIcon={false}
        topImage="/images/connect-dots-mobile.png"
        mobileTitleText={
          <p>
            Connect
            <br />
            the dots.
          </p>
        }
      />
    </Layout>
  );
}
