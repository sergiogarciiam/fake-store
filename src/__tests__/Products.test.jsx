import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Products from "../components/Products";

describe("Products Component", () => {
  it("render correct products", async () => {
    render(
      <BrowserRouter>
        <Products></Products>
      </BrowserRouter>
    );

    const heading = await screen.findByRole("heading", { level: 1 });
    const productsContainer = await screen.findAllByRole("link");

    expect(heading.textContent).toMatch("Products");
    expect(productsContainer.length).toBe(20);
  });
});
