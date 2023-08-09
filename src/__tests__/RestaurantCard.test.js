import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import Mock_Data from "../data/restaurantMockData.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props", () => {
  // render
  render(<RestaurantCard restaurant={Mock_Data} />);

  // Querying
  const name = screen.getByText("Bombay Mishthan Bhandar (BMB) - Durapura");

  // Assertion
  expect(name).toBeInTheDocument();
});
