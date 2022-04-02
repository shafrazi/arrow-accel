import Head from "next/head";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import GetInTouch from "../components/get-in-touch";
import Services from "../components/services";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact | Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <GetInTouch />
      <Services />
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
      />
    </Layout>
  );
}
