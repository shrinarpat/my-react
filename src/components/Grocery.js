import { Link } from "react-router-dom";
import groceryData from "../utils/groceryMockData";
import GroceryCard from "./GroceryCard";

const Grocery = () => {
  return (
    <div className="flex flex-wrap">
      {groceryData.map((res) => (
        <Link
          key={res?.id}
          to={"/grocery/" + res?.id}
          className="md:w-[48%] lg:w-[24%] border rounded-md p-2 bg-gray-100 m-1 mt-4"
        >
          <GroceryCard grocery={res} />
        </Link>
      ))}
    </div>
  );
};

export default Grocery;
