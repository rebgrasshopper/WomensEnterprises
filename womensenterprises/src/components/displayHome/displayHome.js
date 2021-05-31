import './displayHome.css';

export default function DisplayHome({homeData}) {
    if (homeData) {
        return (
            <div id="displayHome">
                <div className="textDiv">
                    <h1 className="textH1">{homeData.recentMessageTitle}</h1>
                    {homeData.recentMessage.split("\n").map((element, index) => {
                        return <div className = "textContent" key={index}>{element}</div>
                    })}
                </div>
                 <div className="textDiv">
                    <h1 className="textH1">{homeData.missionTitle}</h1>
                    {homeData.mission.split("\n").map((element, index) => {
                        return <div className = "textContent" key={index}>{element}</div>
                    })}
                </div>
                <div className="textDiv">
                    <h1 className="textH1">{homeData.resultsTitle}</h1>
                    {homeData.results.split("\n").map((element, index) => {
                        return <div className = "textContent" key={index}>{element}</div>
                    })}
                </div>
            </div>
            )
    } else {
        return <div>still loading</div>;
    }
}