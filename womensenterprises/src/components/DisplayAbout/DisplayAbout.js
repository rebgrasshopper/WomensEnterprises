import './DisplayAbout.css';
import {Link} from 'react-router-dom'

export default function DisplayAbout({aboutData}) {
    console.log(aboutData)
    if (aboutData) {
        return (
            <div id="DisplayAbout">
                 <div className="aboutDivText">
                    <h1 className="textH1">{aboutData.missionTitle}</h1>
                    <div className="textContent">{aboutData.mission}</div>
                </div>
                <div className="aboutDivText">
                    <h1 className="textH1">{aboutData.founderTitle}</h1>
                    <div id="aboutFounderDiv">
                        <img src={aboutData.founderImgUrl} alt="Photo of Dolly Duff, Founder"></img>
                        <div className="textContent">{aboutData.founderAbout}</div>
                    </div>
                </div>
                <div className="aboutDivText">
                    <div className="textContent">
                        {aboutData.communityPartnersLinkText}
                        <Link to = { process.env.PUBLIC_URL + "/communityPartners" }>Visit our Community Partners Page!</Link>
                    </div>
                </div>
                <div className="aboutDivText">
                    <h1 className="textH1">{aboutData.moreDetailsTitle}</h1>
                    <div className="textContent">{aboutData.moreDetails}</div>
                </div>
                <div className="aboutDivText">
                    <div className="textContent">
                        <Link to = { process.env.PUBLIC_URL + "/governmentVending" }>{aboutData.governmentVendingLinkText}</Link>
                    </div>
                </div>
            </div>
            )
    } else {
        return <div>still loading</div>;
    }
}