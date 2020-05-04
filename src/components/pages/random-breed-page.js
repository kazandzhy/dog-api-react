import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import DogService from "../../services/dog-service";

import "./random-breed-page.css";

export default class RandomBreedPage extends Component {
  static defaultProps = {
    updateInterval: 4000,
  };

  static propTypes = {
    updateInterval: PropTypes.number,
  };

  dogService = new DogService();

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

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updateDog = () => {
    this.getData();
    if (this.state.dogs !== null) {
      const id = Math.floor(Math.random() * 94);
      const dogName = this.state.dogs[id];

      this.dogService
        .getDog(dogName)
        .then((item) => {
          Promise.resolve(item).then((value) => {
            this.setState({
              dogName,
              image: value.message,
              loading: false,
              error: false,
            });
            return value;
          });
        })
        .catch(this.onError);
    }
  };

  getData = () => {
    this.dogService.getAllDogs().then((item) => {
      Promise.resolve(item).then((value) => {
        this.setState({ dogs: Object.values(value) });
        return value;
      });
    });
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
