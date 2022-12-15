import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import axios from 'axios';

axios.defaults.headers.common['Accept-Language'] ='pt';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)
