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

    const heading = await screen.findByRole("heading", { level: 1 });
    const links = await screen.findAllByRole("link");

    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toMatch("Products");
    expect(links.length).toBe(20);
  });
});
