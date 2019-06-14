import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header'
import ContactMe from '../components/ContactMe'
import NotFoundPage from '../components/NotFoundPage'
import AboutMe from '../components/AboutMe'
import HomePage from '../components/HomePage'
import PortfolioPage from '../components/PortfolioPage'
import Resume from '../components/Resume'

 
const AppRouter = () => (
  
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
      <Route path="/" component = {HomePage} exact = {true} />
      <Route path="/portfolio" component={PortfolioPage} exact={true} />
      <Route path="/about" component={AboutMe} />
      <Route path="/contact" component={ContactMe} />
      <Route path="/resume" component={Resume} />
      <Route component={NotFoundPage} />
    </Switch>
    </div>    
  </BrowserRouter>
)



export default AppRouter;
