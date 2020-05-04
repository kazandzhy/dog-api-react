import React, { Component } from "react";
import { BreedsPage } from "../pages";
import RandomBreedDetails from "../random-breed-details";

import Header from "../header";
import ErrorBoundary from "../error-boundary";
import DogService from "../../services/dog-service";
import { DogServiceProvider } from "../dog-service-context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./app.css";

export default class app extends Component {
  state = {
    dogService: new DogService(),
  };

  render() {
    const { dogService } = this.state;

    return (
      <DogServiceProvider value={dogService}>
        <ErrorBoundary>
          <Router>
            <div className="App">
              <div className="Container">
                <Header />
                <Switch>
                  <Route path="/" component={BreedsPage} exact />
                  <Route path="/random-breed" component={RandomBreedDetails} />
                </Switch>
              </div>
            </div>
          </Router>
        </ErrorBoundary>
      </DogServiceProvider>
    );
  }
}
