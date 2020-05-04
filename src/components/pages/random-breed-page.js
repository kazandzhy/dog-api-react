import React from "react";
import RandomBreedDetails from "../random-breed-details";
import { withDogService } from "../hoc-helpers";

const RandomBreedPage = (props) => {
  return <RandomBreedDetails {...props}></RandomBreedDetails>;
};

const mapMethodsToProps = (dogService) => {
  return {
    getDog: dogService.getDog,
    getAllDogs: dogService.getAllDogs,
  };
};

export default withDogService(mapMethodsToProps)(RandomBreedPage);
