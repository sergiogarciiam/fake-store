import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

import Home from "../components/Home";

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
