import React, { useState, useEffect } from "react";

import "./Home.scss";

//Components
import FilterPanel from "../../components/Home/FilterPanel/FilterPanel";
import List from "../../components/Home/List/List";
import SearchBar from "../../components/Home/SearchBar/SearchBar";
import EmptyView from "../../components/common/EmptyView/EmptyView";

import { dataList } from "../../constants";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [list, setList] = useState(dataList);
  const [cusiness, setCusiness] = useState([
    {
      id: 1,
      checked: false,
      label: "American",
    },
    {
      id: 2,
      checked: false,
      label: "Chinese",
    },
    {
      id: 3,
      checked: false,
      label: "Italian",
    },
  ]);

  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const hadleSelectedRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const cuisinesStateList = cusiness;
    const changeCheckedCuisiness = cuisinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setCusiness(changeCheckedCuisiness);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    // Cuisine Filter
    const cuisinesChecked = cusiness
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisinesChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, cusiness, searchInput, selectedPrice]);

  return (
    <div className="home">
      <SearchBar
        value={searchInput}
        onChangeInput={(e) => setSearchInput(e.target.value)}
      />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          <FilterPanel
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
            selectRating={hadleSelectedRating}
            selectedRating={selectedRating}
            cusiness={cusiness}
            changeChecked={handleChangeChecked}
            selectedPrice={selectedPrice}
            changesPrice={handleChangePrice}
          />
        </div>
        <div className="home_list-wrap">
          {resultsFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default Home;
