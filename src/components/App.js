import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Books from "./Books";
import Authors from "./Authors";
import OneBook from "./OneBook";
import OneAuthor from "./OneAuthor";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              Books shelf
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Books
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/authors">
                    Authors
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Books} />
            <Route path="/authors" component={Authors} />
            <Route path="/books/:id" component={OneBook} />
            <Route path="/author/:id" component={OneAuthor} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
