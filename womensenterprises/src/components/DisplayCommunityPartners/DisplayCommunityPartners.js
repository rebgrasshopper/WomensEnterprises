import './DisplayCommunityPartners.css';
import {Link} from 'react-router-dom'

export default function DisplayCommunityPartners({CommunityPartnersData, CommunityPartnersList}) {
    if (CommunityPartnersData && CommunityPartnersList) {
        return (
            <div id="DisplayCommunityPartners">
                 <div className="Jumbotron">
                    <h1 className="textH1">{CommunityPartnersData.pageTitle}</h1>
                </div>
                <div className="CPCardsDiv">
                    {CommunityPartnersList.map(partner => {
                        return (
                            <div className="card partnerCard" key={partner.id}>
                                <img className="card-img partnerImg" src={partner.orgImgLink} alt={partner.id}></img>
                                <div className="card-text partnerText">
                                    <h2 className="cart-title partnerTitle"><a href={partner.orgUrl}>{partner.orgName}</a></h2>
                                    <p>{partner.orgBlurb}</p>
                                </div>
                            </div>
                        )
                    })}
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