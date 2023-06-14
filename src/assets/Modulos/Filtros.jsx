import '../Estyles/Filtros.Module.css'

import React, { useState, useEffect } from 'react';

const Filtros = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });

    fetch('https://fakestoreapi.com/carts')
      .then((response) => response.json())
      .then((data) => setCarts(data));
  }, []);

  useEffect(() => {
    filterProducts();
  }, [sortBy]);

  const filterProducts = () => {
    let sortedProducts = [...products];
    if (sortBy === 'asc') {
      sortedProducts = sortedProducts.sort((a, b) => getOrderedProductCount(a.id) - getOrderedProductCount(b.id));
    } else if (sortBy === 'desc') {
      sortedProducts = sortedProducts.sort((a, b) => getOrderedProductCount(b.id) - getOrderedProductCount(a.id));
    }
    setFilteredProducts(sortedProducts);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const getOrderedProductCount = (productId) => {
    let cantidadTotal = 0;

    carts.forEach((cart) => {
      cart.products.forEach((item) => {
        if (item.productId === productId) {
          cantidadTotal += item.quantity;
        }
      });
    });

    return cantidadTotal;
  };

  return (
    <div className="container">
      <div>
        <button onClick={filterProducts}>Actualizar</button>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="">Ordenar</option>
          <option value="asc">Menos vendidos</option>
          <option value="desc">Mayor vendidos</option>
        </select>
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.title} - Cantidad Pedidos: {getOrderedProductCount(product.id)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filtros;