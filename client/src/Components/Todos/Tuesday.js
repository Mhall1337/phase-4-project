function Tuesday({tasks, deleteTask}){
    let tuesday = tasks.filter(task => task.date_due === "Tuesday")
  
    return(
        <div className="day">
          <h1>Tuesday</h1>
          <ul>{
            tuesday.map((task, index)=> {
                return <li key={index}>{task.to_do}  <button onClick={()=>deleteTask(task.id)}>Delete Task</button></li> 
            })
            }</ul>
        </div>
    )
}
export default Tuesday