

import './App.css'
import Productos from './assets/Modulos/Productos'


import { Flex, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';



import React from 'react';
import TotalProductos from './assets/Modulos/TotalProductos';

import NroPedidosRealizados from './assets/Modulos/NroPedidosRealizados';
import IngresosTotales from './assets/Modulos/IngresosTotales';
import PromedioProductos from './assets/Modulos/PromedioProductos';
import ProductosVendidos from './assets/Modulos/ProductosVendidos';
import Filtros from './assets/Modulos/Filtros';
import ProductoCard from './assets/Modulos/ProductoCard';


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
       
          <Tab style={{ background: '#20c99a', fontStyle: 'italic', padding: '0.5rem 1rem' , fontSize: '12px'}}>Productos</Tab>
          <Tab style={{ background: '#20c99a', fontStyle: 'italic', padding: '0.5rem 1rem' , fontSize: '12px'}}>Pedidos</Tab>
          <Tab style={{ background: '#20c99a', fontStyle: 'italic', padding: '0.5rem 1rem' , fontSize: '12px'}}>Total productos</Tab>
          <Tab style={{ background: '#20c99a', fontStyle: 'italic', padding: '0.5rem 1rem' , fontSize: '12px'}}>Total pedidos </Tab>
          <Tab style={{ background: '#20c99a', fontStyle: 'italic', padding: '0.5rem 1rem' , fontSize: '12px'}}>Ingresos totales</Tab>
          <Tab style={{ background: '#20c99a', fontStyle: 'italic', padding: '0.5rem 1rem' , fontSize: '12px'}}>Promedio productos</Tab>
          <Tab style={{ background: '#20c99a', fontStyle: 'italic', padding: '0.5rem 1rem' , fontSize: '12px'}}>Productos más vendidos</Tab>
          <Tab style={{ background: '#20c99a', fontStyle: 'italic', padding: '0.5rem 1rem' , fontSize: '12px'}}>Filtros</Tab>
        </TabList>

        <TabPanels>
       
          <TabPanel>
            <Productos /> 
          </TabPanel>
          <TabPanel>
          <ProductoCard/>
          </TabPanel>
          <TabPanel>
          <TotalProductos/>
          </TabPanel>
          <TabPanel>
          <NroPedidosRealizados/>
          </TabPanel>
          <TabPanel>
          <IngresosTotales/> 
          </TabPanel>
          <TabPanel>
          <PromedioProductos/>
          </TabPanel>
          <TabPanel>
          <ProductosVendidos/>
          </TabPanel>
          <TabPanel>
          <Filtros/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default MyComponent;