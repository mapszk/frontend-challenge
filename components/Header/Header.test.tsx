import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Header component", () => {
  it("renders a heading", () => {
    render(<Header />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("renders a subheading", () => {
    render(<Header />);
    const subheading = screen.getByRole("heading", { level: 2 });
    expect(subheading).toBeInTheDocument();
  });

  it("renders an image", () => {
    render(<Header />);
    const image = screen.getByAltText("Profile image");
    expect(image).toBeInTheDocument();
  });
});
