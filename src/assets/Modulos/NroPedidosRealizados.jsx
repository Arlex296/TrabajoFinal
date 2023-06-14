import React, { useEffect, useState } from 'react';

import { Flex, Spinner } from "@chakra-ui/react";

function NroPedidosRealizados() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const traerProductos = async () => {
    const url = 'https://fakestoreapi.com/carts';
    try {
      const resultado = await fetch(url);
      const respuesta = await resultado.json();
      setData(respuesta);
      setLoading(false); 
    } catch (error) {
      console.log(error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    traerProductos();
  }, []);

  const contarPedidos = data ? data.length : 0;

  return (
    <Flex display="flex" justifyContent="center" color="red">
      {loading ? (
    
        <Spinner size="xl" color="red" />
      ) : (
        <div>
          <p style={{ fontSize: '20px' }}>Total pedidos: {contarPedidos}</p>
        </div>
      )}
    </Flex>
  );
}

export default NroPedidosRealizados;