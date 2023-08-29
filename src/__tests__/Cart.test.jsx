import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

import Cart from "../components/Cart";

const PRICE = 100;

vi.mock("../utils/useLocalStorage", () => ({
  useLocalStorage: vi.fn(() => ({
    cart: {
      data: {
        1: 2,
        2: 3,
      },
      price: PRICE,
    },
  })),
}));

describe("Categories List component", () => {
  it("render correct categories list", async () => {
    render(
      <BrowserRouter>
        <Cart></Cart>
      </BrowserRouter>
    );

    const links = await screen.findAllByRole("link");
    const subTotal = screen.getByText(`Subtotal ( items): $${PRICE}`, {
      exact: false,
    });

    expect(links.length).toBe(2);
    expect(subTotal).toBeInTheDocument();
  });
});
