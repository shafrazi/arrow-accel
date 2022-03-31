import Head from "next/head";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer-copy";
import FocusIntro from "../components/focus-intro";
import WhatWeDo from "../components/what-we-do";

export default function OurFocus() {
  return (
    <Layout>
      <Head>
        <title>Our focus | Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <FocusIntro />
      <WhatWeDo />
      <Footer
        backgroundComponent={<img src="/images/focus-footer.png" />}
        imageOverText={"The best way to predict the future is to create it."}
        showIcon={true}
        fontSize="3vw"
      />
    </Layout>
  );
}
