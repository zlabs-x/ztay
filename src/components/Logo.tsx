import React from 'react';
import { Hexagon } from 'lucide-react';

const Logo = ({ className = '', size = 'default' }) => {
  const sizeClasses = {
    default: 'w-10 h-10',
    small: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="logo-ring absolute inset-0" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Hexagon className="w-6 h-6 text-primary transform rotate-90" />
      </div>
    </div>
  );
};

export default Logo;