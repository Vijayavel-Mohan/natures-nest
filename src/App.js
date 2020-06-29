import React from 'react';
import {Helmet} from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <div className="App">
         <Helmet>
                <meta charSet="utf-8" />
                <title>Nature's Nest</title>
          </Helmet>
          <BrowserRouter basename="/natures-nest">
          <NavigationBar baseUrl="/natures-nest"/>
             <Switch>
                <Route exact path='/'>Home</Route>
                <Route exact path='/about-us'>About Us</Route>
                <Route exact path='/shop'/>
                <Route exact path='/contact'/>
                <Route exact path='/login'/>
             </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
