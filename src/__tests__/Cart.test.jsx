import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

import Cart from "../components/Cart";

const CART = {
  data: {
    1: {},
    2: {},
  },
};

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useOutletContext: () => [CART, vi.fn(), vi.fn()],
  };
});

describe("Cart component", () => {
  it("render correct cart", async () => {
    render(
      <BrowserRouter>
        <Cart></Cart>
      </BrowserRouter>
    );

    const links = await screen.findAllByRole("link");
    console.log(links);
    expect(links.length).toBe(4);
  });
});
