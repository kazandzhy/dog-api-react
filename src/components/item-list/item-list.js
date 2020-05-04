import React from "react";
import PropTypes from "prop-types";

import "./item-list.css";

const ItemList = (props) => {
  const { data, onItemSelected } = props;

  const dogNames = data.map((item, key) => {
    return (
      <li
        key={key}
        className="list-group-item"
        onClick={() => onItemSelected(item)}
      >
        {item}
      </li>
    );
  });
  return <ul className="item-list list-group">{dogNames}</ul>;
};

ItemList.defaultProps = {
  onItemSelected: () => {},
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.string,
};

export default ItemList;
