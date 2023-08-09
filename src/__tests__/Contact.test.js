import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("contact us page test cases", () => {
  it("should load the contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("should form is loaded in the contact component", () => {
    // Render
    render(<Contact />);

    // Querying
    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("should load name input box in the contact component", () => {
    // Render
    render(<Contact />);

    // Querying
    const nameInput = screen.getByPlaceholderText("name");

    // Assertion
    expect(nameInput).toBeInTheDocument();
  });

  it("should load 2 input boxes in the contact component", () => {
    // Render
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // Assertion
    expect(inputBoxes.length).toBe(3);
  });
});
