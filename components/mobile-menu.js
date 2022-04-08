import { useContext } from "react";
import { AppContext } from "../app-context";
import Link from "next/link";

export default function MobileMenu() {
  const { isOpen, setIsOpen } = useContext(AppContext);
  return (
    <div
      className={`overlay lg:hidden ${
        isOpen ? "block overlay-w-full" : "hidden"
      }`}
    >
      <div className="text-white logo">
        <img src="/images/logo-white.png" alt="logo" className="w-[9rem]" />
      </div>
      <a
        href="#"
        className="closebtn flex justify-center items-center"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        &times;
      </a>
      <div
        className={`animate__animated animate__fadeInUp overlay-content ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a href="/" className="uppercase text-2xl my-3">
          home
        </a>
        <a href="/company" className="uppercase text-2xl my-3">
          company
        </a>
        <Link href="/company#projects" scroll={false}>
          <a className="uppercase text-2xl my-3">projects</a>
        </Link>

        <a href="/industries" className="uppercase text-2xl my-3">
          causes
        </a>
        <a href="/contact" className="uppercase text-2xl my-3">
          Contact
        </a>
      </div>
    </div>
  );
}
