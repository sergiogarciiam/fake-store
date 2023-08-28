import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

import Header from "../components/Header";
import Home from "../components/Home";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";

describe("Header component", () => {
  it("render correct header with links", () => {
    render(
      <BrowserRouter>
        <Header></Header>
      </BrowserRouter>
    );

    const links = screen.getAllByRole("link");
    expect(links.length).toBe(3);

    expect(links[0].textContent).toMatch(/Fake Store/i);
    expect(links[0].href).toMatch("/");
    expect(links[0].className).toMatch("active");

    expect(links[1].textContent).toMatch(/Products/i);
    expect(links[1].href).toMatch("/products");
    expect(links[1].className).toMatch("");

    expect(links[2].textContent).toMatch(/Cart/i);
    expect(links[2].href).toMatch("/cart");
    expect(links[2].className).toMatch("");
  });
});

describe("Home component", () => {
  it("render correct home", async () => {
    render(
      <BrowserRouter>
        <Home></Home>
      </BrowserRouter>
    );

    const heading = screen.getByRole("heading", { level: 1 });
    const authorLink = screen.getByRole("link", { name: "Sergio García" });

    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toMatch("What are you looking for?");

    expect(authorLink).toBeInTheDocument();
    expect(authorLink.href).toMatch("https://github.com/sergiogarciiam");
    expect(authorLink.target).toMatch("_blank");
  });
});

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

describe("Product Details component", () => {
  vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
      ...actual,
      useParams: () => ({ id: "1" }),
    };
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
