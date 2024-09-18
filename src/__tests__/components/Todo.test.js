import { render, screen } from "@testing-library/react";
import Todo from "../../components/page/Todo";
import Header from "../../components/common/Header";
import "@testing-library/jest-dom";
import TodoInput from "../../components/form/TodoInput";

describe("tests for todo container", () => {
  render(<Todo />);

  describe("tests for Header in todo container", () => {
    render(<Header />);
    it("renders Header", () => {
      expect(screen.getAllByRole("heading")).toBeTruthy();
    });
  });

  describe("tests for TodoInput in todo container", () => {
    it("renders text input", () => {
      render(<TodoInput />);
      expect(screen.getByPlaceholderText("Enter your todo")).toBeTruthy();
    });
    it("renders button", () => {
      render(<TodoInput />);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });
});
