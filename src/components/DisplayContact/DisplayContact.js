import './DisplayContact.css';
import {Link} from 'react-router-dom'
import EmailIcon from '../../images/icons/email.png';
import PhoneIcon from '../../images/icons/phone.png';
import FacebookIcon from '../../images/icons/facebook.png';
import InstagramIcon from '../../images/icons/instagram.png';

export default function DisplayContact({ContactData}) {

    
    if (ContactData) {
        return (
            <div id="DisplayContact">
                 <div className="jumbotron contactJumbo">
                    <h1 className="textH1">Get In Touch!</h1>
                </div>
                {ContactData.instagram && <div className="contactButtons">
                    <div className="entireContactType">
                        <Link className="contactLink" to='#' onClick={(e) => {window.location = `mailto:${ContactData.email}`}}>
                            <img className = "contactIcon" src={EmailIcon} alt="envelope symbol"></img>
                            <div id="email" className="contactInfoDiv">{ContactData.email}</div>
                        </Link>
                    </div>
                    <div className="entireContactType">
                        <Link className="contactLink" to={ContactData.phone}>
                            <img className = "contactIcon" src={PhoneIcon} alt="phone symbol"></img>
                            <div id="phone" className="contactInfoDiv">{ContactData.phone}</div>
                        </Link>
                    </div>
                    <div className="entireContactType">
                        <a className="contactLink" href={ContactData.facebook}>
                            <img className = "contactIcon" src={FacebookIcon} alt="facebook symbol"></img>
                            <div id="facebook" className="contactInfoDiv">{"Women's Enterprises Trust"}</div>
                        </a>
                    </div>
                    <div className="entireContactType">
                        <a className="contactLink" href={ContactData.instagram}>
                            <img className = "contactIcon" src={InstagramIcon} alt="instagram symbol"></img>
                            <div id="email" className="contactInfoDiv">{ContactData.instagram.replace("https://www.instagram.com/","").replace("/", "")}</div>
                        </a>
                    </div>
                </div>    }
            </div>
            )
    } else {
        return <div>still loading</div>;
    }
}