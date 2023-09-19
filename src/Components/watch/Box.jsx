import {useState} from 'react'
import movie from '../../json/movie.json' 
import thumbnail from '../../Images/thumbnail.jpg'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import {IoAddCircleOutline} from 'react-icons/io5'
import {SlLike} from 'react-icons/sl'
import {PiCaretDownBold} from 'react-icons/pi'
import '../../css/box.css'

const Box = ()=>{
    console.log(movie, 'movie from box ')
    const [isHover,setIsHover] = useState(false)
    const handleMouseEnter = ()=>{
        setIsHover(true)
    }
    const handleMouseLeave = ()=>{
        console.log(isHover,'is hover from mouse leave')
        setIsHover(false)
    }
    console.log(isHover,'ishover')
    return(
        <div className='box'>
                <div className='card-image'><img src={thumbnail} alt=""/></div>
                <div className='box-hover'>
                    <div className='flex-between box-hover-icons'> 
                <BsFillPlayCircleFill color='white'/>
                <IoAddCircleOutline color='white'/>
                <SlLike color='white'/>
                <PiCaretDownBold color='white'/>
                </div>
                <div>
                    <div className='flex-between'> 
                    <span>New</span>
                    {movie.adult && <span>18+</span>}
                    {!movie.adult && <span>13+</span>}
                    <span>Time</span>    
                    <span className='border-0'>HD</span>
                    </div>
                </div>
                <ul className='flex-between'>
                    {movie.genres.map((genre)=>(
                        <>
                            <li>{genre.name}</li>
                        </>
                    ))}
                </ul>
                </div>
        </div>
    )
}
export default Box