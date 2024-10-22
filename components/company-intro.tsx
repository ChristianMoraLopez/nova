import { Building2, Users2, Trophy, ThumbsUp } from "lucide-react";

export function CompanyIntro() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            NOVA Real Estate Villavicencio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos líderes en el mercado inmobiliario de Villavicencio, 
            ofreciendo las mejores propiedades y un servicio excepcional a 
            nuestros clientes desde hace más de 10 años.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">+1000</h3>
            <p className="text-gray-600">Propiedades Vendidas</p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">+5000</h3>
            <p className="text-gray-600">Clientes Satisfechos</p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">10+</h3>
            <p className="text-gray-600">Años de Experiencia</p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ThumbsUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">98%</h3>
            <p className="text-gray-600">Tasa de Recomendación</p>
          </div>
        </div>
      </div>
    </section>
  );
}