import Head from "next/head";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer-copy";

import Services from "../components/services";
import Coffee from "../components/coffee";
import Mission from "../components/mission11";
import Promoting from "../components/promoting12";
import MobileFooter from "../components/footerMobile";
import MobileAffirm from "../components/affirmMobile";
import GetInTouch from "../components/getInTouch";
export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact | Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <GetInTouch />
      <Mission />
      <Promoting />
      <MobileFooter />
    </Layout>
  );
}
