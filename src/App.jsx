

import './App.css'
import Productos from './assets/Modulos/Productos'
//import ProductoCard from './ProductoCard'
//import TotalProductos from './assets/Modulos/TotalProductos'

import { Flex, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';

//import PedidoRealizados from "./PedidosRealizados";
//import TotalProductos from "./TotalProductos";
//import IngresosTotales from "./IngresosTotales";
//import PromedioProductos from "./PromedioProductos";
//import ProductosVendidos from "./ProductosVendidos";
//import NroPedidosRealizados from "./NroPedidosRealizado";

import React from 'react';
import TotalProductos from './assets/Modulos/TotalProductos';

function MyComponent() {
  return (
    <Flex
      height="100vh"
      margin="0"
      display="flex"
      place-items="center"
      min-width="320px"
      min-height="100vh"
      flex-wrap="wrap"
      flex-direction="column"
    >
      <Tabs>
        <TabList style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '1rem' }}>
          <Tab style={{ background: '#20c99a', fontStyle: 'italic', padding: '0.5rem 1rem' }}>Productos</Tab>
          <Tab style={{ background: '#20c99a', fontStyle: 'italic', padding: '0.5rem 1rem' }}>Pedidos realizados</Tab>
          <Tab style={{ background: '#20c99a', fontStyle: 'italic', padding: '0.5rem 1rem' }}>Total de productos</Tab>
          <Tab style={{ background: '#20c99a', fontStyle: 'italic', padding: '0.5rem 1rem' }}>Pedidos realizados</Tab>
          <Tab style={{ background: '#20c99a', fontStyle: 'italic', padding: '0.5rem 1rem' }}>Ingresos totales</Tab>
          <Tab style={{ background: '#20c99a', fontStyle: 'italic', padding: '0.5rem 1rem' }}>Promedio de productos</Tab>
          <Tab style={{ background: '#20c99a', fontStyle: 'italic', padding: '0.5rem 1rem' }}>Productos más vendidos</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Productos /> 
          </TabPanel>
          <TabPanel>
           <p>ddddd</p>
          </TabPanel>
          <TabPanel>
          <TotalProductos/>
          </TabPanel>
          <TabPanel>
          <p>rgrrr</p>
          </TabPanel>
          <TabPanel>
          <p>rgrrr</p> 
          </TabPanel>
          <TabPanel>
          <p>rgrrr</p>
          </TabPanel>
          <TabPanel>
          <p>rgrrr</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default MyComponent;