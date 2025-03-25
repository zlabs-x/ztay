import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex flex-col pt-16">
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-light mb-8 text-[#003366]">
                Fale <span className="text-[#FF7F50]">Conosco</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12">
                Estamos aqui para ajudar você a maximizar o potencial do seu imóvel.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center group">
                  <div className="p-3 rounded-full border border-gray-200 group-hover:border-[#FF7F50] transition-all">
                    <Mail className="h-6 w-6 text-[#FF7F50]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-light text-[#003366]">Email</h3>
                    <a href="mailto:contato@ztay.com.br" 
                      className="text-gray-600 hover:text-[#FF7F50] transition-colors">
                      contato@ztay.com.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="p-3 rounded-full border border-gray-200 group-hover:border-[#FF7F50] transition-all">
                    <Phone className="h-6 w-6 text-[#FF7F50]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-light text-[#003366]">Telefone</h3>
                    <a href="tel:+5511999999999" 
                      className="text-gray-600 hover:text-[#FF7F50] transition-colors">
                      (55) 99649-7720
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-[#003366] mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF7F50] focus:ring-1 focus:ring-[#FF7F50] transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-light text-[#003366] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF7F50] focus:ring-1 focus:ring-[#FF7F50] transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light text-[#003366] mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF7F50] focus:ring-1 focus:ring-[#FF7F50] transition-all"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-[#003366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#FF7F50] transition-all"
                >
                  Enviar Mensagem
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;