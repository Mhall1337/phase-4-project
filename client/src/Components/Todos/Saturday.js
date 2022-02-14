function Saturday({tasks}){
    let saturday = tasks.filter(task => task.date_due === "Saturday")
  
    return(
        <div>
          <h1>Saturday</h1>
          <ul>{
            saturday.map((task, index)=> {
            return<li key={index}>{task.to_do}</li>
            })
            }</ul>
        </div>
    )
}
export default Saturday