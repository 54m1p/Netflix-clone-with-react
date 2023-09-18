import { Link } from "react-router-dom"
import footList from '../../json/login-footer.json'
import '../../css/footer.css'

const LoginFooter = ()=>{
    console.log(footList.items,'---footlist')
    return(
        <div className="site-footer text-white">
            <div className="foot-container">
                <p className="footer-top">Questions? Contact us</p>
                <ul className="footer-links">
                    {footList.items.map((item)=>(
                        <li>
                            {/* <Link className="link"></Link> */}{item.item}
                        </li>
                    ))}
                    
                </ul>
            </div>
        </div>
    )
}

export default LoginFooter