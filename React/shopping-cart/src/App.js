import './App.css';

import React from 'react';

import Nav from './components/shared/nav/Nav.jsx'
import Footer from './components/shared/footer/Footer.jsx'
import ShoppingCart from './components/shopping-cart/ShoppingCart.jsx'
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
function App() {
  return (
   <div className="container">
      <div className="row">
        <div className='col'>
            <Nav/>
       </div>
       <div className="row">
       <div className='col'>
          
       <Switch>
   
                        <Route path="/" exact render={() => <Redirect to="/ShoppingCart" />} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/ShoppingCart" exact component={ShoppingCart} />
                        
                        {/* <Route path="/**" component={PageNotFound} /> */}
                    </Switch>
            
          </div>
       </div>
       <div className="row">
       <div className='col'>
          <Footer/>
          </div>
       </div>
      
         
      </div>
   </div>
  );
}

export default App;
