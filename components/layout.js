import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="" style={{ fontFamily: "OpenSauceOne" }}>
      <Head>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
        <link
          rel="preload"
          href="/fonts/open-sauce/OpenSauceOne-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/open-sauce/OpenSauceOne-Light.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/open-sauce/OpenSauceOne-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <meta
          name="description"
          content="We are consultants for brands, entertainment professionals, start-ups and artists, ready to create, develop or reinvigorate your business."
        />
        <meta
          property="og:description"
          content="We are consultants for brands, entertainment professionals, start-ups and artists, ready to create, develop or reinvigorate your business."
        />
        <meta
          property="og:image"
          content="//cdn.mcauto-images-production.sendgrid.net/fd24d1210e70a527/2be7eda0-c204-42fd-be12-6dfd2f070137/300x216.png"
        />
      </Head>
      {children}
    </div>
  );
}
