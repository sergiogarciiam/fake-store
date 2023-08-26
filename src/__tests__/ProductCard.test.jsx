import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

import ProductCard from "../components/ProductCard";

describe("Product card component", () => {
  it("render correct", () => {
    const product = {
      id: 1,
      title: "name",
      image: "image",
      rating: {
        rate: 2,
        count: 200,
      },
      price: 20,
    };

    render(
      <BrowserRouter>
        <ProductCard product={product}></ProductCard>
      </BrowserRouter>
    );

    const card = screen.getByRole("link");
    expect(card.href).toMatch(`products/${product.id}`);

    const cardElements = card.children;
    expect(cardElements.length).toBe(4);

    expect(cardElements[0].src).toMatch(product.image);
    expect(cardElements[1].textContent).toMatch(product.title);
    expect(cardElements[2].textContent).toMatch(
      product.rating.rate + " (" + product.rating.count + ")"
    );
    expect(cardElements[3].textContent).toMatch(product.price.toString());
  });
});
