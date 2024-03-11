import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setcompletedTasks] = useState([]);
  const add = (value) => {
    setPendingTasks(prev => [...prev, task]);
    document.getElementById("task").value = "";
  };
  const complete = (task) => {
    setcompletedTasks(prev => [...prev, task]);
    setPendingTasks(prev => prev.filter((t) => t !== task));
  };
  const remove = (task) => {
    setcompletedTasks(prev => prev.filter((t) => t !== task));
    setPendingTasks(prev => prev.filter((t) => t !== task));
  };

  return (
    <div className="card">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          add(document.getElementById("task").value);
        }}
      >
        <div>
          <h2>To-Do Planner</h2>
          <label name="task-label">Task: </label>
          <input type="text" name="task" id="task" />
        </div>
        <button type="submit">Add Task</button>
      </form>
      <div id="status">
        <table id="pending-table">
          <thead>
            <tr>
              <th id="done-btn">Status</th>
              <th id="task-detail">Pending Tasks</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pendingTasks.map((task) => {
              return (
                <tr key={task}>
                  <td id="chkbox">
                    <input
                      type="checkbox"
                      id="done-btn"
                      name="done-btn"
                      onClick={() => complete(task)}
                      value={task}
                    />
                  </td>
                  <td id="task-detail">{task}</td>
                  <td>
                    <button
                      onClick={() => {
                        remove(task);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        <table id="complete-table">
          <thead>
            <tr>
              <th id="done-btn">Status</th>
              <th id="task-detail">Completed Tasks</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {completedTasks.map((task) => {
              return (
                <tr key={task}>
                  <td id="chkbox">
                    <input
                      type="checkbox"
                      id="done-btn"
                      defaultChecked
                      name="done-btn"
                      value={task}
                      disabled
                    />
                  </td>
                  <td id="task-detail">
                    <s>{task}</s>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        remove(task);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
