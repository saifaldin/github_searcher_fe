import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
