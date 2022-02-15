

function Home({user}){
    
    if(user){
    return (
        <div className="home">
            <h1>Home</h1>
            <a href="https://www.kindpng.com/imgv/TTwxhoi_lets-get-this-bread-sticker-hd-png-download/"><img className="home-image" src="https://www.kindpng.com/picc/m/631-6317952_lets-get-this-bread-sticker-hd-png-download.png" alt="ducks gettin bread"></img></a>
        </div>
    )}else{
        return <h1>Must be logged in</h1>
    }
}


export default Home;