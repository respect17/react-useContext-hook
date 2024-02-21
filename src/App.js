import React, { useContext } from 'react';

const ThemeContext = React.createContext('green');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button>{theme}</button>;
}

export default ThemedButton
