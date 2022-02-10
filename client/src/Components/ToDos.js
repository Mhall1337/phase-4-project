import { useEffect, useState } from "react"

function ToDos(){
    const [tasks, setTasks] = useState(null)

    useEffect(()=>{
        fetch('/to_dos')
        .then(r => r.json())
        .then(r => setTasks([r]))
    },[])
    if(tasks){
    return(
        <div>
          <h1>To-Dos</h1>
          <ul>{
            tasks.map((task, index)=> {
            return<li key={index}>{task.to_do}</li>
            })
            }</ul>
        </div>
    )}else{
        return(<div>Create Task</div>)
    }
}
export default ToDos