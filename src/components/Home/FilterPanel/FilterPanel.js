import React from "react";
import "./FilterPanel.scss";
import FilterListToggle from "../../common/FilterListToggle/FilterListToggle";

import { categoryList, ratingList } from "../../../constants";

import "./FilterPanel.scss";

import CheckBoxProton from "../../common/CheckBoxProton/CheckBoxProton";
import SliderProton from "../../common/SliderProton/SliderProton";

const FilterPanel = ({
  selectedCategory,
  selectToggle,
  selectedRating,
  selectRating,
  cusiness,
  changeChecked,
  changesPrice,
  selectedPrice
}) => {
  return (
    <div>
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>
      <div className="input-group">
        <p className="label">Cuisine</p>
        {cusiness.map(cuisine => <CheckBoxProton key={cuisine.id} cuisine={cuisine} changeChecked={changeChecked} />)}
      </div>
      <div className="input-group">
      <p className="label-range">Price Range</p>
        <SliderProton value={selectedPrice} changePrice={changesPrice} />
      </div>
      <div className="input-group">
        <p className="label">Start rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
