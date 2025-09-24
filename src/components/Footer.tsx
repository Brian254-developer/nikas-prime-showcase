import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="luxury-gradient border-t border-border/20 mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center font-display font-bold text-accent-foreground text-2xl">
                N
              </div>
              <span className="font-display font-bold text-2xl">
                <span className="text-foreground">Nikas</span> <span className="text-accent">Realty</span>
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your trusted partner in luxury real estate. We specialize in premium properties 
              that redefine elegance and sophistication.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-luxury">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-luxury">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-luxury">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-luxury">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Properties", href: "/properties" },
                { name: "About Us", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-accent transition-luxury"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Property Types</h3>
            <ul className="space-y-3">
              {[
                "Luxury Mansions",
                "Modern Apartments",
                "Premium Maisonettes",
                "Executive Bungalows",
                "Commercial Land",
              ].map((type) => (
                <li key={type}>
                  <Link
                    to="/properties"
                    className="text-muted-foreground hover:text-accent transition-luxury"
                  >
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <div className="text-muted-foreground">
                  <p>Westland Arcade</p>
                  <p>Nairobi, Westlands, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">0710132320</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">nikasrealty@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Nikas Realty. All rights reserved. | Luxury Real Estate Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;