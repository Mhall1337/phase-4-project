function Friday({tasks}){
    let friday = tasks.filter(task => task.date_due === "Friday")
  
    return(
        <div>
          <h1>Friday</h1>
          <ul>{
            friday.map((task, index)=> {
            return<li key={index}>{task.to_do}</li>
            })
            }</ul>
        </div>
    )
}
export default Friday