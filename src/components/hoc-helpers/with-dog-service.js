import React from "react";
import { DogServiceConsumer } from "../dog-service-context";

const withDogService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <DogServiceConsumer>
        {(dogService) => {
          const serviceProps = mapMethodsToProps(dogService);

          return <Wrapped {...props} {...serviceProps} />;
        }}
      </DogServiceConsumer>
    );
  };
};

export default withDogService;
