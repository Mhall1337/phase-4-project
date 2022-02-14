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
        console.log(e.target.date_due.value)
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
    }
    return (
        <div>
            <h3>Tasks For The Week</h3>
            <form onSubmit={addTask}>
                <label>Task</label>
                <input type="text" id="to_do" value={to_do} onChange={e => setTo_Do(e.target.value)}></input>
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
            <Monday tasks={tasks} /> <Tuesday tasks={tasks}/> <Wednesday tasks={tasks}/> <Thursday tasks={tasks}/> <Friday tasks={tasks}/>
            <Saturday tasks={tasks}/> <Sunday tasks={tasks}/>
        </div>
    )
}
export default ToDos