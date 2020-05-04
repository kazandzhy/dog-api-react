import React from "react";
import { RandomBreedPage } from "../pages";
import { withDogService } from "../hoc-helpers";

const RandomBreedDetails = (props) => {
  return <RandomBreedPage {...props}></RandomBreedPage>;
};

const mapMethodsToProps = (dogService) => {
  return {
    getDog: dogService.getDog,
    getAllDogs: dogService.getAllDogs,
  };
};

export default withDogService(mapMethodsToProps)(RandomBreedDetails);
