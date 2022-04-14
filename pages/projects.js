import Head from "next/head";

import Header from "../components/header";
import Layout from "../components/layout";

import Footer from "../components/footer";
import ProjectsHero from "../components/projects-hero";
import ContactBanner from "../components/contact-banner";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects | Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header backgroundColor="bg-black" textColor="text-white" />
      <ProjectsHero />
      <ContactBanner
        style={{ backgroundColor: "#375aa9" }}
        backgroundColor=""
        title="Let's talk"
        description={
          <div>
            <p>Let's have a good talk about your latest</p>
            <p>venture. Book an exploratory meeting</p>
            <p>with us and discuss your next moves.</p>
          </div>
        }
        topButtonText="Book appointment"
        topButtonLink="https://meetings-eu1.hubspot.com/robert-schaeffer"
        bottomButtonText="call us"
        bottomButtonLink="tel:0031625283072"
      />
      <Footer
        backgroundComponent={<img src="/images/projects-footer.png" />}
        imageOverText={<p className="text-black">Ambition.</p>}
        showIcon={false}
        fontSize="5vw"
        topImage="/images/city-mobile.png"
        mobileTitleText={
          <p className="text-2xl md:text-5xl">
            The best way to <br />
            predict the future <br />
            is to create it.
          </p>
        }
      />
    </Layout>
  );
}
