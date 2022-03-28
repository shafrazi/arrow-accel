import "../styles/global.css";
import Head from "next/head";
import { AppContextProvider } from "./app-context";

export default function App({ Component, pageProps }) {
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
