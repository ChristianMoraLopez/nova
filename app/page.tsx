import Image from "next/image";
import { HeroSearch } from "@/components/hero-search";
import { FeaturedProperties } from "@/components/featured-properties";
import { CompanyIntro } from "@/components/company-intro";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 w-full">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Encuentra tu Hogar Ideal
            </h1>
            <p className="text-xl md:text-2xl">
              Las mejores propiedades en Villavicencio
            </p>
          </div>
          
          <HeroSearch />
        </div>
      </section>

      <FeaturedProperties />
      
      <CompanyIntro />
    </>
  );
}