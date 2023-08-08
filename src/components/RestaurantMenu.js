import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import FoodCategory from "./FoodCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [openAccordianIndex, setOpenAccordianIndex] = useState(0);
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, areaName, sla } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center mt-4  mx-auto">
      <div className="brand p-4 text-md shadow-sm">
        <h2 className="font-bold text-lg my-4">{name}</h2>
        <p className="font-semibold my-4"> {cuisines.join(", ")}</p>
        <p>
          {sla.deliveryTime} Mins - {costForTwoMessage}
        </p>
      </div>
      <ul className="menu-list">
        {categories.map((category, index) => {
          return (
            <FoodCategory
              data={category?.card?.card}
              showItems={index === openAccordianIndex ? true : false}
              setOpenAccordianIndex={() => {
                openAccordianIndex === index
                  ? setOpenAccordianIndex(null)
                  : setOpenAccordianIndex(index);
              }}
              key={category?.card?.card?.title}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
