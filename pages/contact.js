import Head from "next/head";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer-copy";
import GetInTouch from "../components/get-in-touch";
import Services from "../components/services";
import Coffee from "../components/coffee";
export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact | Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <GetInTouch />
      <Coffee/>
  
    </Layout>
  );
}
