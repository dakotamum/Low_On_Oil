import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<App key={Date.now()}/>,
  document.getElementById('root')
);
