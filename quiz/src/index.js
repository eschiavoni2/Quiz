import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ContextProvider } from './hooks/useStateContext';

// dark mode theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
      </ThemeProvider>
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();
