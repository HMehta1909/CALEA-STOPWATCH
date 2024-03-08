import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const [pendingTasks, setPendingTasks]=useState([]);
  const [completedTasks, setcompletedTasks]=useState([]);


  const add= (value)=>{
    const updatedTaskList = [...pendingTasks, value];
    setPendingTasks(updatedTaskList);
    document.getElementById('task').value="";
  }

  const complete =(task)=>{
    const updatedTaskList = [...completedTasks, task];
    setcompletedTasks(updatedTaskList);
    setPendingTasks(pendingTasks.filter((t) => t !== task ));
  }

  const remove= (task)=>{
    setcompletedTasks(completedTasks.filter((t) => t !== task ));
    setPendingTasks(pendingTasks.filter((t) => t !== task ));
  }

  useEffect(
    ()=>{
      console.log("Re-rendered");
      }
    ,
    [pendingTasks, completedTasks])


  return (
    <div className="card">
    <form onSubmit={(e)=>{e.preventDefault();add(document.getElementById('task').value);}}>
    <div>
    <label name= "task-label">Task: </label>
    <input type="text" name="task" id='task' plasholder="task here..." />
    </div>
    <button type="submit" >Add Task</button>
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
          {
            pendingTasks.map(
                  (task)=>{
                  return(
                    
                    <tr key={task}>
                    <td>
                      <input type="checkbox" id="done-btn" name="done-btn" onClick={() => complete(task)} value={task}/>
                      {/* <button id="done-btn" onClick={() => complete(task)}>Done</button> */}
                    </td>
                    
                    <td id="task-detail">{task}</td>
                    <td><button onClick={() => {remove(task)}}>Remove</button></td>
                  </tr>
                  )
                })
          }
        </tbody>
    </table>
    <br/>
    <table id="complete-table">
        <thead>
            <tr>
                <th id="done-btn">Status</th>
                <th id="task-detail">Completed Tasks</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
          {
            completedTasks.map(
                  (task)=>{
                  return(
                    <tr key={task}>
                    <td>
                    <input type="checkbox" id="done-btn" defaultChecked name="done-btn" value={task} disabled/>
                      {/* <button id="done-btn" onClick={() => {}} disabled>Done</button> */}
                    </td>
                    <td id="task-detail">{task}</td>
                    <td><button onClick={() => {remove(task)}}>Remove</button></td>
                  </tr>
                  )
                })
          }
        </tbody>
    </table>
    </div>
    </div>
  );
}

export default App;