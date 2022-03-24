import Head from "next/head";
import Layout from "../components/layout";
import Header from "../components/header";
import footer from "../components/footer";
import FocusIntro from "../components/focus-intro";

export default function OurFocus() {
  return (
    <Layout>
      <Head>
        <title>Our focus | Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <FocusIntro />
    </Layout>
  );
}
