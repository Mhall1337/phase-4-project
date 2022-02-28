function Profile({ user, setUser }) {

    console.log(user)
    function deleteUser() {
        fetch(`/users`, { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    function updateUsername() {
        
        fetch("/users", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: document.querySelector("#root > div > div:nth-child(2) > input[type=text]").value
            })
        }).then(r =>{
            if(r.ok){
                return r.json().then(r => setUser([r]))
            }
        })
        
    }

    return (
        <div>
            <h1>User Profile</h1>
            <h3>Username:</h3>
            <div>{user.map(user => user.username)}</div>
            <label>Change username:</label>
            <input type="text"></input><button onClick={updateUsername}>Submit</button>
            <br></br>
            <button onClick={deleteUser}>DELETE PROFILE</button>
        </div>
    )
}

export default Profile