import './DisplayAbout.css';
import {useEffect} from 'react';
import {Link} from 'react-router-dom'
import HeroImage from '../../images/Landing/pexels-hoang-loc-cropped.jpg';

export default function DisplayAbout({aboutData}) {
    useEffect(() =>{
        console.log("Hero image from Pexels: Hoang Loc")
    }, [])
    if (aboutData) {
        return (
            <div id="DisplayAbout">
                <figure className = "jumbotron">
                    <img id="heroImg" src = {HeroImage} alt="person reclining on a bench looking through a magnifying glass"></img>
                </figure>
                 <div className="aboutDivText">
                    <h1 className="textH1">{aboutData.missionTitle}</h1>
                    <div className="textContent">{aboutData.mission.split("\n").map((element, index) => {
                        return <div className = "textContent" key={index}>{element}</div>
                    })}</div>
                </div>
                <div className="aboutDivText">
                    <h1 className="textH1 founderTitle">{aboutData.founderTitle}</h1>
                    <div id="aboutFounderDiv">
                        <img src={aboutData.founderImgUrl} alt="Dolly Duff, Founder"></img>
                        {aboutData.founderAbout.split("\n").map((element, index) => {
                            return <div className = "textContent" key={index}>{element}</div>
                        })}
                    </div>
                </div>
                <div className="aboutDivText">
                    <div>
                        {aboutData.communityPartnersLinkText + " "}
                        <Link to = { process.env.PUBLIC_URL + "/communityPartners" }>Visit our Community Partners Page!</Link>
                    </div>
                </div>
                <div className="aboutDivText">
                    <h1 className="textH1">{aboutData.moreDetailsTitle}</h1>
                    <div className="textContent">{aboutData.moreDetails.split("\n").map((element, index) => {
                        return <div className = "textContent" key={index}>{element}</div>
                    })}</div>
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