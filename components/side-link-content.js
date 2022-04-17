import { useContext, useEffect, useState } from "react";
import { AppContext } from "../app-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function SideLinkContent({
  centerItems,
  showLinkName,
  defaultContent,
  defaultLinkName,
  defaultTargetLink,
}) {
  const {
    sideContent,
    setSideContent,
    linkName,
    setLinkName,
    targetLink,
    setTargetLink,
  } = useContext(AppContext);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(false);
    setSideContent(defaultContent);
    setLinkName(defaultLinkName);
    setTargetLink(defaultTargetLink);
  }, []);

  return (
    <div
      className={`flex w-2/3 flex-col py-6 ${
        centerItems ? "items-center" : ""
      }`}
    >
      <div className="flex flex-col w-3/4 ">
        {showLinkName && (
          <h2 className="text-lg md:text-2xl text-left mb-10 font-bold">
            {showLinkName ? linkName : ""}
          </h2>
        )}
        {setStartAnimation && (
          <div
            className={`${"animate__animated animate__fadeInUp"} text-base lg:text-xl`}
          >
            {sideContent}
            <div className="w-full mt-8 flex">
              <div className="w-1/2"></div>
              <div className="w-1/2 text-right">
                {targetLink && (
                  <a
                    href={targetLink}
                    target="_blank"
                    className="flex w-full space-x-4 items-center"
                  >
                    <p className="w-11/12 text-base">Go to their website</p>
                    <div className="text-blue-500 w-1/12">
                      <FontAwesomeIcon icon={faArrowRight} className="w-5" />
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
