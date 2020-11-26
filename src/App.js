import React, { useState, useEffect, useContext } from "react";

import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ItemStatusFilter from "./components/item-status-filter";
import ItemAddForm from "./components/item-add-form";

import "./App.css";

function App() {
  const style = {
    width: "800px",
    margin: "0 auto",
  };

  const [todoData, setTodoData] = useState([
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
  ]);
  const [maxId, setMaxId] = useState(100);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");

  ///////////////////
  const deleteItem = (id) => {
    const newTodo = todoData.filter((element) => element.id !== id);
    setTodoData(newTodo);
  };

  ////////////////////////

  const addItem = (text) => {
    setMaxId(maxId + 1);
    const newItem = {
      id: maxId,
      label: text,
      important: false,
      done: false,
    };
    const newArray = [...todoData, newItem];
    setTodoData(newArray);
  };

  const onToggleImportant = (id) => {
    const newTodoData = todoData.map((element) => {
      return {
        ...element,
        important: element.id === id ? !element.important : element.important,
      };
    });
    setTodoData(newTodoData);
  };

  const onToggleDone = (id) => {
    const doneTodoData = todoData.map((element) => {
      return {
        ...element,
        done: element.id === id ? !element.done : element.done,
      };
    });
    setTodoData(doneTodoData);
  };

  const doneCount = todoData.filter((el) => el.done).length;

  const todoCount = todoData.length - doneCount;

  const onSearch = (term) => {
    setTerm(term);
  };

  const search = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  const itemFilter = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  };

  const visibleItems = itemFilter(search(todoData, term), filter);

  const onFilterChange = (filter) => {
    setFilter(filter);
  };
  return (
    <div style={style}>
      <AppHeader todo={todoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel onSearch={onSearch} />
        <ItemStatusFilter filter={filter} onFilterChange={onFilterChange} />
      </div>

      <TodoList
        todos={visibleItems}
        onDeleted={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
      />
      <ItemAddForm onItemAdded={addItem} />
    </div>
  );
}

export default App;
