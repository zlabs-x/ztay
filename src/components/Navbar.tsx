import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCalculator = () => {
    const calculator = document.getElementById('calculator');
    if (calculator) {
      calculator.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center space-x-3 group">
            <Logo className={isScrolled ? 'text-primary' : 'text-white'} />
            <span className={`text-2xl font-light tracking-wider ${
              isScrolled ? 'text-primary-dark' : 'text-white'
            } group-hover:text-metallic transition-colors duration-300`}>ZTAY</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className={`text-sm font-medium ${
              isScrolled ? 'text-gray-600 hover:text-primary' : 'text-white/90 hover:text-white'
            } transition-colors duration-300`}>Home</Link>
            <Link to="/sobre" className={`text-sm font-medium ${
              isScrolled ? 'text-gray-600 hover:text-primary' : 'text-white/90 hover:text-white'
            } transition-colors duration-300`}>Sobre</Link>
            <Link to="/servicos" className={`text-sm font-medium ${
              isScrolled ? 'text-gray-600 hover:text-primary' : 'text-white/90 hover:text-white'
            } transition-colors duration-300`}>Serviços</Link>
            <Link to="/contato" className={`text-sm font-medium ${
              isScrolled ? 'text-gray-600 hover:text-primary' : 'text-white/90 hover:text-white'
            } transition-colors duration-300`}>Contato</Link>
            <button
              onClick={scrollToCalculator}
              className={`button-hover text-sm font-medium px-6 py-3 rounded-xl ${
                isScrolled 
                  ? 'bg-primary text-white hover:bg-primary-dark' 
                  : 'bg-white text-primary hover:bg-surface-light'
              } transition-all duration-300 shadow-md hover:shadow-lg`}
            >
              Quero Maximizar Meus Ganhos
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-primary' : 'text-white'
            } hover:bg-white/10 transition-colors duration-300`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-md border-b border-gray-100">
          <div className="px-4 py-6 space-y-6">
            <Link to="/" className="block text-primary hover:text-metallic transition-colors duration-300">Home</Link>
            <Link to="/sobre" className="block text-primary hover:text-metallic transition-colors duration-300">Sobre</Link>
            <Link to="/servicos" className="block text-primary hover:text-metallic transition-colors duration-300">Serviços</Link>
            <Link to="/contato" className="block text-primary hover:text-metallic transition-colors duration-300">Contato</Link>
            <button
              onClick={scrollToCalculator}
              className="block w-full bg-primary text-white px-6 py-3 rounded-xl text-center hover:bg-primary-dark transition-all duration-300 shadow-md"
            >
              Quero Maximizar Meus Ganhos
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;