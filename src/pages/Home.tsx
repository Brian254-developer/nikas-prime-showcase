import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, MapPin, Bed, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/PropertyCard";
import heroImage from "@/assets/hero-luxury-mansion.jpg";
import apartmentImage from "@/assets/luxury-apartment.jpg";
import maisonetteImage from "@/assets/luxury-maisonette.jpg";
import bungalowImage from "@/assets/luxury-bungalow.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProperties = [
    {
      id: "1",
      title: "Luxury Modern Mansion",
      location: "Beverly Hills, CA",
      price: "$4,200,000",
      image: heroImage,
      type: "Mansion",
      beds: 6,
      baths: 8,
      size: "8,500 sq ft",
      featured: true,
    },
    {
      id: "2",
      title: "Premium Penthouse Suite",
      location: "Manhattan, NY",
      price: "$2,800,000",
      image: apartmentImage,
      type: "Apartment",
      beds: 4,
      baths: 4,
      size: "3,200 sq ft",
      featured: true,
    },
    {
      id: "3",
      title: "Executive Maisonette",
      location: "Miami Beach, FL",
      price: "$1,950,000",
      image: maisonetteImage,
      type: "Maisonette",
      beds: 5,
      baths: 5,
      size: "4,800 sq ft",
      featured: true,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Property Investor",
      content: "Nikas Realty exceeded all my expectations. Their attention to detail and premium service made finding my dream property effortless.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Business Executive",
      content: "The luxury properties and professional expertise at Nikas Realty are unmatched. They truly understand the high-end market.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Entrepreneur",
      content: "Outstanding service from start to finish. Nikas Realty helped me secure a fantastic investment property in record time.",
      rating: 5,
    },
  ];

  // Auto-rotate slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProperties.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredProperties.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${featuredProperties[currentSlide].image})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Luxury Real Estate
            <span className="block text-accent">Redefined</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Discover premium properties that embody elegance, sophistication, 
            and unparalleled luxury in the world's most prestigious locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/properties">
              <Button variant="hero" size="xl" className="group">
                Explore Properties
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline-luxury" size="xl">
                Get Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* Slideshow Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {featuredProperties.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-accent scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Properties
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked premium properties that represent the pinnacle of luxury living
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <div
                key={property.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <PropertyCard {...property} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/properties">
              <Button variant="luxury" size="lg">
                View All Properties
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Properties Sold" },
              { number: "$2.5B+", label: "Total Sales Volume" },
              { number: "15+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2 font-display">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied clients who found their dream properties with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="luxury-gradient p-8 rounded-xl card-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-slide-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our expert team guide you through the luxury real estate market 
              and help you discover the perfect property that matches your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="luxury" size="xl">
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/properties">
                <Button variant="outline-luxury" size="xl">
                  Browse Properties
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;