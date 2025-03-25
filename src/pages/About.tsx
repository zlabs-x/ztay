import React from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-light mb-8 text-[#003366]">
            Sobre a <span className="text-[#FF7F50]">Ztay</span>
          </h1>
          <div className="prose prose-lg max-w-3xl text-gray-600">
            <p className="text-xl leading-relaxed">
              A Ztay é uma empresa dedicada à gestão de imóveis no Airbnb. 
              Nosso foco é maximizar a rentabilidade dos seus imóveis com uma 
              abordagem estratégica e sem complicação.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#FF7F50] transition-all h-full">
                <h3 className="text-xl font-light text-[#003366] mb-4">
                  Atendimento Personalizado
                </h3>
                <p className="text-gray-600">
                  Cada imóvel é único, e nosso atendimento também. Desenvolvemos 
                  estratégias personalizadas para maximizar seus resultados.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#FF7F50] transition-all h-full">
                <h3 className="text-xl font-light text-[#003366] mb-4">
                  Gestão 360°
                </h3>
                <p className="text-gray-600">
                  Do anúncio à limpeza, cuidamos de todos os aspectos da 
                  gestão do seu imóvel no Airbnb.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#FF7F50] transition-all h-full">
                <h3 className="text-xl font-light text-[#003366] mb-4">
                  Precificação Dinâmica
                </h3>
                <p className="text-gray-600">
                  Utilizamos dados de mercado para ajustar os preços e 
                  garantir a melhor rentabilidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#003366]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Vamos conversar?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Descubra como podemos ajudar a maximizar o potencial do seu imóvel.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center bg-[#FF7F50] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-[#003366] transition-all"
          >
            Entre em Contato
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;