import React from 'react'
import Dashboard from './containers/Dashboard';
import Flag from './containers/Flag'; 
import Header from './components/Header';
import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
 
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route path='/' exact component={Dashboard}/>
          <Route path='/Country' exact component={Flag}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


