import React, { useState } from 'react';

const TitleChanger = () => {
  const [title, setTitle] = useState('Título de la Página');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <input type="text" value={title} onChange={handleTitleChange} />
      <h1>{title}</h1>
    </div>
  );
};

export default TitleChanger;
