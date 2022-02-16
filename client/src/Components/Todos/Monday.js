

function Monday({ tasks, deleteTask }) {

    let monday = tasks.filter(task => task.date_due === "Monday")

    return (
        <div className="day">
            <h1>Monday</h1>
            <ul>{
                monday.map((task, index) => {
                    return (
                        <li key={index}>{task.to_do}  
                            <button onClick={() => deleteTask(task.id)}>Delete Task</button>
                        </li>
                    )
                })
            }</ul>
        </div>
    )
}
export default Monday