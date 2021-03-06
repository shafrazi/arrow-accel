import { fetchEntries } from "../../utils/contentful-posts";
import Layout from "../../components/layout";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ContactBanner from "../../components/contact-banner";
import Container from "../../components/container";
import Column from "../../components/column";
import ReadMoreBlog from "../../components/read-more-blog";

export default function Slug({ post }) {
  return (
    <Layout>
      <Head>
        <title>{`${post.fields.title} | Arrow Accel`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header backgroundColor="bg-black" textColor="text-white" />
      <div className="w-full flex flex-col">
        <div className="w-full relative">
          <img src={post.fields.heroImage.fields.file.url} className="w-full" />
          <div className="absolute bottom-[60%] w-full flex flex-col">
            {post.fields.secondaryImage ? (
              <img
                src={post.fields.secondaryImage.fields.file.url}
                className="w-[15%]"
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <Container backgroundColor={"bg-black"}>
          <div className="w-full flex flex-col md:flex-row text-white md:space-x-8">
            <div className="">
              <Column content={post.fields.columnOne} />
            </div>
            <div className="">
              {post.fields.secondaryImage ? (
                <img
                  src={post.fields.secondaryImage.fields.file.url}
                  className="w-full my-6"
                />
              ) : (
                ""
              )}
              <Column content={post.fields.columnTwo} />
              <ReadMoreBlog />
            </div>
          </div>
        </Container>
      </div>
      <ContactBanner
        title="Get in touch"
        description={
          <div>
            <p>
              We understand your urge to create. Let's leave a mark on history
              and get your work out there. Fast!
            </p>
          </div>
        }
        topButtonText="Book a call"
        topButtonLink="https://meetings-eu1.hubspot.com/robert-schaeffer"
        bottomButtonText="call us"
        bottomButtonLink="tel:0031625283072"
      />
      <Footer
        backgroundComponent={
          <img src={post.fields.thumbnail.fields.file.url} />
        }
        imageOverText=""
        showIcon={false}
        fontSize="5vw"
        topImage={post.fields.thumbnail.fields.file.url}
        mobileTitleText=""
      />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const response = await fetchEntries();

  const post = await response.find((p) => {
    return p.fields.slug === params.slug;
  });

  if (post) {
    return {
      props: { post },
    };
  } else {
    return {
      props: {},
    };
  }
}

export async function getStaticPaths() {
  const response = await fetchEntries();

  const paths = await response.map((post) => {
    return {
      params: {
        slug: post.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
