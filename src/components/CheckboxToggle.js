import React, { useState } from 'react';

const CheckboxToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      <p>{isChecked ? 'Checkbox marcado' : 'Checkbox desmarcado'}</p>
    </div>
  );
};

export default CheckboxToggle;
