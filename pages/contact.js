import Head from "next/head";
import Layout from "../components/layout";
import Header from "../components/header";
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
            <p>
              We love a good cup of coffee, on a sunny terrace in Amsterdam
              Centre for instance! Let's discuss your bold ideas or outrageous
              plans and determine your new course of action from there.
            </p>
          </div>
        }
        topButtonText="Let's zoom first"
        topButtonLink="https://meetings-eu1.hubspot.com/robert-schaeffer"
        bottomButtonText="give us a call"
        bottomButtonLink="tel:0031625283072"
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
        imageOverText={
          <p>
            Connect
            <br />
            the dots.
          </p>
        }
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
