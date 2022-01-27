import React from 'react';
import ReactDOM from 'react-dom';
import App from './JS/App';
import * as serviceWorker from './JS/ServiceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);

serviceWorker.register();