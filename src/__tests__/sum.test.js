import { sum } from "../components/sum";
test("Sum function will calculate the sum of two numbers", () => {
  const result = sum(3, 7);

  // Assertion
  expect(result).toBe(10);
});
