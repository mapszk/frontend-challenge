import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./index";

describe("Input component", () => {
  let value = "";
  const handleChange = (newVal: string) => {
    value = newVal;
  };
  const label = "Test";

  it("renders an input", () => {
    render(
      <Input label={label} value={value} name="name" onChange={handleChange} />
    );
    const input = screen.getByTestId("input");
    const labelElement = screen.getByText(label);
    expect(input).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });

  it("changes value", () => {
    render(
      <Input label={label} value={value} name="name" onChange={handleChange} />
    );
    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "newValue" } });
    expect(value).toBe("newValue");
  });
});
