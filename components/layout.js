import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="" style={{ fontFamily: "OpenSauceOne" }}>
      <Head>
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
      </Head>
      {children}
    </div>
  );
}
