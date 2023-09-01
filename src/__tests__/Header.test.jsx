import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

import Header from "../components/Header";

const CART = { number: 2 };

describe("Header component", () => {
  it("render correct header", () => {
    render(
      <BrowserRouter>
        <Header cart={CART}></Header>
      </BrowserRouter>
    );

    const links = screen.getAllByRole("link");
    expect(links.length).toBe(3);

    expect(links[0].textContent).toMatch(/Fake Store/i);
    expect(links[0].href).toMatch("/");

    expect(links[1].textContent).toMatch(/Products/i);
    expect(links[1].href).toMatch("/products");
    expect(links[1].className).toMatch("");

    expect(links[2].textContent).toMatch(`Cart (${CART.number})`);
    expect(links[2].href).toMatch("/cart");
    expect(links[2].className).toMatch("");
  });
});
