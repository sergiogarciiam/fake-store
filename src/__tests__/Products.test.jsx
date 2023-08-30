import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

import Products from "../components/Products";

describe("Products component", () => {
  it("render correct products", async () => {
    render(
      <BrowserRouter>
        <Products></Products>
      </BrowserRouter>
    );

    const links = await screen.findAllByRole("link");
    expect(links.length).toBe(20);
  });
});
