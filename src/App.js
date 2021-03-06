import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Footer from './Footer';
import Payment from "./Payment";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const promise = loadStripe('pk_test_51HwWiPIhd79Z3WBZupp0iXeCcxFRSU4684fzN1T1LV5LBE2gppvc0J6TS40tW1nHS09fVUdVbs54oqSCjMC0uWIX00DhI5zPIl');

function App() {

  const [{basket,user}, dispatch] = useStateValue(); 

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log("The user is = ",authUser);

      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
          dispatch({
            type: "SET_USER",
            user: null
          })
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
              <Footer />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                 {user && <Payment/>}
              </Elements>
              <Footer />
            </Route>
            <Route path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
          </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
