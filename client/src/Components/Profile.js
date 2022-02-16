function Profile({ user }) {

console.log(user)
    return (
        <div>
            <h1>User Profile</h1>
            <h3>Username:</h3>
            <div>{user.map(user => user.username)}</div>
            <label>Change username:</label>
            <input type="text"></input><button>Submit</button>
        </div>
    )
}

export default Profile