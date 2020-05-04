import React, { Component, Fragment } from "react";
import DogList from "../dog-list";
import DogDetails from "../dog-details";
import SearchPanel from "../search-panel";

export default class Breeds extends Component {
  state = {
    selectedItem: null,
    term: "",
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  onSearchChange = (term) => {
    this.setState({
      term: term,
    });
  };
  render() {
    const { selectedItem, term } = this.state;
    return (
      <Fragment>
        <DogList onItemSelected={this.onItemSelected} term={term}></DogList>
        <SearchPanel onSearch={this.onSearchChange} />
        <DogDetails itemName={selectedItem}></DogDetails>
      </Fragment>
    );
  }
}
