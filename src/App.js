import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import "./components/Logo"


const App = () => {
  return (
    
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      \\si problème de router
      <Route component = { NotFound } />
    </Switch>
  
  </BrowserRouter>
  );
};

export default App;
