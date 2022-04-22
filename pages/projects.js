import Head from "next/head";
import { fetchEntries } from "../utils/contentful-posts";

import Header from "../components/header";
import Layout from "../components/layout";

import Footer from "../components/footer";
import ProjectsHero from "../components/projects-hero";
import ContactBanner from "../components/contact-banner";
import ProjectItems from "../components/project-items";

export default function Projects({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Projects | Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header backgroundColor="bg-black" textColor="text-white" />
      <ProjectsHero />
      <ProjectItems posts={posts} />
      <ContactBanner
        style={{ backgroundColor: "#375aa9" }}
        backgroundColor=""
        title="Let's talk"
        description={
          <div>
            <p>
              Let's have a good talk about your latest venture. Book an
              exploratory meeting with us and discuss your next moves.
            </p>
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
        topImage="/images/projects-footer-mobile.png"
        mobileTitleText="Ambition."
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetchEntries();
  const posts = await response.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts: posts,
    },
  };
}
