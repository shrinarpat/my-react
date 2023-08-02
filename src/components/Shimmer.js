import {
  PLACEHOLD_BASE_URL,
  PLACEHOLD_BASE_URL_TEXT,
} from "../utils/constants";
const Shimmer = () => {
  return (
    <div className="card">
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
