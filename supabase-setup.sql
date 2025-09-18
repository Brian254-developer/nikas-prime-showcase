-- Create properties table
CREATE TABLE properties (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  price DECIMAL(15,2) NOT NULL,
  location TEXT NOT NULL,
  bedrooms INTEGER,
  bathrooms INTEGER,
  sqft INTEGER,
  property_type TEXT CHECK (property_type IN ('mansion', 'apartment', 'bungalow', 'maisonette', 'land')) NOT NULL,
  status TEXT CHECK (status IN ('for_sale', 'to_let')) NOT NULL,
  project_status TEXT CHECK (project_status IN ('ready', 'offplan')) NOT NULL,
  image_url TEXT,
  features TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contacts table
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  property_id UUID REFERENCES properties(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample properties
INSERT INTO properties (title, description, price, location, bedrooms, bathrooms, sqft, property_type, status, project_status, image_url, features) VALUES
('Luxury Mansion in Karen', 'Stunning 5-bedroom mansion with modern amenities', 25000000, 'Karen, Nairobi', 5, 4, 4500, 'mansion', 'for_sale', 'ready', '/src/assets/hero-luxury-mansion.jpg', ARRAY['Swimming Pool', 'Garden', 'Garage', 'Security']),
('Executive Apartment', 'Modern 3-bedroom apartment with city views', 8500000, 'Kilimani, Nairobi', 3, 2, 1800, 'apartment', 'for_sale', 'offplan', '/src/assets/luxury-apartment.jpg', ARRAY['Balcony', 'Parking', 'Gym', 'Security']),
('Family Bungalow', 'Spacious 4-bedroom bungalow in quiet neighborhood', 12000000, 'Lavington, Nairobi', 4, 3, 2800, 'bungalow', 'for_sale', 'ready', '/src/assets/luxury-bungalow.jpg', ARRAY['Garden', 'Garage', 'Study Room']),
('Modern Maisonette', 'Contemporary 3-bedroom maisonette for rent', 120000, 'Westlands, Nairobi', 3, 2, 2000, 'maisonette', 'to_let', 'ready', '/src/assets/luxury-maisonette.jpg', ARRAY['Parking', 'Security', 'Modern Kitchen']);

-- Enable Row Level Security
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Anyone can view properties" ON properties FOR SELECT USING (true);
CREATE POLICY "Anyone can insert contacts" ON contacts FOR INSERT WITH CHECK (true);

-- Update function for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_properties_updated_at BEFORE UPDATE ON properties
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();