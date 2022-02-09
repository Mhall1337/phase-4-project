import Motivations from "./Motivations"
import SignUpForm from "./SignUp";

function Home({onLogin}){
    return (
        <div>
            <h1>Home</h1>
            <Motivations />
            <SignUpForm onLogin={onLogin}/>
        </div>
    )
}
export default Home;