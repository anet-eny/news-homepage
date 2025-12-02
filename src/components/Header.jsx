import { useEffect, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import logo from "../assets/logo.svg";
import iconMenu from "../assets/icon-menu.svg";
import Menu from "./Menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 40rem)");

  useEffect(() => {
    if (isMenuOpen && !isSmallScreen) {
      setIsMenuOpen(false);
    }
  }, [isSmallScreen, isMenuOpen]);

  return (
    <header className="flex items-center justify-between w-full py-8 sm:py-16">
      <a href="/">
        <img src={logo} alt="w logo" />
      </a>
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="sm:hidden cursor-pointer"
      >
        <img src={iconMenu} alt="" />
      </button>

      <nav
        aria-label="main navigation"
        className="hidden sm:block text-preset-6 text-navy-600 "
      >
        <ul className="flex gap-10 [&_a]:transition-colors [&_a:hover]:text-red-500">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#New">New</a>
          </li>
          <li>
            <a href="#Popular">Popular</a>
          </li>
          <li>
            <a href="#Trending">Trending</a>
          </li>
          <li>
            <a href="#Categories">Categories</a>
          </li>
        </ul>
      </nav>
      {isMenuOpen && <Menu onCloseMenu={() => setIsMenuOpen(false)} />}
    </header>
  );
}
