import Head from "next/head";
import AboutUsHero from "../components/about-us-hero";
import Header from "../components/header";
import Layout from "../components/layout";

export default function AboutUs() {
  return (
    <Layout>
      <Head>
        <title>About Us | Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AboutUsHero />
    </Layout>
  );
}
