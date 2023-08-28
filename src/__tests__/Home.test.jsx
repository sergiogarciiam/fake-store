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
    const links = await screen.findAllByRole("link");

    expect(heading.textContent).toMatch("What are you looking for?");
    expect(links.length).toBe(6);
    expect(links[4].textContent).toMatch("Explore All");
    expect(links[5].href).toMatch("https://github.com/sergiogarciiam");
    expect(links[5].target).toMatch("_blank");
  });
});
