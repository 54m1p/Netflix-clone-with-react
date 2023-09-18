import logo from '../../Images/logo.svg'
import SignBgImg from './SignBgImg'
// import '../../css/login.css'

const SignupPage = ()=>{
    return(
        <div>
            <SignBgImg/>
            <div className='sign-header d-flex justify-content-around align-items-center'>
            <span className='logo-div'>
                <img src={logo} alt="" className='site-logo' />
            </span>
            <span> <button className="site-button">Sign in</button></span>
            </div>
        </div>
    )
}

export default SignupPage