import { useContext } from "react";
import { AppContext } from "../app-context";

export default function MobileMenu() {
  const { isOpen, setIsOpen } = useContext(AppContext);
  return (
    <div
      className={`overlay lg:hidden ${
        isOpen ? "block overlay-w-full" : "hidden"
      }`}
    >
      <a
        href="#"
        className="closebtn"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        &times;
      </a>
      <div className="overlay-content">
        <a href="/about-us" className="uppercase text-2xl my-3">
          About us
        </a>
        <a href="/our-focus" className="uppercase text-2xl my-3">
          Our focus
        </a>
        <a href="/contact" className="uppercase text-2xl my-3">
          Contact
        </a>
      </div>
    </div>
  );
}
