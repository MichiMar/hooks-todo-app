import React, { useState } from "react";
import "./App.css";
import { TaskRow } from "./components/TaskRow";
import { TaskBanner } from "./components/TaskBanner";
import { TaskCreator } from "./components/TaskCreator";

function App() {
  const [userName, setUserName] = useState("Marekipa");
  const [taskItems, setTaskItems] = useState([
    { name: "Task One", done: false },
    { name: "Task Two", done: false },
    { name: "Task Three", done: false },
    { name: "Task Four", done: true },
  ]);

  const createNewTask = (taskName) => {
    if (!taskItems.find((t) => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  const toggleTask = (task) =>
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  const taskTableRows = () =>
    taskItems.map((task) => (
      <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
    ));

  return (
    <div className="App">
      <TaskBanner userName={userName} taskItems={taskItems} />
      <TaskCreator callback={createNewTask} />
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
