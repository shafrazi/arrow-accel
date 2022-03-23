import Head from "next/head";
import AboutUsSideBar from "../components/about-us-sidebar";
import Header from "../components/header";

export default function AboutUs() {
  return (
    <div className="w-full">
      <Head>
        <title>About Us | Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
