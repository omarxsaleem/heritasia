import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { collections } from "../data/collections";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setCollectionsOpen(false);
  }, [location.pathname]);

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    if (!isHome) return;
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navElement = document.querySelector("nav");
      const navHeight = navElement ? navElement.offsetHeight : 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white backdrop-blur-sm shadow-sm"
          : "bg-white backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center h-16 md:h-20">
          {/* Logo (Far Left, before Home) */}
          <Link
            to="/"
            className="flex items-center cursor-pointer mr-6 md:mr-8"
          >
            <img
              src="/heritasia-logo2.jpeg"
              alt="Heritasia Logo"
              className="h-9 md:h-11 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center justify-start space-x-5 md:space-x-7">
            <Link
              to="/"
              className="text-gray-700 hover:text-brick transition-colors duration-200 text-sm md:text-base font-medium"
            >
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setCollectionsOpen(true)}
              onMouseLeave={() => setCollectionsOpen(false)}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1 text-gray-700 hover:text-brick transition-colors duration-200 text-sm md:text-base font-medium"
                onClick={() => setCollectionsOpen((prev) => !prev)}
                aria-expanded={collectionsOpen}
                aria-haspopup="menu"
              >
                Collections
                <span className="text-xs">▾</span>
              </button>
              {collectionsOpen && (
                <div className="absolute top-full left-0 pt-2 w-64 z-50">
                  <div className="bg-white border border-beige-dark rounded-xl shadow-lg py-2">
                  {collections.map((collection) => (
                    <Link
                      key={collection.slug}
                      to={`/collections/${collection.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-beige-light hover:text-brick transition-colors duration-150"
                      onClick={() => setCollectionsOpen(false)}
                    >
                      {collection.title}
                    </Link>
                  ))}
                  </div>
                </div>
              )}
            </div>
            <a
              href={isHome ? "#contact" : "/#contact"}
              onClick={(e) => handleSectionClick(e, "contact")}
              className="text-gray-700 hover:text-brick transition-colors duration-200 text-sm md:text-base font-medium cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
