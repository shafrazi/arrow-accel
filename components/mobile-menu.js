import { useContext } from "react";
import { AppContext } from "../pages/app-context";

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
        <a href="/about-us">About us</a>
        <a href="/our-focus">Our focus</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}
