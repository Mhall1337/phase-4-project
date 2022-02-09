function Login(){
    return (
        <div>
          <h1>Login</h1>
          <form>
            <div>
              <input type="text" id="username" placeholder="Username" />
            </div>
            <div>
              <input type="password" id="password" placeholder="Password" />
            </div>
            <input type="submit" value="Submit" />
          </form>
          <div>or signup? add</div>
        </div>
      );
}
export default Login