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
      <div
        className={`animate__animated animate__fadeInUp overlay-content ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a href="/company" className="uppercase text-2xl my-3">
          company
        </a>
        <a href="#" className="uppercase text-2xl my-3">
          cases
        </a>
        <a href="/industries" className="uppercase text-2xl my-3">
          industries
        </a>
        <a href="/contact" className="uppercase text-2xl my-3">
          Contact
        </a>
      </div>
    </div>
  );
}
