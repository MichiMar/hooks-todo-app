import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("Marekipa");
  const [taskItem, setTaskItems] = useState([
    { name: "Task One", done: false },
    { name: "Task Two", done: false },
    { name: "Task Three", done: false },
    { name: "Task Four", done: true },
  ]);

  const taskTableRows = () => {
    return taskItem.map((task) => (
      <tr key={task.name}>
        <td>{task.name}</td>
      </tr>
    ));
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>

        <tbody>{taskTableRows()}</tbody>
      </table>
    </div>
  );
}

export default App;
