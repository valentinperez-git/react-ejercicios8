import React, { useState } from 'react';

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <input type={showPassword ? 'text' : 'password'} value={password} />
      <button onClick={handleTogglePassword}>Mostrar/Esconder Contraseña</button>
    </div>
  );
};

export default PasswordInput;
