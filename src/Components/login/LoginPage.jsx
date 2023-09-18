import logo from '../../Images/logo.svg'
import '../../css/login.css'
import LoginFooter from './LoginFooter'
import SigninForm from './SigninForm'

const LoginPage =()=>{
    return(
        <>
        <div className='login-body'>
            <div className='sign-header'>
            <span className='logo-div'>
                <img src={logo} alt="" className='site-logo' />
            </span>
            </div>
            {/* signin form */}
            <div>
            <SigninForm/>
            <div>
                <p></p>
            </div>
            </div>
            <LoginFooter/>
        </div>
        
        </>
    )
}
export default LoginPage