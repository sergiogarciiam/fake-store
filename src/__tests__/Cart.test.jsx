import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { BrowserRouter } from "react-router-dom";

import Cart from "../components/Cart";
import * as userEvent from "@testing-library/user-event";

const CART = {
  data: {
    1: {},
    2: {},
  },
};

const DELETE_PRODUCT = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useOutletContext: () => [CART, vi.fn(), DELETE_PRODUCT],
  };
});

describe("Cart component", () => {
  afterEach(() => {
    cleanup();
  });

  it("render correct cart", async () => {
    render(
      <BrowserRouter>
        <Cart></Cart>
      </BrowserRouter>
    );

    const links = await screen.findAllByRole("link");
    const buttons = await screen.findAllByRole("button");

    expect(links.length).toBe(4);
    expect(buttons.length).toBe(3);
    expect(buttons[2].textContent).toMatch("Pay");
  });

  it("delete function is called correct", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Cart></Cart>
      </BrowserRouter>
    );

    const buttons = await screen.findAllByRole("button");

    await user.click(buttons[2]);
    expect(DELETE_PRODUCT).toBeCalled();
  });
});
