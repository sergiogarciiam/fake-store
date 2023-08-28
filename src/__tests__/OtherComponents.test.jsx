import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import CategoriesList from "../components/CategoriesList";

describe("Product Card component", () => {
  it("render correct product cards", () => {
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
    const cardElements = card.children;

    expect(card).toBeInTheDocument();
    expect(card.href).toMatch(`products/${product.id}`);

    expect(cardElements.length).toBe(4);
    expect(cardElements[0].src).toMatch(product.image);
    expect(cardElements[1].textContent).toMatch(product.title);
    expect(cardElements[2].textContent).toMatch(
      product.rating.rate + " (" + product.rating.count + ")"
    );
    expect(cardElements[3].textContent).toMatch(product.price.toString());
  });
});

describe("Categories List component", () => {
  it("render correct categories list", async () => {
    render(
      <BrowserRouter>
        <CategoriesList></CategoriesList>
      </BrowserRouter>
    );

    const links = await screen.findAllByRole("link");
    expect(links.length).toBe(5);
    expect(links[0].textContent).toMatch("All");
  });
});
