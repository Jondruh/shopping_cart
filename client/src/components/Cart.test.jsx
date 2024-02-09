/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Cart from "./Cart";

test("cart is empty", () => {
  render(<Cart cart={[]} />);
  const cart = screen.getByText("Your cart is empty");
  expect(cart).toBeInTheDocument();
});
