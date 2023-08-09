import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import "@testing-library/jest-dom";

import Mock_Data from "../data/restaurantListMockData";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return new Promise((resolve, reject) => {
    resolve({
      json: () => {
        return new Promise((resolve) => {
          return resolve(Mock_Data);
        });
      },
    });
  });
});

it("Should search res list for Pizza text input", async () => {
  // render
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchForm = screen.getByTestId("searchForm");

  fireEvent.change(searchForm, { target: [{ value: "Pizza" }] });

  fireEvent.submit(searchForm);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(3);
});

it("Should filter top rated restaurants from res list", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const allCards = screen.getAllByTestId("resCard");

  expect(allCards.length).toBe(20);

  const topRatedBtn = screen.getByTestId("topRatedBtn");
  fireEvent.click(topRatedBtn);

  const topRatedCards = screen.getAllByTestId("resCard");

  expect(topRatedCards.length).toBe(11);
});
