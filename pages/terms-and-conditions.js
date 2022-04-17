import Head from "next/head";
import Header from "../components/header";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Terms from "../components/terms";

export default function TermsAndConditions() {
  return (
    <Layout>
      <Head>
        <title>Terms & conditions | Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Terms />
      <Footer
        backgroundComponent={<img src="/images/terms-footer.png" />}
        showIcon={false}
      />
    </Layout>
  );
}
