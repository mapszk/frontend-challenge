import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ContactForm from "./index";
import { Toaster } from "react-hot-toast";

describe("Contact form component", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("renders a form", () => {
    render(<ContactForm />);
    const nameInput = screen.getByPlaceholderText("Ingresa un nombre...");
    const emailInput = screen.getByPlaceholderText("Ingresa un email...");
    const messageInput = screen.getByPlaceholderText("Ingresa un mensaje...");
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
  });

  it("shows a name error", async () => {
    render(
      <div>
        <Toaster />
        <ContactForm />
      </div>
    );
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    const errorToast = await screen.findByText("Debes ingresar un nombre");
    expect(errorToast).toBeInTheDocument();
  });

  it("shows an email error", async () => {
    render(
      <div>
        <Toaster />
        <ContactForm />
      </div>
    );
    const submitButton = screen.getByRole("button");
    const nameInput = screen.getByPlaceholderText("Ingresa un nombre...");
    fireEvent.change(nameInput, { target: { value: "Nombre" } });
    fireEvent.click(submitButton);
    const errorToast = await screen.findByText("Debes ingresar un email");
    expect(errorToast).toBeInTheDocument();
  });

  it("shows a message error", async () => {
    render(
      <div>
        <Toaster />
        <ContactForm />
      </div>
    );
    const submitButton = screen.getByRole("button");
    const nameInput = screen.getByPlaceholderText("Ingresa un nombre...");
    const emailInput = screen.getByPlaceholderText("Ingresa un email...");
    fireEvent.change(nameInput, { target: { value: "Nombre" } });
    fireEvent.change(emailInput, { target: { value: "email@test.com" } });
    fireEvent.click(submitButton);
    const errorToast = await screen.findByText("Debes ingresar un mensaje");
    expect(errorToast).toBeInTheDocument();
  });
});
