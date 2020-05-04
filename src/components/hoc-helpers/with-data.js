import React, { Component } from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false,
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    update() {
      this.setState({
        loading: true,
        error: false,
      });

      this.props
        .getData()
        .then((data) => {
          this.setState({
            data,
            loading: false,
          });
        })
        .catch(() => {
          this.setState({
            error: true,
            loading: false,
          });
        });
    }

    search = (dogNames, term) => {
      if (term.length === 0) {
        return dogNames;
      }
      return dogNames.filter((dogName) => {
        return dogName.toLowerCase().indexOf(term.toLowerCase()) > -1;
      });
    };

    render() {
      const { data, loading, error } = this.state;
      const { term } = this.props;
      const visibleItems = this.search(data, term);

      if (loading) {
        return <Spinner />;
      }

      if (error) {
        return <ErrorIndicator />;
      }

      return <View {...this.props} data={visibleItems} />;
    }
  };
};

export default withData;
