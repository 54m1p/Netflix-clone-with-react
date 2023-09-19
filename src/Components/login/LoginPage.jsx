import logo from '../../Images/logo.svg'
import '../../css/login.css'
import LoginFooter from './LoginFooter'
import SignBgImg from './SignBgImg'
import SigninForm from './SigninForm'
import {Link} from 'react-router-dom'

const LoginPage =()=>{
    return(
        <>
        <div className='login-body'>
            <div className='sign-header header-gradient'>
            <span className='logo-div'>
                <Link to='/'>
                    <img src={logo} alt="" className='sign-logo' />
                </Link>
            </span>
            </div>
            {/* signin form */}
            <div>
            <SigninForm/>
            </div>
            <LoginFooter/>
        </div>
        
        </>
    )
}
export default LoginPage