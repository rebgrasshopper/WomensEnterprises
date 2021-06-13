import './displayHome.css';
import Vert1 from "../../images/icons/VertFaces1.png";
import Vert2 from "../../images/icons/VertFaces2.png";

export default function DisplayHome({homeData}) {
    if (homeData) {
        return (
            <div id="displayHome">
                <div className="textDiv">
                    <div className="textDivContent">
                        <h1 className="textH1">{homeData.recentMessageTitle}</h1>
                        <div className="textDivContentWords">
                            {homeData.recentMessage.split("\n").map((element, index) => {
                                return <div className = "textContent" key={index}>{element}</div>
                            })}
                        </div>
                    </div>
                </div>
                    {/* <img className="faceImages" src={Faces1} alt="Women's Faces"></img> */}
                 <div className="textDiv">
                    <img className="verticalFaces" src={Vert1} alt="Women's Faces"></img>
                     <div className="textDivContent">
                        <h1 className="textH1">{homeData.missionTitle}</h1>
                        {homeData.mission.split("\n").map((element, index) => {
                            return <div className = "textContent" key={index}>{element}</div>
                        })}
                     </div>
                        <img className="verticalFaces" src={Vert2} alt="Women's Faces"></img>
                </div>
                {/* <img className="faceImages" src={Faces2} alt="Women's Faces"></img> */}
                <div className="textDiv">
                    <div className="textDivContent">
                        <h1 className="textH1">{homeData.resultsTitle}</h1>
                        {homeData.results.split("\n").map((element, index) => {
                            return <div className = "textContent" key={index}>{element}</div>
                        })}
                    </div>
                </div>
            </div>
            )
    } else {
        return <div>still loading</div>;
    }
}