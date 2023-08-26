import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Home from "../components/Home";

describe("Home component", () => {
  it("render correct home", async () => {
    render(
      <BrowserRouter>
        <Home></Home>
      </BrowserRouter>
    );

    const heading = await screen.findByRole("heading", { level: 1 });
    const productsLinks = screen.getByRole("region").children;
    const authorLink = screen.getByRole("link", { name: /Sergio García/i });

    expect(heading.textContent).toMatch("Our Top Products");
    expect(productsLinks.length).toBe(3);
    expect(authorLink.href).toMatch("https://github.com/sergiogarciiam");
    expect(authorLink.target).toMatch("_blank");
  });
});
