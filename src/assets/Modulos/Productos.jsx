import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../Estyles/Productos.Module.css'




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
        setCargando(false); 
      } catch (error) {
        console.log(error);
        setCargando(false); 
      }
    };

    traerProductos();
  }, []);

  return (
    
    <div>
    <h1>Productossss</h1>

    {cargando ? (
      <div className="Cargando">Cargando...</div>
    ) : (
      <div className="ProductosContainer">
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
    <div className="card" >
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