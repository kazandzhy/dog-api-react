import React from "react";
import ItemDetails from "../item-details";
import { withDogService } from "../hoc-helpers";

const DogDetails = (props) => {
  return <ItemDetails {...props}></ItemDetails>;
};

const mapMethodsToProps = (dogService) => {
  return {
    getDog: dogService.getDog,
  };
};

export default withDogService(mapMethodsToProps)(DogDetails);
