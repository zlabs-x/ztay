import React, { useState } from 'react';
import { ArrowRight, Building2, TrendingUp, Shield, Star, Calculator, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const benefits = [
  {
    icon: <Building2 className="h-12 w-12 text-primary mx-auto" />,
    title: 'Gestão Inteligente',
    description: 'Tecnologia avançada para otimização de resultados'
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-primary mx-auto" />,
    title: 'ROI Maximizado',
    description: 'Estratégias data-driven para maior rentabilidade'
  },
  {
    icon: <Shield className="h-12 w-12 text-primary mx-auto" />,
    title: 'Segurança Total',
    description: 'Proteção completa para seu patrimônio'
  },
  {
    icon: <Star className="h-12 w-12 text-primary mx-auto" />,
    title: 'Experiência VIP',
    description: 'Atendimento premium para seus hóspedes'
  }
];

const testimonials = [
  {
    name: "João Silva",
    location: "São Paulo, SP",
    text: "Meu faturamento triplicou em 6 meses com a Ztay. A gestão profissional fez toda diferença!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    name: "Maria Santos",
    location: "Rio de Janeiro, RJ",
    text: "Deixei de me preocupar com a gestão do meu imóvel e ainda aumentei minha renda em 250%.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
];

const Home = () => {
  const [formData, setFormData] = useState({
    location: '',
    rooms: '',
    platform: 'no',
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[90vh] md:min-h-screen flex items-center pt-16 bg-white relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[70vh] bg-gradient-to-b from-metallic via-primary/50 to-white" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-12 md:mt-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass-card inline-flex items-center px-4 md:px-6 py-2 rounded-full mb-6 md:mb-8 text-sm md:text-base">
              <Star className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2" />
              <span className="text-primary-dark font-medium">Já geramos mais de R$ 1 Milhão em receita</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8 metallic-gradient">
              Ganhe Mais com Seu Imóvel sem Nenhuma Preocupação
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-gray-600 leading-relaxed px-4">
              Transformamos seu imóvel em um ativo altamente lucrativo com tecnologia e gestão especializada.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
              <button
                onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
                className="w-full md:w-auto button-hover inline-flex items-center justify-center bg-gradient-metallic text-white px-6 md:px-10 py-4 md:py-5 rounded-2xl text-lg font-medium shadow-glow"
              >
                Descubra Seu Potencial
                <Calculator className="ml-2 h-5 w-5" />
              </button>
              
              <a
                href="#cases"
                className="w-full md:w-auto button-hover inline-flex items-center justify-center bg-white text-primary-dark px-6 md:px-10 py-4 md:py-5 rounded-2xl text-lg font-medium border-2 border-primary/10 hover:border-primary/30"
              >
                Ver Histórias de Sucesso
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-6 md:p-12 rounded-3xl md:rounded-4xl">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 metallic-gradient">
                Descubra Quanto Seu Imóvel Pode Render com a Gestão Ztay
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Receba uma análise gratuita e personalizada do potencial do seu imóvel
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Localização do Imóvel
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Bairro, Cidade"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Número de Quartos
                  </label>
                  <select
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Selecione</option>
                    <option value="1">1 Quarto</option>
                    <option value="2">2 Quartos</option>
                    <option value="3">3 Quartos</option>
                    <option value="4+">4+ Quartos</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Já está listado em alguma plataforma?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="platform"
                      value="yes"
                      checked={formData.platform === 'yes'}
                      onChange={handleChange}
                      className="text-primary"
                    />
                    <span className="ml-2">Sim</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="platform"
                      value="no"
                      checked={formData.platform === 'no'}
                      onChange={handleChange}
                      className="text-primary"
                    />
                    <span className="ml-2">Não</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <button
                type="submit"
                className="w-full button-hover bg-gradient-metallic text-white px-6 md:px-8 py-4 rounded-xl text-lg font-medium shadow-glow"
              >
                Quero Minha Análise Grátis
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>

              <p className="text-sm text-gray-500 text-center">
                Vagas limitadas para novos imóveis neste mês!
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="cases" className="py-16 md:py-24 bg-gradient-to-b from-white to-metallic/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 metallic-gradient px-4">
              +300% de ROI? Veja Como Nossos Clientes Aumentaram seus Lucros!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="hover-card card-shine glass-card p-6 md:p-8 rounded-2xl md:rounded-3xl">
                <div className="flex items-center mb-4 md:mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg md:text-xl font-bold text-primary-dark">{testimonial.name}</h3>
                    <p className="text-sm md:text-base text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 metallic-gradient">
              Por Que Escolher a Ztay?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Já hospedamos inúmeras pessoas e garantimos avaliações 5 estrelas para nossos clientes
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} 
                className="hover-card card-shine p-6 md:p-8 rounded-2xl md:rounded-3xl glass-card text-center"
              >
                <div className="flex justify-center mb-4 md:mb-6 animate-float">
                  {benefit.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary-dark mb-3 md:mb-4">
                  {benefit.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-metallic/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-6 md:p-12 rounded-3xl md:rounded-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 metallic-gradient px-4">
              Seu Imóvel Pode Render Muito Mais – Descubra Como Agora!
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Garanta sua vaga antes que fechemos novas captações neste mês.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
                className="w-full md:w-auto button-hover inline-flex items-center justify-center bg-gradient-metallic text-white px-6 md:px-10 py-4 md:py-5 rounded-2xl text-lg font-medium shadow-glow"
              >
                Solicitar Avaliação Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 button-hover bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-[#128C7E]"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.4 3.6C18.2 1.4 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.4-6.2-3.6-8.4zM12 22c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.8 1 1-3.8-.2-.4C2.5 15.6 2 13.8 2 12 2 6.5 6.5 2 12 2c2.6 0 5 1 6.8 2.8C20.6 6.6 21.6 9 21.6 12c0 5.5-4.5 10-9.6 10zm5.2-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6 0-.3-.2-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.7-1.6-1-2.2-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.2-.2-.5-.3z"/>
        </svg>
      </a>
    </div>
  );
};

export default Home;