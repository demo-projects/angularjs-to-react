import React, {Fragment} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

const Home = () => <h1>Home Component</h1>;

const Me = () => "JustMe Here!";

const About = () => (
  <div>
    <h1>About Component</h1>
    <Link to="/about/me">me</Link>
    <Route path="/about/me" component={Me}/>
  </div>

);


const App = () => (
  <Router>
    <Fragment>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about/nir">About</Link>
      </nav>

      <Route exact path="/" component={Home}/>
      <Route path="/about/:name" component={About}/>
    </Fragment>
  </Router>
);

export default App;