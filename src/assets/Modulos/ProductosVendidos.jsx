import React, { useEffect, useState } from 'react';
import { Flex, Spinner } from "@chakra-ui/react";

function ProductosVendidos() {
  const [productos, setProductos] = useState([]);
  const [data, setData] = useState(null);
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

  const traerCarts = async () => {
    const url = 'https://fakestoreapi.com/carts';
    try {
      const resultado = await fetch(url);
      const respuesta = await resultado.json();
      setData(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    traerCarts();
  }, []);

  const obtenerProductoMayorCantidad = (data) => {
    let mayorCantidad = 0;
    let productoMayorCantidad = null;

    if (data && Array.isArray(data)) {
      data.forEach((cart) => {
        if (cart && cart.products && Array.isArray(cart.products) && cart.products.length) {
          cart.products.forEach((product) => {
            if (product && product.quantity > mayorCantidad) {
              mayorCantidad = product.quantity;
              const foundProduct = productos.find((p) => p.id === product.productId);
              if (foundProduct) {
                productoMayorCantidad = foundProduct;
              }
            }
          });
        }
      });
    }

    return productoMayorCantidad;
  };

  const productoMayorCantidad = obtenerProductoMayorCantidad(data);

  console.log('Producto con mayor cantidad:', productoMayorCantidad);

  return (
    <Flex
      display="flex"
      justifyContent="center"
      color="red"
      marginBottom="50px"
    >
      {cargando ? (
        
        <Spinner size="xl" color="red" />
      ) : (
        <div style={{ marginTop: '50px' }}>
          <p style={{ fontSize: '20px' }}>Producto mas vendido: </p>
          <p>{productoMayorCantidad ? productoMayorCantidad.title : ''}</p>
        </div>
      )}
    </Flex>
  );
}

export default ProductosVendidos;