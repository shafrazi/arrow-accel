import Head from "next/head";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import GetInTouch from "../components/get-in-touch";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact | Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <GetInTouch />
      {/* <Footer
        backgroundComponent={<img src="/images/focus-footer.png" />}
        imageOverText={"The best way to predict the future is to create it."}
      /> */}
    </Layout>
  );
}
