import { useParams } from "react-router-dom";
import { useEffect } from "react";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, areaName, sla } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="text-center">
      <div className="brand border border-gray p-4 text-md shadow-sm">
        <h2 className="font-bold text-lg py-4">{name}</h2>
        <p> {cuisines.join(", ")}</p>
        <p> {areaName}</p>
        <p>
          {sla.deliveryTime} Mins - {costForTwoMessage}
        </p>
      </div>
      <h4 className="font-bold text-md py-2">Menu</h4>
      <ul className="menu-list">
        {itemCards.map((item) => (
          <li
            key={item?.card?.info?.id}
            className="bg-gray-50 shadow-sm p-4 hover:bg-gray-200 m-2"
          >
            {item?.card?.info?.name} - Rs.
            {item?.card?.info?.price / 100 ??
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
