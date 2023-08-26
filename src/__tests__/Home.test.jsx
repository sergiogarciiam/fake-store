import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";

import Home from "../components/Home";

describe("Home component", () => {
  it("render correct home", () => {
    render(
      <BrowserRouter>
        <Home></Home>
      </BrowserRouter>
    );

    expect(screen.getByRole("heading").textContent).toMatch(
      /Our Top Products/i
    );

    const productCards = screen.getByRole("link");
    expect(productCards.length).toBe(3);

    expect(productCards[0].children.length).toBe(3);
    expect(productCards[1].children.length).toBe(3);
    expect(productCards[2].children.length).toBe(3);

    expect(screen.getByRole("footer").children[0].textContent).toMatch(
      "By Sergio García"
    );
  });
});
