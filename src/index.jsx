import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log(`Application start at ${new Date().toISOString()}`);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

module.hot.accept();
