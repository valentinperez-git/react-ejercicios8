import React, { useEffect } from 'react';

const AlertComponent = () => {
  useEffect(() => {
    alert('Hola mundo');
  }, []); // El segundo argumento vacío asegura que useEffect se ejecute solo una vez al montar el componente

  return <div>Componente con Alerta</div>;
};

export default AlertComponent;
