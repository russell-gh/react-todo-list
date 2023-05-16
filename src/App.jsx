import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      { name: "Clean car", done: false },
      { name: "Buy milk", done: true },
      { name: "Buy bread", done: false },
    ],
    error: false,
  };

  onInput = (e) => {
    this.setState({ input: e.target.value });
  };

  onClick = () => {
    //defensive check
    let { input, todos } = this.state;
    if (!input || input.length < 4 || todos.includes(input)) {
      this.setState({ error: true });
      return; //you already added this!
    }

    todos = [...this.state.todos, { name: this.state.input, done: false }];
    this.setState({ todos, error: false });
  };

  onDoneToggle = (name) => {
    const todos = [...this.state.todos];

    const indexOf = todos.findIndex((todo) => {
      return todo.name === name;
    });

    todos[indexOf].done = !todos[indexOf].done;
    this.setState({ todos });
  };

  render() {
    const { todos, error } = this.state;

    return (
      <>
        <h1>Russells Todo List</h1>
        <div>
          <input type="text" onInput={this.onInput} />
          <p>{error && "Invalid input"}</p>
          <button onClick={this.onClick}>Add</button>
          <ul>
            {todos.map((todo, index) => {
              return (
                <li
                  onClick={() => this.onDoneToggle(todo.name)}
                  className={todo.done ? "done" : "undone"}
                >
                  {todo.name}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
