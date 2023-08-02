import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constants";

const Body = () => {
  const [initialReslist, setInitialResList] = useState([]);
  const [resList, setReslist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const topRatedRestaurants = () => {
    const filteredRes = resList.filter((res) => res.info.avgRating > 4);
    setReslist(filteredRes);
  };

  const allRestaurants = () => {
    setReslist(initialReslist);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(SWIGGY_API_URL);
    const jsonData = await apiData.json();
    setInitialResList(
      jsonData.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setReslist(
      jsonData.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const loadSimmerUI = () => {
    let i = 0;
    let shimmerComponentList = [];
    while (i < 10) {
      shimmerComponentList.push(<Shimmer key={i} />);
      i++;
    }

    return (
      <div className="restaurant-cards-container">{shimmerComponentList};</div>
    );
  };

  const searchRes = (e) => {
    e.preventDefault();

    console.log(e.target[0].value.toLowerCase());

    const searchResult = initialReslist.filter((res) =>
      res.info.name.toLowerCase().includes(e.target[0].value.toLowerCase())
    );

    setReslist(searchResult);
  };

  return resList?.length === 0 ? (
    loadSimmerUI()
  ) : (
    <div className="body">
      <div className="search-container">
        <form onSubmit={($e) => searchRes($e)}>
          <input
            type="text"
            name="search"
            placeholder="Restaurant..."
            id="search-term"
            className="search-input"
          />
          <button type="submit" id="search-button" className="search-btn">
            Search
          </button>
        </form>

        <button className="filter-btn" onClick={topRatedRestaurants}>
          Top Rated Restaurants
        </button>
        <button className="filter-btn" onClick={allRestaurants}>
          All Restaurants
        </button>
      </div>
      <div className="restaurant-cards-container">
        {resList.map((res) => (
          <RestaurantCard key={res?.info.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
