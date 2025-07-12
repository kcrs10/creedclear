import React from 'react';

const HoneyAnimation = () => {
  // Creamos un array de 15 elementos para generar 15 burbujas
  const bubbles = Array.from({ length: 15 });

  return (
    <div className="honey-bubbles-background">
      {bubbles.map((_, index) => (
        <div key={index} className="bubble"></div>
      ))}
    </div>
  );
};

export default HoneyAnimation;