import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function BackToSite() {
  return (
    <div className="w-full flex">
      <Link href="/">
        <div className="w-full md:w-1/4 flex items-center justify-between py-6 pr-4 border-solid border-b-2 border-black text-blue-500">
          <FontAwesomeIcon icon={faArrowLeft} width="25" />
          <p className="uppercase text-black">back to site</p>
        </div>
      </Link>
    </div>
  );
}
