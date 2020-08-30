import React, { useState } from "react";
import { TaskRow } from "./components/TaskRow";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("Marekipa");
  const [taskItem, setTaskItems] = useState([
    { name: "Task One", done: false },
    { name: "Task Two", done: false },
    { name: "Task Three", done: false },
    { name: "Task Four", done: true },
  ]);

  const toggleTask = (task) =>
    setTaskItems(
      taskItem.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  const taskTableRows = () =>
    taskItem.map((task) => (
      <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
    ));

  return (
    <div className="App">
      <h1>Hello World</h1>
      <table className="table table-striped table-bordered">
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
