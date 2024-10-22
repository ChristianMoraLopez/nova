"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BedDouble, Bath, Car, Maximize } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Casa Moderna en Ciudad Jardín",
    price: "850,000,000",
    location: "Ciudad Jardín, Villavicencio",
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    area: 280,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    type: "Casa",
  },
  {
    id: 2,
    title: "Apartamento Ejecutivo",
    price: "420,000,000",
    location: "Centro, Villavicencio",
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    area: 120,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    type: "Apartamento",
  },
  {
    id: 3,
    title: "Casa Campestre",
    price: "1,200,000,000",
    location: "Remansos, Villavicencio",
    bedrooms: 5,
    bathrooms: 4,
    parking: 3,
    area: 450,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    type: "Casa",
  },
];

export function FeaturedProperties() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Propiedades Destacadas
          </h2>
          <p className="text-lg text-gray-600">
            Descubre nuestras propiedades más exclusivas en Villavicencio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Link href={`/properties/${property.id}`} key={property.id}>
              <Card className="group hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={property.image}
                      alt={property.title}
                      width={600}
                      height={400}
                      className="property-card-image rounded-t-lg"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary">
                      {property.type}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-4">
                      ${property.price}
                    </p>
                    <p className="text-gray-600 mb-4">{property.location}</p>
                    
                    <div className="grid grid-cols-4 gap-4 text-gray-600">
                      <div className="flex items-center">
                        <BedDouble className="h-5 w-5 mr-2" />
                        <span>{property.bedrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-5 w-5 mr-2" />
                        <span>{property.bathrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Car className="h-5 w-5 mr-2" />
                        <span>{property.parking}</span>
                      </div>
                      <div className="flex items-center">
                        <Maximize className="h-5 w-5 mr-2" />
                        <span>{property.area}m²</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}