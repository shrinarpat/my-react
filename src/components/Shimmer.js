import {
  PLACEHOLD_BASE_URL,
  PLACEHOLD_BASE_URL_TEXT,
} from "../utils/constants";
const Shimmer = () => {
  return (
    <div className="md:w-[48%] lg:w-[24%] border rounded-md p-2 bg-gray-100 m-1">
      <img
        src={PLACEHOLD_BASE_URL + "400?text=img"}
        className="res-img"
        alt="card-img"
      />
      <img
        src={PLACEHOLD_BASE_URL_TEXT + "?text=restaurant-name"}
        alt="card-img"
      />
      <img src={PLACEHOLD_BASE_URL_TEXT + "?text=cuisine"} alt="card-img" />
      <img src={PLACEHOLD_BASE_URL_TEXT + "?text=avg rating"} alt="card-img" />
      <img
        src={PLACEHOLD_BASE_URL_TEXT + "?text=delivery time"}
        alt="card-img"
      />
      <img
        src={PLACEHOLD_BASE_URL_TEXT + "?text=cost for two"}
        alt="card-img"
      />
    </div>
  );
};

export default Shimmer;
