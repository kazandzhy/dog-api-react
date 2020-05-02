import React from "react";
import PropTypes from "prop-types";

import { withData } from "../hoc-helpers";
import DogService from "../../services/dog-service";
import "./item-list.css";

const ItemList = (props) => {
  const { data, onItemSelected } = props;

  const items = data.map((item, key) => {
    const label = item;
    return (
      <li
        key={key}
        className="list-group-item"
        onClick={() => onItemSelected(item)}
      >
        {label}
      </li>
    );
  });
  return <ul className="item-list list-group">{items}</ul>;
};

ItemList.defaultProps = {
  onItemSelected: () => {},
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.string.isRequired,
};

const { getAllDogs } = new DogService();

export default withData(ItemList, getAllDogs);
