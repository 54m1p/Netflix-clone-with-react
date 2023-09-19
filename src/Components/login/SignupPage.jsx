import logo from "../../Images/logo.svg";
import SignBgImg from "./SignBgImg";
import "../../css/signup.css";
import { Link } from "react-router-dom";
import {AiOutlineRight} from 'react-icons/ai';

const SignupPage = () => {
    return (
        <div>
            <SignBgImg />
            <div className="header-gradient">
                <div className="signup-header flex-between">
                    <span className="logo-div">
                        <img src={logo} alt="" className="sign-logo" />
                    </span>
                    <span>
                        <Link to="/login">
                            <button className="site-button signin-btn">Sign in</button>
                        </Link>
                    </span>
                </div>
            </div>
            <div className="section-full">
                <div className="center-xy">
                    <div>
                <div className=" banner-text">
                    <h1><strong>Unlimited movies, TV shows, and more</strong></h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
                <div className="d-flex justify-content-center align-item-center get-started">
                    <div>
                        <input type="text" name="signup-email "/>
                        <label htmlFor="signup-email"></label>
                    </div>
                    <div>
                        <button className="site-button">Get Started<AiOutlineRight/></button>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
