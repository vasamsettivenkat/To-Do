import { useState } from 'react';
import './App.css'
import DoTask from './Components/DoTask';

function App() {
  const [newTask, setNewTask] =useState("");
  const[myTasks,setMyTasks] = useState(["Walking","Learning React","writing Notes","Designing Websites"])
  const [_completedTask, setCompletedTask] =useState([]);

  function handleInput(e){
    let newValue=e.target.value;
    setNewTask(newValue);
  }

  function addTask(){
    const trimmed = newTask.trim();
    if (!trimmed) return;
    setMyTasks(prev => [...prev, trimmed]);
    setNewTask("");
  }

  function deleteTask(taskName)
  {
    console.log(taskName)
    let afterDeleting= myTasks.filter(x=>x!=taskName)
    setMyTasks(afterDeleting)
  }

  function completeTask(taskName)
  {
    console.log(taskName)
    let completedTask= myTasks.filter(x=>x==taskName)
    let afterFiltering= myTasks.filter(x=>x!= taskName)
    setMyTasks(afterFiltering)
    setCompletedTask(prev=>[...prev,completedTask[0]])
  }

  function removeCompleted(taskName) {
    setCompletedTask(prev => prev.filter(x => x !== taskName))
  }

  return (
    <div className='main-body'>
      <div className='todo-list-main'>
        <h3>To Do List</h3>
      
      <div>
        <div className='todo-task-input'>
          <div className="form-floating w-75">
  <input type="text" className="form-control" id="floatingInput" placeholder="Todo Task" onChange={(e)=>{
   
   handleInput(e)
  }} value={newTask}/>
  <label htmlFor="floatingInput">Todo Task</label>
</div>
   <button className='btn btn-primary btn-sm w-25' onClick={()=>{addTask()}}>Add</button>
   </div>
   
<ul className='tasks-list'>
  {
    myTasks.map((task,index)=>
      <DoTask taskName={task} key={index} deleteTask={deleteTask} completeTask={completeTask}/>
    )
  }
  
</ul>
          { _completedTask.length > 0 && (
            <div className="completed-section">
              <h3>Completed Tasks</h3>
              <ul className="tasks-list">
                {_completedTask.map((task, item) => (
                  <li className="task" key={`done-${item}`}>
                    {task}
                    <button className='btn btn-sm btn-danger' onClick={() => removeCompleted(task)}>Remove</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
</div>
</div>
</div>
    
  )
}

export default App;
