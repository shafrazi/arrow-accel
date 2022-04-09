import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function LocationPin({ text }) {
  return (
    <div className="text-red-600 pin space-x-2">
      <FontAwesomeIcon
        icon={faLocationDot}
        className="w-10 md:w-14 lg:w-[40px]"
      />
      <div className="text-sm font-bold">{text}</div>
    </div>
  );
}
