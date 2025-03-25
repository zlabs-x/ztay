import React from 'react';
import { ArrowRight, Home, LineChart, Sparkles } from 'lucide-react';

const Services = () => {
  return (
    <div className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-light mb-8 text-[#003366]">
            Nossos <span className="text-[#FF7F50]">Serviços</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Soluções completas para maximizar o potencial do seu imóvel no Airbnb.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="bg-white p-12 rounded-2xl border border-gray-100 hover:border-[#FF7F50] transition-all group">
              <div className="flex items-center mb-6">
                <Home className="h-8 w-8 text-[#FF7F50] group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-light text-[#003366] ml-4">
                  Gestão Completa
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nossa gestão inclui criação de anúncios, comunicação com hóspedes, 
                gestão de reservas, precificação dinâmica, limpeza e manutenção.
              </p>
            </div>

            <div className="bg-white p-12 rounded-2xl border border-gray-100 hover:border-[#FF7F50] transition-all group">
              <div className="flex items-center mb-6">
                <LineChart className="h-8 w-8 text-[#FF7F50] group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-light text-[#003366] ml-4">
                  Precificação Inteligente
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Utilizamos algoritmos avançados para ajustar os preços do seu imóvel 
                de acordo com a demanda do mercado e eventos locais.
              </p>
            </div>

            <div className="bg-white p-12 rounded-2xl border border-gray-100 hover:border-[#FF7F50] transition-all group">
              <div className="flex items-center mb-6">
                <Sparkles className="h-8 w-8 text-[#FF7F50] group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-light text-[#003366] ml-4">
                  Experiência Premium
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Serviços de limpeza profissional e manutenção preventiva para 
                garantir que seu imóvel esteja sempre impecável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#003366] mb-8">
            Pacotes Personalizados
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Oferecemos soluções adaptadas às necessidades específicas do seu imóvel.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center bg-[#003366] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#FF7F50] transition-all"
          >
            Solicite um Orçamento
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;