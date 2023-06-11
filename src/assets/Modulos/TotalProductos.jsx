import React from 'react';
import PropTypes from 'prop-types';

const TotalProductos = ({ total }) => {
  return <h2>Total  productos: {total}</h2>;
};

TotalProductos.propTypes = {
  total: PropTypes.number.isRequired,
};

export default TotalProductos;