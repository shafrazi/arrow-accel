import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../app-context";

export default function LinkItem({ name, content }) {
  const { setSideContent } = useContext(AppContext);
  const [linkClicked, setLinkClicked] = useState(false);

  return (
    <div
      className="w-full flex"
      onClick={() => {
        setLinkClicked(true);
        setSideContent(content);
      }}
    >
      <div className="w-10/12 flex flex-col justify-center">
        <p className={`${linkClicked && "font-bold"}`}>{name}</p>
      </div>
      <div className="w-2/12 flex flex-col justify-center items-center text-blue-500">
        <FontAwesomeIcon icon={faArrowRight} className="w-10" />
      </div>
    </div>
  );
}
