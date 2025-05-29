
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { title: "Home", href: "/" },
    { title: "Servizi", href: "/servizi" },
    { title: "Casi Studio", href: "/casi-studio" },
    { title: "Chi Siamo", href: "/chi-siamo" },
    { title: "Blog", href: "#blog" },
    { title: "Contatti", href: "/contatti" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/image/logo.png" alt="Algentix Logo" className="h-16 w-auto" /> {/* Modificato da h-10 a h-16 */}
            </Link>
                          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              item.href.startsWith("/") ? (
                <Link
                  key={item.title}
                  to={item.href}
                  className="text-gray-700 hover:text-brand-blue-600 font-medium transition-colors duration-200"
                >
                  {item.title}
                </Link>
              ) : (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-gray-700 hover:text-brand-blue-600 font-medium transition-colors duration-200"
                >
                  {item.title}
                </a>
              )
            ))}
            <Button className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white">
              Consulenza Gratuita
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                item.href.startsWith("/") ? (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="text-gray-700 hover:text-brand-blue-600 font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <a
                    key={item.title}
                    href={item.href}
                    className="text-gray-700 hover:text-brand-blue-600 font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                )
              ))}
              <Button className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white w-fit">
                Consulenza Gratuita
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
