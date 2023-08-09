import { Link } from "react-router-dom";

import RestaurantCard, { withOfferLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  const [initialReslist, resList, setReslist] = useRestaurant([]);
  const onlineStatus = useOnlineStatus();

  const RestaurantCardOffer = withOfferLabel(RestaurantCard);

  const topRatedRestaurants = () => {
    const filteredRes = resList.filter((res) => res.info.avgRating > 4);
    setReslist(filteredRes);
  };

  const allRestaurants = () => {
    setReslist(initialReslist);
  };

  const searchRes = (e) => {
    e.preventDefault();

    const searchResult = initialReslist.filter((res) =>
      res.info.name.toLowerCase().includes(e.target[0].value.toLowerCase())
    );

    setReslist(searchResult);
  };

  if (!onlineStatus) {
    return (
      <h1>Oops... Looks like you're offline - Please check your internet</h1>
    );
  }

  const loadSimmerUI = () => {
    let i = 0;
    let shimmerComponentList = [];
    while (i < 10) {
      shimmerComponentList.push(<Shimmer key={i} />);
      i++;
    }

    return <div className="flex flex-wrap">{shimmerComponentList};</div>;
  };

  return resList?.length === 0 ? (
    loadSimmerUI()
  ) : (
    <div>
      <div className="flex flex-col md:flex-row justify-start ml-4 mt-4 py-4">
        <form onSubmit={($e) => searchRes($e)} data-testid="searchForm">
          <input
            type="text"
            name="search"
            placeholder="Restaurant..."
            id="search-term"
            data-testid="searchInput"
            className="p-2 mr-2 border border-gray rounded-lg"
          />
          <button
            type="submit"
            id="search-button"
            className="bg-blue-300 px-4 py-2 mr-4 border rounded-lg"
          >
            Search
          </button>
        </form>

        <button
          className="bg-green-300 px-4 py-2 mr-2 border rounded-lg"
          onClick={topRatedRestaurants}
          data-testid="topRatedBtn"
        >
          Top Rated Restaurants
        </button>
        <button
          className="bg-green-300 px-4 py-2 mr-2 border rounded-lg"
          onClick={allRestaurants}
        >
          All Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {resList.map((res) => (
          <Link
            data-testid="resCard"
            to={"/restaurants/" + res?.info?.id}
            className="md:w-6/12 lg:w-3/12"
            key={res?.info?.id}
          >
            {res.info &&
            res.info.aggregatedDiscountInfoV3 &&
            res.info.aggregatedDiscountInfoV3.header ? (
              <RestaurantCardOffer restaurant={res} />
            ) : (
              <RestaurantCard restaurant={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
