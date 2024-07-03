import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "./index";

describe("About component", () => {
  it("renders a heading", () => {
    render(<About />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("renders a paragraph", () => {
    render(<About />);
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
  });
});
