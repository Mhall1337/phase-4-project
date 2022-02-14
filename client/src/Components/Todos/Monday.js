function Monday({tasks}){
    let monday = tasks.filter(task => task.date_due === "Monday")
    return(
        <div className="day">
          <h1>Monday</h1>
          <ul>{
            monday.map((task, index)=> {
            return<li key={index}>{task.to_do}</li>
            })
            }</ul>
        </div>
    )
}
export default Monday