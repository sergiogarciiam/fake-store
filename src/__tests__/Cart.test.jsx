import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

import Cart from "../components/Cart";

vi.mock("../utils/useLocalStorage", () => ({
  useLocalStorage: vi.fn(() => ({
    products: {
      data: {
        1: 2,
        2: 3,
      },
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
    const subTotal = screen.getByText("Subtotal ( items): ", {
      exact: false,
    });

    expect(links.length).toBe(2);
    expect(subTotal).toBeInTheDocument();
  });
});
