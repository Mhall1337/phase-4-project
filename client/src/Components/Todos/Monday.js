function Monday(){
    return(
        <div>
          <h1>To-Dos</h1>
          <ul>{
            tasks.map((task, index)=> {
            return<li key={index}>{task.to_do}</li>
            })
            }</ul>
        </div>
    )
}
export default Monday