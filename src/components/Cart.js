import { useDispatch, useSelector } from "react-redux";
import FoodCategory from "./FoodCategory";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
  // subscribe to store
  const cardItems = useSelector((store) => store.cart.items);
  console.log(cardItems);

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearItems());
  };

  return (
    <div>
      <FoodCategory
        data={{ title: "Cart", itemCards: cardItems }}
        showItems={true}
      />
      <div className="w-9/12 mx-auto my-6">
        {cardItems.length === 0 ? (
          <h2>Your cart is empty, Add foods to buy</h2>
        ) : (
          <div>
            <div className="flex justify-between">
              <h2 className="font-bold text-2xl">
                {cardItems.length +
                  " Items Total - Rs." +
                  cardItems.reduce(
                    (acc, item) => acc + item.card.info.price,
                    0
                  ) /
                    100}
              </h2>
              <button className="border border-green bg-gray-800 text-white p-2 rounded-lg">
                Proceed Next
              </button>
            </div>
            <button
              onClick={clearCartHandler}
              className="border border-green bg-gray-800 text-white p-2 rounded-lg mt-6"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
