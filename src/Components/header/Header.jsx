import navMenu from '../../json/nav-bar.json'
import logo from '../../Images/logo.svg'
import '../../css/header.css'
import {BsSearch} from 'react-icons/bs'
import {IoNotificationsSharp} from 'react-icons/io5'
import {BiCaretDown} from 'react-icons/bi'
import {Link} from 'react-router-dom'

const Header =()=>{
    console.log('navmenu',navMenu.menu)
    return(
        <div>
        <div className='d-flex align-items-center justify-content-around nav-bar'>
            <div className='site-logo'><Link to='/browse'><img src={logo} alt="" /></Link></div> 
            <div><ul className='d-flex gap-3 align-items-end nav-menu'>
                {navMenu.menu .map((menu)=>(
                    <li>
                        {menu.name} 
                    </li>
                ))}
            </ul>
            </div>
            <div className='d-flex align-items-center gap-1 header-icons'>
                <BsSearch size={24}/>
                <IoNotificationsSharp size={24}/>
                <span className='d-flex align-items-center'>
                    <button className='account-btn'><img src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png" alt=""/></button>
                    <BiCaretDown/>
                </span>
            </div>
            </div>
        </div>
    )
}

export default Header; 