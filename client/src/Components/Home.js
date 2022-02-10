
import Motivations from "./Motivations"

function Home({user}){
    
    if(user){
    return (
        <div>
            <h1>Home</h1>
            <Motivations />
        </div>
    )}else{
        return <h1>Must be logged in</h1>
    }
}


export default Home;