export default function DisplayHome({homeData}) {
    console.log(homeData)
    if (homeData) {
        return (
            <div>
                <h1>{homeData.recentMessageTitle}</h1>
                <div>{homeData.recentMessage}</div>
                <h1>{homeData.missionTitle}</h1>
                <div>{homeData.mission}</div>
                <h1>{homeData.resultsTitle}</h1>
                <div>{homeData.results}</div>
            </div>
            )
    } else {
        return null;
    }
}