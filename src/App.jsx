import { useState } from 'react';
import './App.css';
import BrandSection from './components/BrandSection.jsx';

// --- IMÁGENES ---
import logo from './assets/logo.png';
// Imágenes grandes para las secciones
import marca1Image from './assets/marca1-display.png';
import marca2Image from './assets/marca2-display.png';
import marca3Image from './assets/marca3-display.png';
import marca4Image from './assets/marca4-display.png';
// Logos pequeños para la franja final
import logoMarca1 from './assets/brands/marca1.png';
import logoMarca2 from './assets/brands/marca2.png';
import logoMarca3 from './assets/brands/marca3.png';


// --- DATOS DE PRODUCTOS POR MARCA ---
const brand1Products = [
  { id: 'b1-1', name: 'ROVE', price: '22.000' },

];
const brand2Products = [
  { id: 'b2-1', name: 'JEETER', price: '20.000' },
];
const brand3Products = [
  { id: 'b3-1', name: 'BIG CHIEF', price: '22.000' },
];
const brand4Products = [
  { id: 'b4-1', name: 'MUHA MEDS', price: '20.000' },
];


function App() {
  const [infoVisible, setInfoVisible] = useState(false);

  return (
    <>
      <div className="main-content">
        <div className="content-container">
          <img src={logo} alt="Logo Golden Drops" className="main-logo" />
          <h1 className="title-glow">CreedClear</h1>
          <p>En Creed Clear, desde Vicuña, ofrecemos clears de cannabis 100% premium, seleccionados de las mejores marcas para garantizar pureza y potencia. Entregamos rápido y seguro en toda la Cuarta Región para que disfrutes sin complicaciones.</p>
          <div className="button-group">
            <a
              href="https://www.instagram.com/creedclear" 
              className="instagram-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visita nuestro Instagram
            </a>
            <button className="info-button" onClick={() => setInfoVisible(true)}>
              Saber más
            </button>
          </div>
        </div>

        {/* --- Secciones de Productos por Marca --- */}
        <BrandSection brandName="ROVE" brandImage={marca1Image} products={brand1Products} />
        <BrandSection brandName="JEETER" brandImage={marca2Image} products={brand2Products} />
        <BrandSection brandName="BIG CHIEF" brandImage={marca3Image} products={brand3Products} />
        <BrandSection brandName="MUHA MEDS" brandImage={marca4Image} products={brand4Products} />

        {/* --- SECCIÓN DE MARCAS CON LOGOS (AÑADIDA DE NUEVO) --- */}
        <div className="brands-section">
          <h2>Trabajamos con</h2>
          <div className="brands-container">
            <img src={logoMarca1} alt="Logo Marca 1" className="brand-logo" />
            <img src={logoMarca2} alt="Logo Marca 2" className="brand-logo" />
            <img src={logoMarca3} alt="Logo Marca 3" className="brand-logo" />
            {/* Añade más logos si es necesario */}
          </div>
        </div>

      </div>

      {/* --- Ventana Modal de "Saber más" --- */}
      {infoVisible && (
        <div className="modal-backdrop" onClick={() => setInfoVisible(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setInfoVisible(false)}>&times;</button>
            <h2>Proceso y Calidad</h2>
            <p>
              Nuestros extractos son elaborados mediante un proceso de destilación de vanguardia que garantiza la máxima pureza y potencia. Seleccionamos solo las mejores materias primas de origen orgánico, asegurando un producto final limpio, claro y consistente.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;