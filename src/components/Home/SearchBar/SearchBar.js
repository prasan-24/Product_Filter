import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './SearchBar.scss';

const SearchBar = ({ value, onChangeInput }) => {
  return (
    <div className="searchBar-wrap">
      <FontAwesomeIcon icon="search" />
      <input
        type={"text"}
        placeholder={"Enter Text To Search"}
        value={value}
        onChange={onChangeInput}
      />
    </div>
  );
};

export default SearchBar;
