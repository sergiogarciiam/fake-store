import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import * as userEvent from "@testing-library/user-event";

import ProductDetails from "../components/ProductDetails";

const MOCK_DATA = {
  id: 1,
  title: "Mock Product",
  image: "mock-image.jpg",
  rating: { rate: 4.5, count: 100 },
  price: 19.99,
  description: "A mock product description",
};

const ADD_PRODUCT = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: () => ({ id: MOCK_DATA.id }),
    useOutletContext: () => [{}, ADD_PRODUCT],
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

    const image = await screen.findByRole("img");
    const separators = await screen.findAllByRole("separator");

    const title = await screen.findByRole("heading", { level: 2 });
    const rate = screen.getByText(
      MOCK_DATA.rating.rate + " " + "★".repeat(MOCK_DATA.rating.rate)
    );
    const count = screen.getByText(`${MOCK_DATA.rating.count} ratings`);

    const price = screen.getByText(`$${MOCK_DATA.price}`);
    const quantity = screen.getByText("Quantity:");
    const combobox = await screen.findByRole("combobox");
    const options = await screen.findAllByRole("option");
    const button = await screen.findByRole("button");

    const aboutProduct = screen.getByText("About this product");
    const description = screen.getByText(MOCK_DATA.description);

    expect(image).toBeInTheDocument();
    expect(image.src).toMatch(MOCK_DATA.image);
    expect(separators.length).toBe(2);

    expect(title).toBeInTheDocument();
    expect(title.textContent).toMatch(MOCK_DATA.title);
    expect(rate).toBeInTheDocument();
    expect(count).toBeInTheDocument();

    expect(price).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
    expect(combobox).toBeInTheDocument();
    expect(options.length).toBe(15);
    expect(button).toBeInTheDocument();
    expect(button.textContent).toMatch(/Add To Cart/i);

    expect(aboutProduct).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("delete function is called correct", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <ProductDetails></ProductDetails>
      </BrowserRouter>
    );

    const button = await screen.findByRole("button");

    await user.click(button);

    expect(ADD_PRODUCT).toBeCalled();
  });
});
