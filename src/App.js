import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <Router>
          <header className="d-flex justify-content-between bg-dark nav">
            <h1 className="mx-3 fw-bold fs-2 white d-flex align-self-center border border-2 border-orange p-1">Math Magicians</h1>
            <ul className="d-flex">
              <Link to="/">
                <li className="mx-1 nav-link fw-bold fs-5 d-flex align-self-center">Home</li>
              </Link>
              <Link to="/calc">
                <li className="mx-1 nav-link fw-bold fs-5 d-flex align-self-center">Calculator</li>
              </Link>
              <Link to="/quote">
                <li className="mx-1 nav-link fw-bold fs-5 d-flex align-self-center">Quote</li>
              </Link>
            </ul>
          </header>
          <Route exact path="/calc" component={Calculator} />
          <Route exact path="/" component={Home} />
          <Route exact path="/quote" component={Quote} />
        </Router>
      </main>
    );
  }
}

export default App;
