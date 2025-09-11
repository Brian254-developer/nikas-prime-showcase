import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  type: string;
  beds?: number;
  baths?: number;
  size?: string;
  featured?: boolean;
  saleType?: "For Sale" | "To Let";
  status?: "Offplan" | "Ready";
}

const PropertyCard = ({
  id,
  title,
  location,
  price,
  image,
  type,
  beds,
  baths,
  size,
  featured = false,
  saleType = "For Sale",
  status = "Ready",
}: PropertyCardProps) => {
  return (
    <div className={`property-card card-shadow rounded-xl overflow-hidden luxury-gradient border border-border/20 ${
      featured ? "ring-2 ring-accent/50" : ""
    }`}>
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="property-image w-full h-full object-cover"
        />
        {featured && (
          <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <Badge variant="secondary" className="bg-secondary/90 backdrop-blur-sm">
            {type}
          </Badge>
          <Badge variant={saleType === "For Sale" ? "default" : "outline"} className="bg-primary/90 backdrop-blur-sm">
            {saleType}
          </Badge>
          <Badge variant={status === "Offplan" ? "destructive" : "default"} className="bg-accent/90 backdrop-blur-sm">
            {status}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-luxury flex items-end p-6">
          <Link to={`/property/${id}`}>
            <Button variant="luxury" size="sm">
              View Details
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
        </div>

        {(beds || baths || size) && (
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
            {beds && (
              <div className="flex items-center space-x-1">
                <Bed className="w-4 h-4" />
                <span>{beds}</span>
              </div>
            )}
            {baths && (
              <div className="flex items-center space-x-1">
                <Bath className="w-4 h-4" />
                <span>{baths}</span>
              </div>
            )}
            {size && (
              <div className="flex items-center space-x-1">
                <Square className="w-4 h-4" />
                <span>{size}</span>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-accent">
            {price}
          </div>
          <Link to={`/property/${id}`}>
            <Button variant="outline-luxury" size="sm">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;