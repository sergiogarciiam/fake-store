import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

import Header from "../components/Header";
import Home from "../components/Home";
import Products from "../components/Products";

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
