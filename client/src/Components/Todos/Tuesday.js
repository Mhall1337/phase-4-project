function Tuesday({tasks}){
    let tuesday = tasks.filter(task => task.date_due === "Tuesday")
  
    return(
        <div>
          <h1>Tuesday</h1>
          <ul>{
            tuesday.map((task, index)=> {
                //console.log(task)
            return<li key={index}>{task.to_do}</li>
            })
            }</ul>
        </div>
    )
}
export default Tuesday