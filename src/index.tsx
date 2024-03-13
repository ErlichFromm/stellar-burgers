import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';

//https://norma.nomoreparties.space/api/ingredients
// https://yandex-practicum.github.io/react-developer-burger-ui-components/docs/button#primary-small

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <App/>
);

