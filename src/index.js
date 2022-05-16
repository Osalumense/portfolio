import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './components/Theme/ThemeContext';
import Background from './components/Theme/Background';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <App />
      </Background>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
