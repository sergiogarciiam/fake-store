import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

import {
  ProductCardToGridView,
  ProductCardToListView,
} from "../components/ProductCard";

describe("Product Card components", () => {
  it("render correct product cards to grid view", () => {
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
        <ProductCardToGridView product={product}></ProductCardToGridView>
      </BrowserRouter>
    );

    const card = screen.getByRole("link");
    const image = screen.getByRole("img");
    const title = screen.getByRole("heading", { name: product.title });
    const rating = screen.getByText(
      product.rating.rate + " (" + product.rating.count + ")"
    );
    const price = screen.getByText(`$${product.price}`);

    expect(card).toBeInTheDocument();
    expect(card.href).toMatch(`products/${product.id}`);

    expect(image).toBeInTheDocument();
    expect(image.src).toMatch(product.image);

    expect(title).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it("render correct product cards to list view", () => {
    const product = {
      id: 1,
      title: "name",
      image: "image",
      rating: {
        rate: 2,
        count: 200,
      },
      price: 20,
      quantity: 3,
    };

    render(
      <BrowserRouter>
        <ProductCardToListView product={product}></ProductCardToListView>
      </BrowserRouter>
    );

    const card = screen.getByRole("link");
    const image = screen.getByRole("img");
    const title = screen.getByRole("heading", { name: product.title });
    const quantityText = screen.getByText(`Quantity: ${product.quantity}`);
    const price = screen.getByText(`$${product.price}`);
    const button = screen.getByRole("button");

    expect(card).toBeInTheDocument();
    expect(card.href).toMatch(`products/${product.id}`);

    expect(image).toBeInTheDocument();
    expect(image.src).toMatch(product.image);

    expect(title).toBeInTheDocument();
    expect(quantityText).toBeInTheDocument();
    expect(price).toBeInTheDocument();

    expect(button).toBeInTheDocument();
    expect(button.textContent).toMatch("Delete");
  });
});
