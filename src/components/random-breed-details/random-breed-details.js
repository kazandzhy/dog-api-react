import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./random-breed-details.css";

export default class RandomBreedDetails extends Component {
  static defaultProps = {
    updateInterval: 7000,
  };

  static propTypes = {
    updateInterval: PropTypes.number,
  };

  state = {
    dogName: null,
    loading: true,
    dogs: null,
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updateDog();
    this.interval = setInterval(this.updateDog, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onDogLoaded = (dogName, item) => {
    this.setState({
      dogName,
      image: item.message,
      loading: false,
      error: false,
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updateDog = () => {
    const { getAllDogs, getDog } = this.props;

    getAllDogs().then((dogs) => {
      this.setState({ dogs });
    });

    if (this.state.dogs !== null) {
      const id = Math.floor(Math.random() * 94);
      const dogName = this.state.dogs[id];

      getDog(dogName)
        .then((item) => this.onDogLoaded(dogName, item))
        .catch(this.onError);
    }
  };

  render() {
    const { dogName, loading, error, image } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? (
      <DogView dogName={dogName} dogImage={image} />
    ) : null;

    return (
      <div className="random-breed-page">
        <div className="item-details-wrapper">
          <div className="item-details card">
            {errorMessage}
            {spinner}
            {content}
          </div>
        </div>
      </div>
    );
  }
}

const DogView = ({ dogImage, dogName }) => {
  return (
    <Fragment>
      <div className="card-image">
        <img className="item-image" src={dogImage} alt="item" />
      </div>
      <div className="card-header">
        <h4>{dogName}</h4>
      </div>
    </Fragment>
  );
};
