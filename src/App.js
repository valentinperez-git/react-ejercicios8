import React from 'react';
import CounterApp from './components/CounterApp';
import TitleChanger from './components/TitleChanger';
import ColorToggler from './components/ColorToggler';
import AlertComponent from './components/AlertComponent';
import CheckboxToggle from './components/CheckboxToggle';
import PasswordInput from './components/PasswordInput';
import TextChanger from './components/TextChanger';
import ThemeChanger from './components/ThemeChanger';
import './styles/styles.css'

const App = () => {
  return (
    <div>
      <CounterApp />
      <TitleChanger />
      <ColorToggler />
      <AlertComponent />
      <CheckboxToggle />
      <PasswordInput />
      <TextChanger />
      <ThemeChanger />
    </div>
  );
};

export default App;
