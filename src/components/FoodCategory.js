import { SWIGGY_CLOUD_IMG_BASE_PATH } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const FoodCategory = ({ data, showItems, setOpenAccordianIndex }) => {
  const { title, itemCards } = data;

  const handleAccordian = () => {
    setOpenAccordianIndex && setOpenAccordianIndex();
  };

  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="w-9/12 mx-auto shadow-lg bg-gray-50 p-2 my-4 text-left">
      <div
        onClick={handleAccordian}
        className="flex justify-between my-4 cursor-pointer"
      >
        <span className="font-semibold text-lg">
          {title} ({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && (
        <div>
          {itemCards.map((item) => (
            <div
              className="my-4 py-2 flex border-b-2 border-gray-200"
              key={item?.card?.info?.id}
              data-testid="foodItems"
            >
              <div className="w-9/12">
                <h4 className="font-bold text-md my-1">
                  {item?.card?.info?.name}
                </h4>
                <p className="font-semibold">
                  ₹{" "}
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </p>
                <p className="font-light text-sm my-4">
                  {item.card.info.description}
                </p>
              </div>
              <div className="relative p-4 w-3/12">
                <button
                  onClick={() => addItemHandler(item)}
                  className="absolute bottom-1 left-12 shadow-xl bg-white text-green-400 px-6 py-2 rounded-lg"
                >
                  Add +
                </button>
                <img
                  src={SWIGGY_CLOUD_IMG_BASE_PATH + item?.card?.info?.imageId}
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodCategory;
