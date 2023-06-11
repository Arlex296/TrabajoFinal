import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Estylos from '../Estyles/Productos.Module.css';
import TotalProductos from './TotalProductos';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const traerProductos = async () => {
      const url = 'https://fakestoreapi.com/products';
      try {
        const resultado = await fetch(url);
        const respuesta = await resultado.json();
        setProductos(respuesta);
        setCargando(false); // Marcamos la carga como completada
      } catch (error) {
        console.log(error);
        setCargando(false); // Marcamos la carga como completada incluso en caso de error
      }
    };

    traerProductos();
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      
      <TotalProductos total={productos.length} />
     
      {cargando ? (
        <div>Cargando...</div>
      ) : (
        <div
          className="card-body"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '10px',
            border: '5px',
            alignItems: 'center',
          }}
        >
          {productos.map((prod) => (
            <ProductoCard key={prod.id} producto={prod} />
          ))}
        </div>
      )}
    </div>
  );
};

const ProductoCard = ({ producto }) => {
  const { id, image, title, description, price, category } = producto;

  return (
    <div className="card" style={{ width: '18rem' }}>
      <p className="card-text">{id}</p>
      <img src={image} className="Imagen" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-subtitle mb-2 text-muted">{price}</p>
        <p className="card-subtitle mb-2 text-muted">{category}</p>
        
      </div>
    </div>
  );
};

ProductoCard.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Productos;