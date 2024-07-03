import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Textarea from "./index";

describe("Textarea component", () => {
  let value = "";
  const handleChange = (newVal: string) => {
    value = newVal;
  };
  const label = "Test";

  it("renders a textarea", () => {
    render(
      <Textarea
        label={label}
        value={value}
        name="name"
        onChange={handleChange}
      />
    );
    const textarea = screen.getByTestId("textarea");
    const labelElement = screen.getByText(label);
    expect(textarea).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });

  it("changes value", () => {
    render(
      <Textarea
        label={label}
        value={value}
        name="name"
        onChange={handleChange}
      />
    );
    const textarea = screen.getByTestId("textarea");
    fireEvent.change(textarea, { target: { value: "newValue" } });
    expect(value).toBe("newValue");
  });
});
