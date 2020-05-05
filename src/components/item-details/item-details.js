import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./item-details.css";

export default class ItemDetails extends Component {
  state = {
    itemName: null,
    image: null,
    loading: true,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemName !== prevProps.itemName) {
      this.updateItem();
    }
  }

  onItemLoaded = (itemName, item) => {
    this.setState({
      itemName,
      image: item.message,
      loading: false,
      error: false,
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updateItem() {
    const { itemName, getDog } = this.props;

    if (!itemName) {
      return null;
    }
    getDog(itemName)
      .then((item) => this.onItemLoaded(itemName, item))
      .catch(this.onError);
  }

  render() {
    const { itemName, image, loading, error } = this.state;
    if (!itemName) {
      return <h5>Select a dog from the list!</h5>;
    }

    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? (
      <img className="item-image" src={image} alt="item" />
    ) : null;

    return (
      <div className="item-details-wrapper">
        <div className="item-details card">
          <div className="card-image">
            {errorMessage}
            {spinner}
            {content}
          </div>
          <div className="card-header">
            <h4>{itemName}</h4>
          </div>
        </div>
      </div>
    );
  }
}
