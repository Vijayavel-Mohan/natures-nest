import React,{ lazy, Suspense } from 'react';
import {Helmet} from "react-helmet";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import NavBar from './components/NavigationBar/NavigationBar';
import FooterPage from './components/Footer/Footer';
import Home from './containers/Home/Home';



function App() {
  return (
    <div className="App">
      <header>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Nature's Nest</title>
          </Helmet>
          <BrowserRouter>
          <NavBar/>
             <Switch>
                <Route exact  path='/natures-nest' component={Home}/>
                <Route exact path='/about-us'/>
                <Route exact path='/shop'/>
                <Route exact path='/my-cart'/>
                <Route exact path='/contact'/>
                <Route exact path='/login'/>
                <Redirect to='/natures-nest'/>
             </Switch>
          </BrowserRouter>
          </header>
            <FooterPage/>
    </div>
  );
}

export default App;
