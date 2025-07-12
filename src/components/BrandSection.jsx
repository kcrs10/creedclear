import React, { useState } from 'react';

// Este componente recibe el nombre de la marca, su imagen y su lista de productos
const BrandSection = ({ brandName, brandImage, products }) => {
  // Cada sección manejará su propia ventana emergente
  const [pricesVisible, setPricesVisible] = useState(false);

  return (
    <>
      <div className="product-section">
        <h2>{brandName}</h2>
        <div className="single-image-container" onClick={() => setPricesVisible(true)}>
          <img src={brandImage} alt={`Productos de ${brandName}`} className="all-products-image" />
          <div className="image-overlay">
            <span>Haz Clic para Ver Precios</span>
          </div>
        </div>
      </div>

      {/* Ventana Modal de Precios para ESTA marca */}
      {pricesVisible && (
        <div className="modal-backdrop" onClick={() => setPricesVisible(false)}>
          <div className="modal-content price-list-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setPricesVisible(false)}>&times;</button>
            <h2>Lista de Precios - {brandName}</h2>
            <div className="price-list">
              {/* Muestra solo los productos de esta marca */}
              {products.map(product => (
                <div key={product.id} className="price-list-item">
                  <span className="price-list-name">{product.name}</span>
                  <span className="price-list-price">${product.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BrandSection;