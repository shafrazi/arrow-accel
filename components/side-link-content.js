import { useContext, useEffect, useState } from "react";
import { AppContext } from "../app-context";

export default function SideLinkContent({
  centerItems,
  showLinkName,
  defaultContent,
}) {
  const { sideContent, setSideContent, linkName } = useContext(AppContext);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(false);
    setSideContent(defaultContent);
  }, []);

  return (
    <div
      className={`flex w-2/3 flex-col py-3 ${
        centerItems ? "items-center" : ""
      }`}
    >
      <div className="flex flex-col w-3/4 ">
        <h2 className="text-lg md:text-2xl text-left">
          {showLinkName ? linkName : ""}
        </h2>
        {setStartAnimation && (
          <div
            className={`${"animate__animated animate__fadeInUp"} my-10 text-base lg:text-xl`}
          >
            {sideContent}
          </div>
        )}
      </div>
    </div>
  );
}
