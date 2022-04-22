import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ReadMoreBlog() {
  return (
    <div className="w-full flex text-white">
      <Link href="/projects">
        <div className="w-full flex items-center justify-between py-6 pr-4 border-solid border-b-2 border-white text-blue-500 cursor-pointer">
          <p className="text-white font-bold text-lg lg:text-2xl">
            read more blog posts
          </p>
          <FontAwesomeIcon icon={faArrowRight} width="25" />
        </div>
      </Link>
    </div>
  );
}
