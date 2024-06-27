import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { theme } from './theme/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ProviderTree /> */}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
