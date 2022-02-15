function Friday({tasks, deleteTask}){
    let friday = tasks.filter(task => task.date_due === "Friday")
  
    return(
        <div className="day">
          <h1>Friday</h1>
          <ul>{
            friday.map((task, index)=> {
                return <li key={index}>{task.to_do}  <button onClick={()=>deleteTask(task.id)}>Delete Task</button></li> 
            })
            }</ul>
        </div>
    )
}
export default Friday