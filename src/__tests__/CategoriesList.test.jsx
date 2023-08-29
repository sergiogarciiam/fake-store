import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

import CategoriesList from "../components/CategoriesList";

describe("Categories List component", () => {
  it("render correct categories list", async () => {
    render(
      <BrowserRouter>
        <CategoriesList></CategoriesList>
      </BrowserRouter>
    );

    const links = await screen.findAllByRole("link");
    expect(links.length).toBe(5);
    expect(links[0].textContent).toMatch("all");
  });
});
