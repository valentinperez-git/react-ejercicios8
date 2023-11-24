import React, { useState } from 'react';

const ColorToggler = () => {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  const backgroundColor = isRed ? 'red' : 'blue';

  return (
    <div style={{ backgroundColor }}>
      <button onClick={toggleColor}>Cambiar Color</button>
    </div>
  );
};

export default ColorToggler;
