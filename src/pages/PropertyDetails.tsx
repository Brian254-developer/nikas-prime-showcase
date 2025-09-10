import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Bed, 
  Bath, 
  Square, 
  MapPin, 
  Phone, 
  Mail, 
  Heart,
  Share2,
  Calendar,
  Car,
  Wifi,
  Shield,
  Camera
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-luxury-mansion.jpg";
import apartmentImage from "@/assets/luxury-apartment.jpg";
import maisonetteImage from "@/assets/luxury-maisonette.jpg";
import bungalowImage from "@/assets/luxury-bungalow.jpg";

const PropertyDetails = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock property data - in real app, fetch based on id
  const property = {
    id: "1",
    title: "Luxury Modern Mansion",
    location: "Karen, Nairobi",
    price: "KES 420,000,000",
    type: "Mansion",
    beds: 6,
    baths: 8,
    size: "8,500 sq ft",
    lotSize: "2.5 acres",
    yearBuilt: "2022",
    parking: "4 car garage",
    description: "Step into luxury with this stunning modern mansion that redefines contemporary living in Karen. This architectural masterpiece seamlessly blends cutting-edge design with unparalleled comfort, featuring soaring ceilings, floor-to-ceiling windows, and premium finishes throughout.",
    longDescription: "This exceptional property represents the pinnacle of luxury living in one of Nairobi's most prestigious neighborhoods. The open-concept design flows effortlessly from room to room, creating an ideal environment for both intimate family gatherings and grand-scale entertaining. The gourmet kitchen features top-of-the-line appliances, custom cabinetry, and a large island perfect for culinary adventures. The master suite is a private retreat with a spa-like bathroom, walk-in closets, and breathtaking views of the surrounding landscape.",
    images: [heroImage, apartmentImage, maisonetteImage, bungalowImage],
    features: [
      "Home Theater",
      "Wine Cellar",
      "Gym/Fitness Room",
      "Swimming Pool",
      "Spa/Hot Tub",
      "Chef's Kitchen",
      "Library/Study",
      "Guest House",
      "Security System",
      "Smart Home Technology",
      "Landscaped Gardens",
      "Outdoor Kitchen",
    ],
    amenities: [
      { icon: Wifi, label: "High-Speed Internet" },
      { icon: Shield, label: "24/7 Security" },
      { icon: Car, label: "Valet Parking" },
      { icon: Camera, label: "Surveillance System" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/properties" className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Properties
        </Link>
      </div>

      {/* Image Gallery */}
      <section className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-96 lg:h-[500px]">
          <div className="lg:col-span-2 relative overflow-hidden rounded-xl">
            <img
              src={property.images[currentImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {property.images.length}
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {property.images.slice(1, 4).map((image, index) => (
              <div
                key={index + 1}
                className="relative overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setCurrentImageIndex(index + 1)}
              >
                <img
                  src={image}
                  alt={`${property.title} ${index + 2}`}
                  className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                />
                {index === 2 && property.images.length > 4 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-semibold">
                    +{property.images.length - 3} more
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Thumbnails */}
        <div className="flex space-x-2 mt-4 overflow-x-auto">
          {property.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                currentImageIndex === index ? "border-accent" : "border-transparent"
              }`}
            >
              <img src={image} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="animate-slide-up">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="font-display text-4xl font-bold text-foreground mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    {property.location}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost-luxury" size="icon">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost-luxury" size="icon">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="text-4xl font-bold text-accent mb-6">
                {property.price}
              </div>

              {/* Property Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 luxury-gradient rounded-lg">
                  <Bed className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="font-semibold text-foreground">{property.beds}</div>
                  <div className="text-sm text-muted-foreground">Bedrooms</div>
                </div>
                <div className="text-center p-4 luxury-gradient rounded-lg">
                  <Bath className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="font-semibold text-foreground">{property.baths}</div>
                  <div className="text-sm text-muted-foreground">Bathrooms</div>
                </div>
                <div className="text-center p-4 luxury-gradient rounded-lg">
                  <Square className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="font-semibold text-foreground">{property.size}</div>
                  <div className="text-sm text-muted-foreground">Living Space</div>
                </div>
                <div className="text-center p-4 luxury-gradient rounded-lg">
                  <Car className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="font-semibold text-foreground">4</div>
                  <div className="text-sm text-muted-foreground">Car Garage</div>
                </div>
              </div>
            </div>

            {/* About the Property */}
            <div className="animate-slide-up">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                About This Property
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {property.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {property.longDescription}
                </p>
              </div>
            </div>

            {/* Property Features */}
            <div className="animate-slide-up">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Features & Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 luxury-gradient rounded-lg"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="animate-slide-up">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Property Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="luxury-gradient p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-4">Basic Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Property Type:</span>
                      <span className="text-foreground font-medium">{property.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Year Built:</span>
                      <span className="text-foreground font-medium">{property.yearBuilt}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lot Size:</span>
                      <span className="text-foreground font-medium">{property.lotSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Parking:</span>
                      <span className="text-foreground font-medium">{property.parking}</span>
                    </div>
                  </div>
                </div>
                
                <div className="luxury-gradient p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-4">Building Amenities</h3>
                  <div className="space-y-3">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <amenity.icon className="w-5 h-5 text-accent" />
                        <span className="text-foreground">{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Form */}
            <div className="luxury-gradient p-6 rounded-xl card-shadow animate-slide-up">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Schedule a Viewing
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message (optional)"
                    rows={4}
                    className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  />
                </div>
                <Button variant="luxury" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Viewing
                </Button>
              </form>
            </div>

            {/* Contact Agent */}
            <div className="luxury-gradient p-6 rounded-xl card-shadow animate-slide-up">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Contact Our Agent
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-foreground">0710132320</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-foreground">nikasrealty@gmail.com</span>
                </div>
                <div className="flex space-x-2 pt-4">
                  <Button variant="luxury" className="flex-1">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  <Button variant="outline-luxury" className="flex-1">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
            </div>

            {/* Property Summary */}
            <div className="luxury-gradient p-6 rounded-xl card-shadow animate-slide-up">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Property Summary
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Property ID:</span>
                  <span className="text-foreground font-medium">NR-{property.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Listed:</span>
                  <span className="text-foreground font-medium">30 days ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Views:</span>
                  <span className="text-foreground font-medium">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-accent font-medium">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;