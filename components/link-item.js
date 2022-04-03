import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../app-context";

export default function LinkItem({ name, content, defaultClicked }) {
  const {
    setSideContent,
    linkName,
    setLinkName,
    setStartLinkAnimation,
    sideContent,
  } = useContext(AppContext);
  const [linkClicked, setLinkClicked] = useState(defaultClicked);

  return (
    <div className="flex flex-col border-b-2 border-black">
      <div
        className="w-full flex py-6 cursor-pointer"
        onClick={() => {
          setLinkClicked(true);
          setSideContent(content);
          setLinkName(name);
          setStartLinkAnimation(sideContent === content);
        }}
      >
        <div className="w-10/12 flex flex-col justify-center text-lg md:text-2xl">
          <p className={`${linkClicked && linkName === name && "font-bold"}`}>
            {name}
          </p>
        </div>
        <div className="w-2/12 flex flex-col justify-center items-center text-blue-500">
          <FontAwesomeIcon icon={faArrowRight} className="w-8" />
        </div>
      </div>
    </div>
  );
}
