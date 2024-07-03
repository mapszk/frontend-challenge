import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Interests from "./index";

describe("Interests component", () => {
  it("renders all items", () => {
    render(<Interests />);
    const items = screen.getAllByTestId("grid-item");
    expect(items).toHaveLength(7);
  });
});
