import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Title from "./index";

describe("Header component", () => {
  it("renders a heading", () => {
    const testMessage = "Test";
    render(<Title>{testMessage}</Title>);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("renders children content", () => {
    const testMessage = "Test";
    render(<Title>{testMessage}</Title>);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(testMessage);
  });
});
