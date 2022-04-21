import { fetchEntries } from "../../utils/contentful-posts";

export default function Post({ post }) {
  console.log(post);
  return <></>;
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
