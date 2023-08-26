import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { BrowserRouter } from "react-router-dom";

import ProductCard from "../components/ProductCard";

describe("Product card component", () => {
  it("render correct", () => {
    const product = {
      title: "name",
      image: "image",
      rating: {
        rate: 2,
        count: 200,
      },
      price: 20,
    };

    render(<ProductCard product={product}></ProductCard>);

    const cardElements = screen.getByRole("region").children;
    expect(cardElements.length).toBe(4);

    expect(cardElements[0].src).toMatch(product.image);
    expect(cardElements[1].textContent).toMatch(product.title);
    expect(cardElements[2].textContent).toMatch(
      product.rating.rate + "(" + product.rating.count + ")"
    );
    expect(cardElements[3].textContent).toMatch(product.price.toString());
  });
});
