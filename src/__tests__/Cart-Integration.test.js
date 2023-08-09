import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";
import Menu_Mock_Data from "../data/restaurantMenuMockData";
import Cart from "../components/Cart";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(Menu_Mock_Data),
  })
);

describe("Cart Integartion Test Cases", () => {
  it("Should render RestaurantMenu component", async () => {
    // render
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    expect(screen.getAllByTestId("foodItems").length).toBe(113);
  });

  it("Should update the Cart link text from Cart(0) to Cart(1) in header component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );

    const addBtns = screen.getAllByRole("button", { name: "Add +" });

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart(1)")).toBeInTheDocument();
  });

  it("Should update the Cart link text from Cart(1) to Cart(2) in Header component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );
    const addBtns = screen.getAllByRole("button", { name: "Add +" });

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart(2)")).toBeInTheDocument();
  });

  it("Should render Cart component", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <Cart />
        </Provider>
      )
    );

    expect(screen.getAllByTestId("foodItems").length).toBe(2);
  });

  it("Should clear cart remove all the cart items in cart component", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <Cart />
        </Provider>
      )
    );

    const clearBtn = screen.getByRole("button", { name: "Clear Cart" });

    expect(clearBtn).toBeInTheDocument();

    fireEvent.click(clearBtn);

    expect(
      screen.getByText("Your cart is empty, Add foods to buy")
    ).toBeInTheDocument();
  });
});
