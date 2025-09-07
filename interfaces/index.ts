export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  isSaved: boolean;
  description?: string;
  features?: string[];
  agent?: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
  location?: {
    lat: number;
    lng: number;
  };
  type?: 'apartment' | 'house' | 'condo' | 'townhouse';
  status?: 'for_sale' | 'for_rent' | 'sold' | 'pending';
  yearBuilt?: number;
  lastUpdated?: string;
}
