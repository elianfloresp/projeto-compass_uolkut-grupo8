import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import CustomCheckbox from './components/pages/UI/StyledCB';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <CustomCheckbox checked={isChecked} onChange={handleChange} />
      <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
    </div>
  );
}

export default App;


