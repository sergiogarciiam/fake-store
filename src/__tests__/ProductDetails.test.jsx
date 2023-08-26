import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import ProductDetails from "../components/ProductDetails";

describe("Product Details component", () => {
  it("render correct", () => {
    render(
      <BrowserRouter>
        <ProductDetails></ProductDetails>
      </BrowserRouter>
    );

    //expect(screen.getByRole("img").href).toMatch(product.image);
    //expect(screen.getByRole("heading").textContent).toMatch(product.title);
    //expect(screen.getByRole("button").textContent).toMatch("Add To Cart");

    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
  });
});
