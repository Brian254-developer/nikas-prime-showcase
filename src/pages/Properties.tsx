import { useState } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PropertyCard from "@/components/PropertyCard";
import heroImage from "@/assets/hero-luxury-mansion.jpg";
import apartmentImage from "@/assets/luxury-apartment.jpg";
import maisonetteImage from "@/assets/luxury-maisonette.jpg";
import bungalowImage from "@/assets/luxury-bungalow.jpg";

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const properties = [
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
    },
    {
      id: "4",
      title: "Designer Bungalow",
      location: "Malibu, CA",
      price: "$3,450,000",
      image: bungalowImage,
      type: "Bungalow",
      beds: 4,
      baths: 5,
      size: "5,200 sq ft",
    },
    {
      id: "5",
      title: "Oceanfront Villa",
      location: "Hamptons, NY",
      price: "$5,800,000",
      image: heroImage,
      type: "Mansion",
      beds: 8,
      baths: 10,
      size: "12,000 sq ft",
      featured: true,
    },
    {
      id: "6",
      title: "City Center Apartment",
      location: "Chicago, IL",
      price: "$1,200,000",
      image: apartmentImage,
      type: "Apartment",
      beds: 3,
      baths: 3,
      size: "2,400 sq ft",
    },
  ];

  const propertyTypes = ["all", "Mansion", "Apartment", "Maisonette", "Bungalow", "Land"];
  const locations = ["all", "Beverly Hills, CA", "Manhattan, NY", "Miami Beach, FL", "Malibu, CA", "Hamptons, NY", "Chicago, IL"];
  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "0-1000000", label: "Under $1M" },
    { value: "1000000-3000000", label: "$1M - $3M" },
    { value: "3000000-5000000", label: "$3M - $5M" },
    { value: "5000000+", label: "$5M+" },
  ];

  const filteredProperties = properties.filter((property) => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || property.type === selectedType;
    const matchesLocation = selectedLocation === "all" || property.location === selectedLocation;
    
    let matchesPrice = true;
    if (priceRange !== "all") {
      const price = parseInt(property.price.replace(/[^0-9]/g, ""));
      if (priceRange === "0-1000000") matchesPrice = price < 1000000;
      else if (priceRange === "1000000-3000000") matchesPrice = price >= 1000000 && price <= 3000000;
      else if (priceRange === "3000000-5000000") matchesPrice = price >= 3000000 && price <= 5000000;
      else if (priceRange === "5000000+") matchesPrice = price > 5000000;
    }

    return matchesSearch && matchesType && matchesLocation && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Premium Properties
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Discover our collection of luxury properties in the world's most prestigious locations
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="bg-card luxury-gradient rounded-xl p-6 card-shadow mb-8 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {/* Search */}
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Property Type */}
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                {propertyTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type === "all" ? "All Types" : type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Location */}
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location === "all" ? "All Locations" : location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="flex rounded-lg border border-border overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex-1 p-2 flex items-center justify-center transition-colors ${
                  viewMode === "grid" 
                    ? "bg-accent text-accent-foreground" 
                    : "bg-background hover:bg-muted"
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`flex-1 p-2 flex items-center justify-center transition-colors ${
                  viewMode === "list" 
                    ? "bg-accent text-accent-foreground" 
                    : "bg-background hover:bg-muted"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8 animate-slide-up">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">
              {filteredProperties.length} Properties Found
            </h2>
            <p className="text-muted-foreground">
              Showing luxury properties matching your criteria
            </p>
          </div>
          <Button variant="outline-luxury">
            <Filter className="w-4 h-4 mr-2" />
            Advanced Filters
          </Button>
        </div>

        {/* Properties Grid/List */}
        <div className={`${
          viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            : "space-y-6"
        }`}>
          {filteredProperties.map((property, index) => (
            <div
              key={property.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {viewMode === "grid" ? (
                <PropertyCard {...property} />
              ) : (
                <div className="luxury-gradient rounded-xl overflow-hidden card-shadow flex">
                  <div className="w-1/3 relative overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover property-image"
                    />
                    {property.featured && (
                      <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {property.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{property.location}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <span>{property.beds} beds</span>
                        <span>{property.baths} baths</span>
                        <span>{property.size}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-3xl font-bold text-accent">
                        {property.price}
                      </div>
                      <Button variant="luxury">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-16 animate-slide-up">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              No Properties Found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria to find more properties
            </p>
            <Button 
              variant="luxury" 
              onClick={() => {
                setSearchTerm("");
                setSelectedType("all");
                setSelectedLocation("all");
                setPriceRange("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;