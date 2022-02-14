function Sunday({tasks}){
    let sunday = tasks.filter(task => task.date_due === "Sunday")
  
    return(
        <div className="day">
          <h1>Sunday</h1>
          <ul>{
            sunday.map((task, index)=> {
            return<li key={index}>{task.to_do}</li>
            })
            }</ul>
        </div>
    )
}
export default Sunday