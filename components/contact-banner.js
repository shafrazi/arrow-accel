import Link from "next/link";
import Container from "./container";

export default function ContactBanner({
  title,
  description,
  topButtonText,
  topButtonLink,
  bottomButtonText,
  bottomButtonLink,
  backgroundColor,
  style,
}) {
  return (
    <Container
      backgroundColor={backgroundColor ? backgroundColor : "bg-black"}
      style={style}
      topMargin={0}
    >
      <div className="flex w-full flex-col py-16 md:flex-row">
        <div className="flex flex-col w-full items-center md:items-start md:w-1/2 text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {title}
          </h2>
          <div className="md:hidden mt-10 text-[19px] text-center">
            {description}
          </div>
          <div className="flex flex-col w-9/12 md:w-11/12 lg:w-8/12 mt-[6rem] md:mt-[3rem]">
            <Link href={topButtonLink || ""}>
              <button className="w-full text-base md:w-10/12 self-start border-white border-solid border-2 mt-8 text-white uppercase py-2 px-2 rounded tracking-wide">
                {topButtonText}
              </button>
            </Link>
            <Link href={bottomButtonLink || ""}>
              <button className="w-full text-base md:w-10/12 self-start border-white border-solid border-2 mt-8 text-white uppercase py-2 px-2 rounded tracking-wide">
                {bottomButtonText}
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex flex-col w-full items-center md:items-start md:w-1/2 text-white">
          <div
            className="mt-10 md:text-lg lg:text-2xl"
            style={{ lineHeight: 1.6 }}
          >
            {description}
          </div>
        </div>
      </div>
    </Container>
  );
}
