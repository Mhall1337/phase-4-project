function Wednesday({tasks, deleteTask}){
    let wednesday = tasks.filter(task => task.date_due === "Wednesday")
  
    return(
        <div className="day">
          <h1 >Wednesday</h1>
          <ul>{
            wednesday.map((task, index)=> {
                return <li key={index}>{task.to_do}  <button onClick={()=>deleteTask(task.id)}>Delete Task</button></li> 
            })
            }</ul>
        </div>
    )
}
export default Wednesday