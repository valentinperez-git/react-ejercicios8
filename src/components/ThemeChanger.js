import React, { useState } from 'react';

const ThemeChanger = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeStyles = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    color: isDarkMode ? 'white' : 'black',
  };

  return (
    <div style={themeStyles}>
      <button onClick={toggleTheme}>Cambiar Tema</button>
    </div>
  );
};

export default ThemeChanger;
