import React, { useState } from 'react';

const TextChanger = () => {
  const [text, setText] = useState('Texto Original');

  const handleChangeText = () => {
    setText('Texto Modificado');
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleChangeText}>Cambiar Texto</button>
    </div>
  );
};

export default TextChanger;
