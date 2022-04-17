import Head from "next/head";
import Header from "../components/header";
import Layout from "../components/layout";
import Footer from "../components/footer";

export default function TermsConditions() {
  return (
    <Layout>
      <Head>
        <title>Terms & conditions | Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
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
      />
    </Layout>
  );
}
