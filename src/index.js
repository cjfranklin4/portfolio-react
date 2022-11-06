import React from 'react';
import ReactDOM from 'react-dom/client';
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App';
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
     <React.StrictMode>
     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </React.StrictMode>
  </ChakraProvider>
 
);