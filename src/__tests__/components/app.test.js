import { render, screen } from "@testing-library/react";
import App from "../../App";
import "@testing-library/jest-dom";

test("renders todo app", () => {
  render(<App />);

  expect(screen.getByTestId("Todo-container")).toBeInTheDocument();
});
