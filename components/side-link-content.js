import { useContext, useEffect, useState } from "react";
import { AppContext } from "../app-context";

export default function SideLinkContent({ sideContent }) {
  // const { sideContent } = useContext(AppContext);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return (
    <div className="flex w-1/2 flex-col">
      <p
        className={`${startAnimation && "animate__animated animate__fadeInUp"}`}
      >
        {sideContent}
      </p>
    </div>
  );
}
