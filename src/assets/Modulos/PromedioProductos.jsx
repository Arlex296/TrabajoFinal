import React, { useEffect, useState } from 'react';
import { Flex, Spinner } from "@chakra-ui/react";

function PromedioProductos() {
  const [productos, setProductos] = useState([]);
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(0);
  const [precioPromedio, setPrecioPromedio] = useState(0);
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

  useEffect(() => {
    if (data && productos.length > 0) {
      let total = 0;
      data.forEach((cart) => {
        cart.products.forEach((product) => {
          const foundProduct = productos.find(
            (p) => p.id === product.productId
          );
          if (foundProduct) {
            const subtotal = foundProduct.price * product.quantity;
            total += subtotal;
          }
        });
      });
      setTotal(total);

      const cantidadProductos = productos.length;
      const precioPromedio = total / cantidadProductos;
      setPrecioPromedio(precioPromedio);
    }
  }, [data, productos]);

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
          <p style={{ fontSize: '20px' }}>Promedio Productos {precioPromedio.toFixed(2)}</p>
        </div>
      )}
    </Flex>
  );
}

export default PromedioProductos;