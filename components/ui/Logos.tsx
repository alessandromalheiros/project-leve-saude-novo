import React from 'react';

/* 
  IMPORTANTE: 
  Certifique-se que os arquivos de imagem existam na sua pasta 'public' 
  com os nomes exatos abaixo, ou altere o 'src' para corresponder aos seus arquivos.
*/

export const Logo: React.FC<{ className?: string, showSlogan?: boolean }> = ({ className = "h-12 w-auto" }) => {
  return (
    <img 
      src="/logo-leve.png" 
      alt="Leve Saúde" 
      className={`object-contain ${className}`}
    />
  );
};

export const BrokerLogo: React.FC<{ className?: string }> = ({ className = "h-12 w-auto" }) => {
  return (
    <img 
      src="/logo-vortex.png" 
      alt="Vortex Corretora" 
      className={`object-contain ${className}`}
    />
  );
};