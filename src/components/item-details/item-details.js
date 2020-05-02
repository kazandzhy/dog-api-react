import React, { Component } from "react";

import "./item-details.css";

export default class ItemDetails extends Component {
  state = {
    itemName: null,
    image: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemName !== prevProps.itemName) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemName, getDog } = this.props;
    if (!itemName) {
      return;
    }

    getDog(itemName).then((item) => {
      Promise.resolve(item).then((value) => {
        this.setState({
          itemName,
          image: value.message,
        });
        return value;
      });
    });
  }

  render() {
    const { itemName, image } = this.state;
    if (itemName === null) {
      return null;
    }
    if (!itemName) {
      return <span>Select a item from a list</span>;
    }

    return (
      <div className="item-details card">
        <img className="item-image" src={image} alt="item" />

        <div className="card-body">
          <h4>{itemName}</h4>
        </div>
      </div>
    );
  }
}
