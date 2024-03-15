import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from './services/store'
import App from './components/app/app';

//https://norma.nomoreparties.space/api/ingredients
// https://yandex-practicum.github.io/react-developer-burger-ui-components/docs/button#primary-small

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);

