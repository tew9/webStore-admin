import React, {useEffect} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Signin from './containers/Signin/Signin';
import Signup from './containers/Signup/Signup';
import Home from './containers/Home';
import { useDispatch, useSelector } from "react-redux";
import PrivateRoute  from '../src/components/HOC/PrivateRoute'
import * as authAction from './actions/auth.action'
import Products from './containers/Products/products';
import Orders from './containers/Orders/orders';

const App = () => {

  const {authenticated} = useSelector(state=>state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!authenticated && token){
      dispatch(authAction.isUserLoggedIn());
    } 
  })

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path='/' exact component={Home}/>
        <PrivateRoute path='/products' component={ Products }/>
        <PrivateRoute path='/orders' component={ Orders }/>
        <Route path='/signup' component={Signup}/>
        <Route path='/signin' component={Signin}/>
      </Switch>
    </div>
  );
}

export default App;
