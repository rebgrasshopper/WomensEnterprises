import './DisplayCommunityPartners.css';
import {Link} from 'react-router-dom'

export default function DisplayCommunityPartners({CommunityPartnersData}) {
    console.log(CommunityPartnersData)
    if (CommunityPartnersData) {
        return (
            <div id="DisplayCommunityPartners">
                 <div className="Jumbotron">
                    <h1 className="textH1">{CommunityPartnersData.pageTitle}</h1>
                </div>
                <div className="CPDivText">
                    <div className="textContent">
                        {CommunityPartnersData.endBlurb}
                        <Link to = { process.env.PUBLIC_URL + "/contact" }>{CommunityPartnersData.contactLinkText}</Link>
                    </div>
                </div>
            </div>
            )
    } else {
        return <div>still loading</div>;
    }
}