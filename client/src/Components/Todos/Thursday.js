function Thursday({tasks, deleteTask}){
    let thursday = tasks.filter(task => task.date_due === "Thursday")
  
    return(
        <div className="day">
          <h1>Thursday</h1>
          <ul>{
            thursday.map((task, index)=> {
                return <li key={index}>{task.to_do}  <button onClick={()=>deleteTask(task.id)}>Delete Task</button></li> 
            })
            }</ul>
        </div>
    )
}
export default Thursday