import { SWIGGY_CLOUD_IMG_BASE_PATH } from "../utils/constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    props?.restaurant?.info;

  return (
    <div className="border rounded-md p-1 bg-gray-100 m-2">
      <img
        src={SWIGGY_CLOUD_IMG_BASE_PATH + cloudinaryImageId}
        alt="card-img"
        className=" rounded-lg"
      />
      <h4 className="text-lg font-bold py-2">{name}</h4>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating ?? 0} stars</p>
      <p>{sla?.deliveryTime} Mins</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export const withOfferLabel = (RestaurantCard) => {
  return (props) => {
    const { header, subHeader } =
      props?.restaurant?.info?.aggregatedDiscountInfoV3;
    return (
      <div className="relative">
        <label className="absolute text-white font-bold text-md top-2 left-3 pr-4 rounded-r-lg bg-gray-400 text-center border-l-4 border-l-black-400">
          {header} {subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
