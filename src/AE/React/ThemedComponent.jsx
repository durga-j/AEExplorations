import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggleTheme from context

  return (
    <div
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        textAlign: 'center'
      }}
    >
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
}
