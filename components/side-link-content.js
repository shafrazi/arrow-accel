import { useContext, useEffect, useState } from "react";
import { AppContext } from "../app-context";

export default function SideLinkContent() {
  const { sideContent, linkName } = useContext(AppContext);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(false);
  }, []);

  return (
    <div className="flex w-2/3 flex-col items-center py-3">
      <div className="flex flex-col w-3/4 justify-center items-center">
        <h2 className="text-lg md:text-2xl">{linkName}</h2>
        {setStartAnimation && (
          <p
            className={`${"animate__animated animate__fadeInUp"} my-3 md:my-6`}
          >
            {sideContent}
          </p>
        )}
      </div>
    </div>
  );
}
