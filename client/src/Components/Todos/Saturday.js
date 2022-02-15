function Saturday({tasks, deleteTask}){
    let saturday = tasks.filter(task => task.date_due === "Saturday")
  
    return(
        <div className="day">
          <h1>Saturday</h1>
          <ul>{
            saturday.map((task, index)=> {
                return <li key={index}>{task.to_do}  <button onClick={()=>deleteTask(task.id)}>Delete Task</button></li> 
            })
            }</ul>
        </div>
    )
}
export default Saturday