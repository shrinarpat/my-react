import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "./constants";

const useRestaurant = (initialState = []) => {
  const [initialReslist, setInitialResList] = useState(initialState);
  const [resList, setResList] = useState(initialState);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL, { dataType: "jsonp" });
      const json = await data.json();

      let resData = null;
      let i,
        length = json?.data?.cards.length;

      for (i = 0; i < length; i++) {
        if (resData === null || resData === undefined) {
          resData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
        } else {
          break;
        }
      }

      setResList(resData);
      setInitialResList(resData);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  // return restaurants list
  return [initialReslist, resList, setResList];
};

export default useRestaurant;
