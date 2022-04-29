import axios from "axios";
import './css/App.css';
import Header from './templates/Header';
import MainBanner from './templates/MainBanner';
import Home from './templates/Home';
import Shop from './pages/Shop';
import Footer from './templates/Footer';
import ShippingInfo from './templates/ShippingInfo'
import NewsLetter from './templates/NewsLetter'
import Copyright from './templates/Copyright'
import BestSelling from './pages/BestSelling'
import Single from './pages/Single';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

function App() {
  const [apiResponse, setApiResponse]= useState([]);

  const callAPI = (order) => {
    fetch("https://backend-node.azurewebsites.net/" + order, { mode: 'no-cors'})
    .then(res => res.text())
    .then(res => setApiResponse(res))
  }

  useEffect(() => {
    callAPI('users')
  });

  return (
    <Router>
      <div className="main-sec">
        <Header />
        <MainBanner />
        <p>{apiResponse}</p>
      </div>
      <Switch>
          <Route path="/" exact><Shop /><BestSelling /></Route>
          <Route path="/single" exact><Single /></Route>
      </Switch>

      <ShippingInfo />
      <NewsLetter />
      <Footer />
      <Copyright />
    </Router>
  );
}

export default App;
