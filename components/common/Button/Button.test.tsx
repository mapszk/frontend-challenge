import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button component", () => {
  it("renders a button", () => {
    const testMessage = "Test";
    render(<Button>{testMessage}</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("renders children content", () => {
    const testMessage = "Test";
    render(<Button>{testMessage}</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(testMessage);
  });

  it("handles click", () => {
    const testMessage = "Test";
    const onClick = jest.fn();
    render(<Button onClick={onClick}>{testMessage}</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
