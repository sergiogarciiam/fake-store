import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

import Header from "../components/Header";

const NUMBER_PRODUCTS = 10;

vi.mock("../utils/useLocalStorage", () => ({
  useLocalStorage: vi.fn(() => ({
    cart: {
      number: NUMBER_PRODUCTS,
    },
  })),
}));

describe("Header component", () => {
  it("render correct header", () => {
    render(
      <BrowserRouter>
        <Header></Header>
      </BrowserRouter>
    );

    const links = screen.getAllByRole("link");
    expect(links.length).toBe(3);

    expect(links[0].textContent).toMatch(/Fake Store/i);
    expect(links[0].href).toMatch("/");
    expect(links[0].className).toMatch("active");

    expect(links[1].textContent).toMatch(/Products/i);
    expect(links[1].href).toMatch("/products");
    expect(links[1].className).toMatch("");

    expect(links[2].textContent).toMatch(`Cart ${NUMBER_PRODUCTS}`);
    expect(links[2].href).toMatch("/cart");
    expect(links[2].className).toMatch("");
  });
});
