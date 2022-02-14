function Thursday({tasks}){
    let thursday = tasks.filter(task => task.date_due === "Thursday")
  
    return(
        <div className="day">
          <h1>Thursday</h1>
          <ul>{
            thursday.map((task, index)=> {
            return<li key={index}>{task.to_do}</li>
            })
            }</ul>
        </div>
    )
}
export default Thursday