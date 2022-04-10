import MobileLinkItem from "./mobile-link-item";

export default function ProjectMobileSideLinks() {
  return (
    <div className="flex flex-col w-full text-white pb-10">
      <MobileLinkItem title="AFFIRM RESEARCH">
        <div>
          <p>
            Margo Neely and Robert Schaeffer teamed up to provide business
            development, communication strategy, leadership coaching, and a full
            suite of brand identity for AFFIRM: The American Foundation for
            Firearm Injury Reduction in Medicine.
          </p>
          <button className="w-2/3 text-[13px] md:text-base md:w-2/3 self-start md:ml-0 md:self-start border-white border-solid border-2 mt-12 text-white uppercase px-2 py-1 md:py-2 rounded tracking-wide">
            read more
          </button>
        </div>
      </MobileLinkItem>
      <MobileLinkItem title="FLOES / FINANCIAL HEALTH">
        <div>
          <p></p>
          <p className="mt-6"></p>
        </div>
      </MobileLinkItem>
      <MobileLinkItem title="LASER 3.14">
        <div>
          <p></p>
          <p className="mt-6"></p>
        </div>
      </MobileLinkItem>
      <MobileLinkItem title="METAVERSE">
        <div>
          <p></p>
          <p className="mt-6"></p>
        </div>
      </MobileLinkItem>
    </div>
  );
}
