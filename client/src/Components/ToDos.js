import { useEffect, useState } from "react"

function ToDos() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('/to_dos')
            .then(r => {
                if (r.ok) {
                    return r.json().then(r => setTasks([r]))
                }
            })
    }, [])
    function addTask(e) {
        e.preventDefault()
        fetch("")
    }
    return (
        <div>
            <h3>Log In</h3>
            <form onSubmit={addTask}>
                <label>Task</label>
                <input type="text" id="username" value={username}></input>
                <label>Password:</label>
                <input type="password" id="password" value={password}></input>
                <input type="submit"></input>
            </form>
            <br></br>
            <div>Not A Current User?<button onClick={() => history.push("/signup")}>Sign Up!</button></div>
        </div>
    )
}
export default ToDos