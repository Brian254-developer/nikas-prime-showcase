import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 luxury-gradient border-b border-border/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 relative z-10">
            <div className="bg-gradient-to-r from-white to-gray-50 rounded-xl p-3 shadow-luxury border border-white/20 hover:shadow-gold transition-all duration-300 hover:scale-105">
              <img 
                src="/lovable-uploads/ace86e47-0469-456a-82c1-833a8c58080d.png" 
                alt="Nikas Realty" 
                className="w-24 h-auto filter drop-shadow-sm"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-luxury font-medium ${
                  isActive(item.href)
                    ? "text-accent border-b-2 border-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a 
                href="https://wa.me/254710132320" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-accent transition-luxury"
              >
                <Phone className="w-4 h-4" />
                <span>0710132320</span>
              </a>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>nikasrealty@gmail.com</span>
              </div>
            </div>
            <Button variant="luxury" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost-luxury"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/20 py-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 transition-luxury font-medium ${
                    isActive(item.href)
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-border/20">
                <div className="flex flex-col space-y-2 text-sm text-muted-foreground mb-4">
                  <a 
                    href="https://wa.me/254710132320" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-accent transition-luxury"
                  >
                    <Phone className="w-4 h-4" />
                    <span>0710132320</span>
                  </a>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>nikasrealty@gmail.com</span>
                  </div>
                </div>
                <Button variant="luxury" className="w-full">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;