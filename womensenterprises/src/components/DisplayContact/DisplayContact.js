import './DisplayContact.css';
import {Link} from 'react-router-dom'
import EmailIcon from '../../images/icons/email.png';

export default function DisplayContact({ContactData}) {
    console.log(ContactData)
    if (ContactData) {
        return (
            <div id="DisplayContact">
                 <div className="Jumbotron">
                    <h1 className="textH1">Get In Touch!</h1>
                </div>
                <div className="ContactButtons">
                    <div className="emailButton">
                    <Link to='#' onClick={(e) => {window.location = `mailto:${ContactData.email}`}}>
                        <img className = "contactIcon" src={EmailIcon} alt="envelope icon"></img>
                    </Link>
                    {ContactData.email}
                    </div>
                </div>
            </div>
            )
    } else {
        return <div>still loading</div>;
    }
}