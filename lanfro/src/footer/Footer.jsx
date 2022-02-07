import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import './footer.css'
const Footer=()=>{
    return (
        <>
        <div className="footer">
            <div className="aboutus">
                <p className="about">ABOUT US</p>
                <p className="doorstep">Doorstep Wash & Dryclean Service</p>
            </div>
            <div className="footer_home">
                <p className="fhome">Home</p>
                <p className="fsignin">SignIn</p>
                <p className="fregister">Register</p>

            </div>
            <div className="footer_price">
                <p className="fpricing">Pricing</p>
            </div>
            <div className="footer_career">
                <p className="fcareer">Career</p>
                <p className="fblogs">Blogs</p>
                <p className="fcreate">Create</p>
            </div>
            <div className="footer_contact">
                <p className="fcontact">Contact</p>
            </div>
            <div className="socialmedia">
                <p className="fmedia">SOCIAL MEDIA</p>
                <div className='icons'>
                <img src={facebook} alt="facebook"/>
                <img src={instagram} alt="instagram"/>
                <img src={linkedin} alt="linkedin"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer