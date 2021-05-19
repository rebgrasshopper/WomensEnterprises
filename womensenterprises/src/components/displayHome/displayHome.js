import './displayHome.css';

export default function DisplayHome({homeData}) {
    console.log(homeData)
    if (homeData) {
        return (
            <div id="displayHome">
                <div className="textDiv">
                    <h1 className="textH1">{homeData.recentMessageTitle}</h1>
                    <div className="textContent">{homeData.recentMessage}</div>
                </div>
                 <div className="textDiv">
                    <h1 className="textH1">{homeData.missionTitle}</h1>
                    <div className="textContent">{homeData.mission}</div>
                </div>
                <div className="textDiv">
                    <h1 className="textH1">{homeData.resultsTitle}</h1>
                    <div className="textContent">{homeData.results}</div>
                </div>
            </div>
            )
    } else {
        return <div>still loading</div>;
    }
}