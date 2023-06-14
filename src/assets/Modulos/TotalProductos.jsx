import React, { useState, useEffect } from 'react';
import { Flex, Spinner } from "@chakra-ui/react";

function NroPedidosRealizados() {
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

  const totalProductos = productos.length;
  console.log(totalProductos)

  return (
    <Flex
      display="flex"
      justifyContent="center"
      color="red"
    >
      {cargando ? (
        
        <Spinner size="xl" color="red" />
      ) : (
        <div>
          <p style={{ fontSize: '20px' }}>Total de productos: {totalProductos}</p>
        </div>
      )}
    </Flex>
  );
}

export default NroPedidosRealizados;