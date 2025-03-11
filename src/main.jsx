import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import store from './store/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>,
)
