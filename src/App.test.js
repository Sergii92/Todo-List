import { render, screen } from "@testing-library/react";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ItemAddForm from "./components/item-add-form";
import TodoList from "./components/todo-list";

describe("AppHeader", () => {
  const props = {
    todo: 3,
    done: 0,
  };
  it("have h1", () => {
    render(<AppHeader />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });
  it("count of done", () => {
    render(<AppHeader {...props} />);
    expect(screen.getByText("3 more to do ,0 done")).toBeInTheDocument();
  });
});

describe("SearchPanel", () => {
  it("have placeholder", () => {
    render(<SearchPanel />);
    expect(screen.getByPlaceholderText("search")).toBeInTheDocument();
  });
});

describe("ItemAddForm", () => {
  it("have placeholder", () => {
    render(<ItemAddForm />);
    expect(
      screen.getByPlaceholderText("What needs to be done")
    ).toBeInTheDocument();
  });
  it("have buttom for add item", () => {
    render(<ItemAddForm />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  describe("TodoList", () => {
    const props = {
      todos: [
        {
          id: 1,
          label: "Drink Coffe",
          important: false,
          done: false,
        },
        {
          id: 2,
          label: "Make Awesome App",
          important: false,
          done: false,
        },
        {
          id: 3,
          label: "Have a lunch",
          important: false,
          done: false,
        },
        {
          id: 4,
          label: "Have a diner",
          important: false,
          done: false,
        },
      ],
      onDeleted: () => {},
      onToggleDone: () => {},
      onToggleImportant: () => {},
    };
    it("todo count", () => {
      render(<TodoList {...props} />);
      expect(screen.getAllByRole("listitem")).toHaveLength(4);
    });
  });
});
