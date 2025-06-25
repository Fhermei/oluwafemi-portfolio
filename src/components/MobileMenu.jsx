import { useEffect } from "react";

/**
 * MobileMenu component:
 * Fullscreen mobile menu with animated fade-in and scroll lock.
 */
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.95)] backdrop-blur-lg
                  flex flex-col items-center justify-center transition-all duration-300 ease-in-out
                  ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
                `}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Links - staggered animation */}
      {["home", "about", "projects", "contact"].map((item, i) => (
        <a
          key={item}
          href={`#${item}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionDelay: `${i * 75}ms` }}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </a>
      ))}
    </div>
  );
};
