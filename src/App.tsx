import 'react-perfect-scrollbar/dist/css/styles.css';

import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Clientes } from './pages/Clientes';

import { GlobalStyle } from './styles/global';
import theme from './theme';

function App() {
  const content = useRoutes([
    {
      path: '/',
      element: <Dashboard />,
      children: [
        {
          path: '/clientes',
          element: <Clientes />,
        },
      ],
    },
  ]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {content}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
