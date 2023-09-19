import Header from "../header/Header"
import '../../css/home.css'
import NewRelease from "../new-release/NewRelease"
import Box from "../watch/Box"
import Continue from "../continue-watching/Continue"
import Trending from "../trending/Trending"

const Home =()=>{
    return(
        <>
        <div className="head-banner">
            <Header/>
            <div className="banner">
                    <img src="https://cdn.pixabay.com/photo/2021/11/01/16/17/clay-6760967_1280.jpg" alt="" />
            </div>
            <div className="site-container">
                <NewRelease/>
            </div>
        </div>
        <div className="site-container">
            <Continue/>
        </div>
        <div className="site-container">
            <Trending/>
        </div>
            
        </>
    )
}

export default Home 