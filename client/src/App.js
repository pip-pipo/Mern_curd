
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/navbar'
import NotFound from './components/pages/NotFound';
import './App.css'
import AddUser from './components/users/AddUser';
function App() {
  return (
    <div className="App">
      <Router>
        {<Route component={NotFound}/> == true ?<NotFound/>:<Navbar/>}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/users/add" component={AddUser}/>

          <Route component={NotFound} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
