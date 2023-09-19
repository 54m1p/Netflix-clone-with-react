import '../../css/login.css'
import {Link} from 'react-router-dom'

const SigninForm = ()=>{
    const handleChange =(val)=>{
        // {val == 1 &&  }
    }   
    return(
        <div>
            <div className="signin-form">
                <div className='signin-div'>
                    <h1 className='text-white'>Sign In</h1>
                    <div className='position-relative'>
                        <input type="text" name='email' id="inp-email" onChange={handleChange(1)} />
                    <label htmlFor="email" className='position-absolute form-label' id='label-email'>Email or phone number</label>
                    </div>
                    <div className='position-relative'>
                        <input type="password" name='password' id="inp-pswd" onChange={handleChange(2)}/>
                        <label htmlFor="password" className='position-absolute form-label' id='label-pswd'>Password</label>    
                    </div>
                    <div><button className="site-button form-signin">Sign In</button></div>
                    <div className='flex-between text-light remember-me'>
                        <div className='d-flex align-items-center'>
                        <input type="checkbox" id='remember-me' className='mr-1' />
                        <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <div>
                            <span>Need Help?</span>
                        </div>
                    </div>
                    <div>
                        <p><span>New to Netflix? </span><span><Link to = '/' className='link'>Sign up now</Link></span></p>
                    </div>
                    </div>
                    <div className=''></div>
                </div>

        </div>
    )
}

export default SigninForm