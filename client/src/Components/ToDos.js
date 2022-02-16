import { useEffect, useState } from "react"
import Friday from "./Todos/Friday"
import Monday from "./Todos/Monday"
import Saturday from "./Todos/Saturday"
import Sunday from "./Todos/Sunday"
import Thursday from "./Todos/Thursday"
import Tuesday from "./Todos/Tuesday"
import Wednesday from "./Todos/Wedesday"

function ToDos() {
    const [tasks, setTasks] = useState([])
    const [to_do, setTo_Do] = useState("")
    const [date_due, setDate_due] = useState("")

    useEffect(() => {
        fetch('/to_dos')
            .then(r => {
                if (r.ok) {
                    return r.json().then(r => setTasks(r))
                }
            })
    }, [])

    function addTask(e) {
        e.preventDefault()
        fetch("/to_dos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                to_do: to_do,
                date_due: date_due,
            }),
        }).then(r => {
            if (r.ok) {
                return r.json().then((r) => {
                    setTasks([r, ...tasks])
                })
            }
            else {
                alert("Something went wrong")
            }
        })
        setTo_Do("")
        e.target.date_due.value = ""
    }
    function deleteTask(id){
        console.log(id)
        const updatedTasks = tasks.filter(task => task.id !== id)
        setTasks(updatedTasks)
        fetch(`/to_dos/${id}`,{
            method: "DELETE"
        })
    }
    return (
        <div className="todosContainer">
            <h1 className="todo_header">Tasks For The Week</h1>
            <form onSubmit={addTask} className="todo_form">
                <label>Task</label>
                <input type="text" id="to_do" value={to_do} onChange={e => setTo_Do(e.target.value)} style={{width:250}}></input>
                <label>Day:</label>
                <select type="text" id="date_due" onChange={e => setDate_due(e.target.value)}>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>
                <input type="submit"></input>
            </form>
            <div className="column">
                <Monday tasks={tasks} deleteTask={deleteTask}/> <Tuesday tasks={tasks} deleteTask={deleteTask}/> <Wednesday tasks={tasks} deleteTask={deleteTask}/>
            </div>
            <div className="column">
                <Thursday tasks={tasks} deleteTask={deleteTask}/> <Friday tasks={tasks} deleteTask={deleteTask}/> <Saturday tasks={tasks} deleteTask={deleteTask}/>
            </div>
            <div className="sunday"><Sunday tasks={tasks} deleteTask={deleteTask}/></div>
             
        </div>
    )
}
export default ToDos