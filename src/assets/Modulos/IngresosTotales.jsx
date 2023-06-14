import React, { useEffect, useState } from 'react';
import { Flex, Spinner } from "@chakra-ui/react";


function IngresosTotales() {
  const [productos, setProductos] = useState([]);
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(0);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const traerProductos = async () => {
      const url = 'https://fakestoreapi.com/products';
      try {
        const resultado = await fetch(url);
        const respuesta = await resultado.json();
        setProductos(respuesta);
      } catch (error) {
        console.log(error);
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
      setCargando(false);
    } catch (error) {
      console.log(error);
      setCargando(false);
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
    }
  }, [data, productos]);




  return (
    <Flex
      display="flex"
      justifyContent="center"
      color="red"

    >
      {cargando ? (

        <Spinner size="xl" color="red" />
      ) : (
        <div style={{ marginTop: '50px' }}>
          <p style={{ fontSize: '20px' }}> El total de ingresos es:  {total.toFixed(2)}</p>
        </div>
      )}
    </Flex>
  );
}

export default IngresosTotales;