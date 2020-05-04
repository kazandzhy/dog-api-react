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
      .then((item) => {
        Promise.resolve(item).then((value) => {
          this.setState({
            itemName,
            image: value.message,
            loading: false,
            error: false,
          });
          return value;
        });
      })
      .catch(this.onError);
  }

  render() {
    const { itemName, image, loading, error } = this.state;
    if (!itemName) {
      return <span>Select a dog from the list!</span>;
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
