import Head from "next/head";
import AboutUsSideBar from "../../components/about-us-sidebar";
import Footer from "../../components/footer";
import Header from "../../components/header";

export default function Foundation() {
  return (
    <div className="w-full">
      <Head>
        <title>About Us | Arrow Accel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex w-full justify-center items-center my-[10rem]">
        <div className="flex w-11/12">
          <AboutUsSideBar />
          <div className="w-2/3">
            <div className="w-3/4">
              <p className="text-xl">
                Our foundation is a strong, visionary strategy and creative
                team, directing projects together with specialized execution
                partners, each operating at the top of their respective fields
                of expertise.
              </p>
              <p className="text-xl mt-8">
                We are consultants for brands, start-ups, entertainment
                professionals and artists, ready to create, develop or
                reinvigorate your business.
              </p>
              <p className="text-xl mt-8">
                Together with our partners we raise visibility, break-in to the
                marketplace and secure funds for ground-breaking projects,
                disruptive ideas and companies in the Netherlands and around the
                globe.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer
        backgroundImage={"/images/about-us-footer.png"}
        imageOverText={"Keep going."}
      />
    </div>
  );
}
