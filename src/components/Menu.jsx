import { useEffect } from "react";
import iconMenuClose from "../assets/icon-menu-close.svg";

export default function Menu({ onCloseMenu }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEscape = (e) => {
      if (e.key === "Escape") onCloseMenu();
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onCloseMenu]);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#new", label: "New" },
    { href: "#popular", label: "Popular" },
    { href: "#trending", label: "Trending" },
    { href: "#categories", label: "Categories" },
  ];

  const handleLinkClick = (e) => {
    e.preventDefault();
    onCloseMenu();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      className="fixed inset-0 z-10"
    >
      <div
        onClick={onCloseMenu}
        aria-hidden="true"
        className="absolute inset-0 bg-black/30 animate-in fade-in duration-200"
      ></div>
      <div className="relative flex flex-col max-w-3xs sm:max-w-xs h-full ml-auto bg-white px-4.5 sm:px-9 py-7 gap-22">
        <button onClick={onCloseMenu} className="ml-auto cursor-pointer">
          <img src={iconMenuClose} alt="Close menu" />
        </button>
        <nav className="flex flex-col gap-6 text-preset-5 font-normal text-navy-950 [&_a]:transition-colors [&_a:hover]:text-red-500">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} onClick={handleLinkClick}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
