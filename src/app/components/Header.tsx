import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B3D2E] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div
          className="text-white cursor-pointer"
          onClick={() => scrollToSection("hero")}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          🌿 Green Heart
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-[#C8A951] transition-colors"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-white hover:text-[#C8A951] transition-colors"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("industries")}
            className="text-white hover:text-[#C8A951] transition-colors"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            Industries
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#C8A951] text-[#0B3D2E] px-5 py-2 rounded hover:bg-[#D4B562] transition-colors"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B3D2E] border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white text-left py-2 hover:text-[#C8A951] transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white text-left py-2 hover:text-[#C8A951] transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("industries")}
              className="text-white text-left py-2 hover:text-[#C8A951] transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#C8A951] text-[#0B3D2E] px-5 py-3 rounded hover:bg-[#D4B562] transition-colors text-left"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}