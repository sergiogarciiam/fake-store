import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import App from "../App";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App></App>);
    expect(screen.getByRole("heading").textContent).toMatch(/App/i);
  });
});
