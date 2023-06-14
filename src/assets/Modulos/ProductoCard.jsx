import React, { useEffect, useState } from 'react';

const ProductoCard = () => {
  const [data, setData] = useState([]);
  const [cargando, setCargando] = useState(true);

  const traerProductos = async () => {
    const url = 'https://fakestoreapi.com/carts';
    try {
      const resultado = await fetch(url);
      const respuesta = await resultado.json();
      setData(respuesta);
      setCargando(false);
    } catch (error) {
      console.log(error);
      setCargando(false);
    }
  };

  useEffect(() => {
    traerProductos();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: '20px' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Pedidos realizados</h1>
        {cargando ? (
          <p style={{ fontSize: '18px', color: 'gray', marginTop: '20px' }}>Cargando...</p>
        ) : (
          <div>
            {data.map((product, i) => (
              <div key={i} style={{ width: '300px', backgroundColor: '#f5f5f5', borderRadius: '5px', padding: '10px', margin: '10px auto' }}>
                <div style={{ marginTop: '10px' }}>
                  <p style={{ fontSize: '16px' }}>Product ID: {product.id}</p>
                  <p style={{ fontSize: '14px', color: 'gray', marginBottom: '5px' }}>Date: {product.date}</p>
                  {product.products.map((item) => (
                    <React.Fragment key={item.productId}>
                      <p style={{ fontSize: '14px', color: 'gray', marginBottom: '5px' }}>Product Detail ID: {item.productId}</p>
                      <p style={{ fontSize: '14px', color: 'gray', marginBottom: '5px' }}>Quantity: {item.quantity}</p>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductoCard;