import './DisplayContact.css';
import {Link} from 'react-router-dom'
import EmailIcon from '../../images/icons/email.png';
import PhoneIcon from '../../images/icons/phone.png';
import FacebookIcon from '../../images/icons/facebook.png';
import InstagramIcon from '../../images/icons/instagram.png';

export default function DisplayContact({ContactData}) {
    console.log(ContactData)

    
    if (ContactData) {
        return (
            <div id="DisplayContact">
                 <div className="jumbotron contactJumbo">
                    <h1 className="textH1">Get In Touch!</h1>
                </div>
                {ContactData.instagram && <div className="contactButtons">
                    <Link to='#' onClick={(e) => {window.location = `mailto:${ContactData.email}`}}>
                        <img className = "contactIcon" src={EmailIcon} alt="envelope symbol"></img>
                    </Link>
                    <Link to={ContactData.phone}>
                        <img className = "contactIcon" src={PhoneIcon} alt="phone symbol"></img>
                    </Link>
                    <a href={ContactData.facebook}>
                        <img className = "contactIcon" src={FacebookIcon} alt="facebook symbol"></img>
                    </a>
                    <a href={ContactData.instagram}>
                        <img className = "contactIcon" src={InstagramIcon} alt="instagram symbol"></img>
                    </a>
                </div>    }
            </div>
            )
    } else {
        return <div>still loading</div>;
    }
}