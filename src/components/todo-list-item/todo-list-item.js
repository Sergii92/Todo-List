import React, { Component } from "react";
import "./todo-list-item.css";

class TodoListIem extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleDone,
      onToggleImportant,
      done,
      important,
    } = this.props;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }
    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>
        <div>
          <button
            type="button"
            className="btn btn-outline-success btn-sm float-right"
            onClick={onToggleImportant}
          >
            <i className="fa fa-exclamation" />
          </button>
          <button type="button" className="tn btn-outline-danger btn-sm">
            <i className="fa fa-trash-o" onClick={onDeleted} />
          </button>
        </div>
      </span>
    );
  }
}

export default TodoListIem;
