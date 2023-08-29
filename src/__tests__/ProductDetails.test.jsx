import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { BrowserRouter } from "react-router-dom";

import ProductDetails from "../components/ProductDetails";
import * as userEvent from "@testing-library/user-event";

const MOCK_DATA = {
  id: 1,
  title: "Mock Product",
  image: "mock-image.jpg",
  rating: { rate: 4.5, count: 100 },
  price: 19.99,
  description: "A mock product description",
};

const ID = 1;

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: () => ({ id: ID }),
  };
});

vi.mock("../utils/useStore", () => ({
  useStore: vi.fn(() => ({
    data: MOCK_DATA,
    loading: false,
    error: null,
  })),
}));

describe("Product Details component", () => {
  afterEach(() => {
    cleanup();
  });

  it("render correct product details", async () => {
    render(
      <BrowserRouter>
        <ProductDetails></ProductDetails>
      </BrowserRouter>
    );

    const title = await screen.findByRole("heading");
    const image = await screen.findByRole("img");
    const button = await screen.findByRole("button");
    const separators = await screen.findAllByRole("separator");
    const combobox = await screen.findByRole("combobox");
    const options = await screen.findAllByRole("option");

    expect(title).toBeInTheDocument();
    expect(title.textContent).toMatch(MOCK_DATA.title);

    expect(image).toBeInTheDocument();
    expect(image.src).toMatch(MOCK_DATA.image);

    expect(button).toBeInTheDocument();
    expect(button.textContent).toMatch(/Add To Cart/i);

    expect(separators.length).toBe(2);
    expect(combobox).toBeInTheDocument();
    expect(options.length).toBe(15);

    expect(screen.getByText(MOCK_DATA.rating.rate)).toBeInTheDocument();
    expect(screen.getByText(`(${MOCK_DATA.rating.count})`)).toBeInTheDocument();

    expect(screen.getByText(`$${MOCK_DATA.price}`)).toBeInTheDocument();
    expect(screen.getByText("Quantity:")).toBeInTheDocument();

    expect(screen.getByText("About the product")).toBeInTheDocument();
    expect(screen.getByText(MOCK_DATA.description)).toBeInTheDocument();
  });

  it("add to cart", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <ProductDetails></ProductDetails>
      </BrowserRouter>
    );

    const button = await screen.findByRole("button");
    let products = {};

    await user.click(button);
    products = JSON.parse(localStorage.getItem("products"));
    expect(products[ID].quantity).toBe(1);

    await user.click(button);
    products = JSON.parse(localStorage.getItem("products"));
    expect(products[ID].quantity).toBe(2);
  });
});
