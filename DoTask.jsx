import React from "react";
function DoTask({taskName,deleteTask,completeTask}){
    return(
        <>
        <li className='task'>
    {taskName}
    <div className='task-buttons w-5'>
      <button className="btn btn-sm btn-success" onClick={()=>{completeTask(taskName)}}>Complete</button>
      <button className='btn btn-sm btn-danger' onClick={()=>{deleteTask(taskName)}}>Delete</button>
    </div>
    </li>
        </>
    )
}
export default DoTask;