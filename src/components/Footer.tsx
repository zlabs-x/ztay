import React from 'react';
import { Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-light tracking-wider text-[#003366] mb-4">ZTAY</h3>
            <p className="text-sm text-gray-600">Especialistas em gestão de imóveis no Airbnb</p>
          </div>
          
          <div>
            <h3 className="text-lg font-light mb-4 text-[#003366]">Contato</h3>
            <div className="space-y-3">
              <a href="mailto:contato@ztay.com.br" className="flex items-center text-gray-600 hover:text-[#FF7F50] transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                contato@ztay.com.br
              </a>
              <a href="tel:+5511999999999" className="flex items-center text-gray-600 hover:text-[#FF7F50] transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                (55) 99649-7720
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-light mb-4 text-[#003366]">Social</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/ztay" target="_blank" rel="noopener noreferrer" 
                className="p-2 rounded-full border border-gray-200 hover:border-[#FF7F50] hover:text-[#FF7F50] transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/ztay" target="_blank" rel="noopener noreferrer" 
                className="p-2 rounded-full border border-gray-200 hover:border-[#FF7F50] hover:text-[#FF7F50] transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/ztay" target="_blank" rel="noopener noreferrer" 
                className="p-2 rounded-full border border-gray-200 hover:border-[#FF7F50] hover:text-[#FF7F50] transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2025 Ztay. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacidade" className="hover:text-[#FF7F50] transition-colors">Privacidade</a>
              <a href="/termos" className="hover:text-[#FF7F50] transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;