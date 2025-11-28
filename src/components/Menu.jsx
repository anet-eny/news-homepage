import iconMenuClose from "../assets/icon-menu-close.svg";

export default function Menu({ onCloseMenu }) {
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
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onCloseMenu();
            }}
          >
            Home
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onCloseMenu();
            }}
          >
            New
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onCloseMenu();
            }}
          >
            Popular
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onCloseMenu();
            }}
          >
            Trending
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onCloseMenu();
            }}
          >
            Categories
          </a>
        </nav>
      </div>
    </div>
  );
}
