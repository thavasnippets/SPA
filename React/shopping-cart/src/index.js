import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store  from './store.js';
import { Route, Router } from 'react-router-dom';
// import history from './history';
import { createBrowserHistory } from 'history'
  
const history = createBrowserHistory();
ReactDOM.render(
 
  <Provider store={store}>
      <Router history = {history}>
      <Route component = {App}/>
       
      </Router>
   </Provider>,
  document.getElementById('root')
);


