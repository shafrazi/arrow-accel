import "../styles/global.css";
import Head from "next/head";
import { AppContextProvider } from "../app-context";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

const tagManagerArgs = {
  gtmId: "GTM-PRXR5MP",
};

export default function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <>
      <AppContextProvider>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
        </Head>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
}
