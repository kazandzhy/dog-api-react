import ItemList from "../item-list";
import { withData, withDogService, compose } from "../hoc-helpers";

const mapDogMethodsToProps = (dogService) => {
  return {
    getData: dogService.getAllDogs,
  };
};

const DogList = compose(
  withDogService(mapDogMethodsToProps),
  withData
)(ItemList);

export default DogList;
