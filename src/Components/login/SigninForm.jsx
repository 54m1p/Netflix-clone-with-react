import '../../css/login.css'

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
                    <div><button className="site-button">Sign In</button></div>
                    <div className='d-flex justify-content-between align-items-center text-light'>
                        <div className='d-flex align-items-center'>
                        <input type="checkbox" id='remember-me' className='mr-1' />
                        <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <div>
                            <span>Need Help?</span>
                        </div>
                    </div>
                    </div>
                    <div className=''></div>
                </div>

        </div>
    )
}

export default SigninForm