import Box from "../watch/Box"
import '../../css/trending.css'

const Trending =()=>{
    return(
        <div className=" trending-now">
        <h3>Trending Now</h3>
        <div className="new-items flex-between">
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        </div>
    </div>
    )
}

export default Trending