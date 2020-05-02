import React, { Component } from "react";

import DogList from "../dog-list";
import DogDetails from "../dog-details";
import ErrorBoundary from "../error-boundary";
import DogService from "../../services/dog-service";
import { DogServiceProvider } from "../dog-service-context";

import "./app.css";

export default class app extends Component {
  state = {
    dogService: new DogService(),
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <DogServiceProvider value={this.state.dogService}>
        <ErrorBoundary>
          <div className="App">
            <div className="Container">
              <DogList onItemSelected={this.onItemSelected}>DogList</DogList>
              <DogDetails itemName={selectedItem}>DogDetails</DogDetails>
            </div>
          </div>
        </ErrorBoundary>
      </DogServiceProvider>
    );
  }
}
