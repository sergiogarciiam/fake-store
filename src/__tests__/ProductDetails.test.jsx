import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import ProductDetails from "../components/ProductDetails";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: () => ({ id: "1" }),
  };
});

describe("Product Details component", () => {
  it("render correct", async () => {
    render(
      <BrowserRouter>
        <ProductDetails></ProductDetails>
      </BrowserRouter>
    );

    const title = await screen.findByRole("heading");
    const image = await screen.findByRole("img");
    const button = await screen.findByRole("button");
    const separators = await screen.findAllByRole("separator");
    const paragraphs = await screen.findAllByRole("paragraph");
    const label = await screen.findByLabelText(/Quantity:/i);
    const combobox = await screen.findByRole("combobox");

    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button.textContent).toMatch(/Add To Cart/i);
    expect(separators.length).toBe(2);
    expect(paragraphs.length).toBe(5);
    expect(label).toBeInTheDocument();
    expect(combobox).toBeInTheDocument();
  });
});
