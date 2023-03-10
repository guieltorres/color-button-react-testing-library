import { render, screen, fireEvent } from "@testing-library/react";
import { logRoles } from "@testing-library/dom";
import App from "./App";

test("button has the correct initial color, and updates when clicked", () => {
  const { container } = render(<App />);
  logRoles(container);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ "background-color": "red" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ "background-color": "blue" });

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent("Change to red");
});

test("button turns blue when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
});
