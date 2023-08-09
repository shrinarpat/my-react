import { Provider } from "react-redux";
import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render the logo img", () => {
  // Render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Querying
  const logo = screen.getByRole("img");

  // Assertion
  expect(logo).toBeInTheDocument();
});

it("Should render all the Link items in the header component", () => {
  // Render
  // Render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Querying
  const navItems = screen.getAllByRole("link");

  // Assertion
  expect(navItems.length).toBe(7);
});
