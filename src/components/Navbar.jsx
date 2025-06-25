import { useEffect } from "react";

/**
 * Navbar component: Sticky top navigation bar.
 * Contains logo, desktop nav links, and a mobile hamburger menu toggle.
 */
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 relative">
          
          {/* Logo */}
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Oluwa<span className="text-blue-500">.femi</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-all duration-200">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-all duration-200">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-all duration-200">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-all duration-200">
              Contact
            </a>
          </div>

          {/* Hamburger Menu Icon - Visible only on mobile */}
          <div
            className="w-7 h-5 relative cursor-pointer z-50 block md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="block w-full h-[2px] bg-white mb-1"></span>
            <span className="block w-full h-[2px] bg-white mb-1"></span>
            <span className="block w-full h-[2px] bg-white"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};
