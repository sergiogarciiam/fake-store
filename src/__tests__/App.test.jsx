import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import * as userEvent from "@testing-library/user-event";

import App from "../App";

afterEach(() => {
  cleanup();
});

describe("App component", () => {
  it("render correct header with links", () => {
    render(
      <BrowserRouter>
        <App></App>
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

  it("render correct header with links by clicking the products link", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    );

    await user.click(screen.getAllByRole("link")[1]);

    const links = screen.getAllByRole("link");
    expect(links.length).toBe(3);

    expect(links[0].textContent).toMatch(/Fake Store/i);
    expect(links[0].href).toMatch("/");
    expect(links[0].className).toMatch("");

    expect(links[1].textContent).toMatch(/Products/i);
    expect(links[1].href).toMatch("/products");
    expect(links[1].className).toMatch("active");

    expect(links[2].textContent).toMatch(/Cart/i);
    expect(links[2].href).toMatch("/cart");
    expect(links[2].className).toMatch("");
  });
});
