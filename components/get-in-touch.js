import TeamCard from "./team-card";

export default function GetInTouch() {
  return (
    <div className="flex flex-col w-full h-screen tracking-wide relative">
      <img
        src="/images/logo-icon-black-large-crop.png"
        className=""
        style={{
          opacity: 0.1,
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "auto",
        }}
      />
      <div className="relative w-full flex flex-col md:flex-row mt-4 md:mt-6 lg:mt-10">
        <div className="w-full flex md:w-1/2 justify-center items-center">
          <div className="w-full px-5 md:px-5 md:w-10/12 flex flex-col">
            <h1 className="font-bold text-base md:text-2xl lg:text-3xl">
              Get in Touch
            </h1>
            <div className="w-full flex mt-4 lg:mt-10 text-base md:text-xl">
              <div className="w-1/4">
                <p>HQ</p>
              </div>
              <div className="w-2/3">
                <p>Keizersgracht 391-A</p>
                <p>1016 EJ Amsterdam</p>
                <p>the Netherlands</p>
              </div>
            </div>
            <div className="w-full flex mt-2 lg:mt-5 text-base md:text-xl">
              <div className="w-1/4 flex>">
                <p>Email</p>
              </div>
              <div className="w-2/3 text-left">
                <p>contactus@arrowaccel.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-amber-50 w-full flex flex-col py-5 md:py-8 lg:py-12 mt-12 lg:mt-[5rem]">
        <div className="w-full">
          <div className="w-full flex md:w-1/2 justify-center items-center">
            <div className="w-full px-5 md:px-5 md:w-10/12 flex flex-col">
              <h1 className="font-bold text-base md:text-2xl lg:text-3xl">
                Our team
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row mt-4 md:mt-8 lg:mt-[3rem]">
          <TeamCard
            image="/images/robert.png"
            name="Robert Schaeffer"
            position="Creative Director"
            location="Amsterdam, The Netherlands"
            description="Robert has over two decades of experience in creative management, consultancy, communication, marketing strategy, innovation, and growth."
          />
          <TeamCard
            image="/images/sander.png"
            name="Sander Epema"
            position="Creative Director"
            location="AMSTERDAM, The Netherlands"
            description="Sander is a seasoned, creative professional, investment writer, financial advisor, sustainability expert and art lover. Fostering relationships is his second nature to seal the deal."
          />
        </div>
        <div className="w-full flex flex-col md:flex-row mt-4 md:mt-12 lg:mt-[5rem]">
          <TeamCard
            image="/images/margo.png"
            name="Margo Neely"
            position="Creative Strategist"
            location="NEW york, Usa"
            description="Margo is a thought leader, director, designer, innovator, and creative strategist, specialized in media, film production, and design studio specializing in the creation of original multi-platform streaming digital content for global brands"
          />
          <TeamCard
            image="/images/keweul.png"
            name="Keweul Hailand"
            position="Creative Strategist"
            location="AMSTERDAM, The Netherlands"
            description="Keweul has been working with online channels since 2013. Reaching a young audience is one of his strengths on an executive, managerial and strategic level. He has proven this at various commercial companies and public organizations. Keweul has a preference for data-driven working, content distribution and video content creation"
          />
        </div>
      </div>
    </div>
  );
}
