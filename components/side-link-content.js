import { useContext, useEffect, useState } from "react";
import { AppContext } from "../app-context";

export default function SideLinkContent({
  centerItems,
  showLinkName,
  defaultContent,
  defaultLinkName,
}) {
  const { sideContent, setSideContent, linkName, setLinkName } =
    useContext(AppContext);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(false);
    setSideContent(defaultContent);
    setLinkName(defaultLinkName);
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
          </div>
        )}
      </div>
    </div>
  );
}
