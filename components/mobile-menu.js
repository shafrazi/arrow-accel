import { useContext } from "react";
import { AppContext } from "../app-context";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MobileMenu() {
  const { isOpen, setIsOpen } = useContext(AppContext);
  const router = useRouter();

  async function handleNavigation() {
    router.push("/company");
  }

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

        <a
          href="/projects"
          // onClick={() => {
          //   if (router.pathname !== "/company") {
          //     handleNavigation().then(() => {
          //       setIsOpen(false);
          //       scroller.scrollTo("projects", { smooth: true });
          //     });
          //   } else {
          //     handleNavigation().then(() => {
          //       scroller.scrollTo("projects", { smooth: true });
          //     });
          //   }
          // }}
          className="uppercase text-2xl my-3"
        >
          projects
        </a>

        <a href="/causes" className="uppercase text-2xl my-3">
          causes
        </a>
        <a href="/contact" className="uppercase text-2xl my-3">
          Contact
        </a>
      </div>
    </div>
  );
}
