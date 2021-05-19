export default function AdminForm({ handleSubmit, handleChange, formState, page }) {
    if (page === "Home") {
        return (
            <form id="Home" onSubmit={handleSubmit}>
                <label>
                    What's going on with WE? Title: 
                    <input
                    type="text"
                    name="recentMessageTitle"
                    data-form="Home"
                    value={formState.Home.recentMessageTitle}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <label>
                    What's going on with WE? Text: 
                    <textarea
                    type="text"
                    rows="10"
                    cols="80"
                    name="recentMessage"
                    data-form="Home"
                    value={formState.Home.recentMessage}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <label>
                    Landing Page Mission Title: 
                    <input
                    type="text"
                    name="missionTitle"
                    data-form="Home"
                    value={formState.Home.missionTitle}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <label>
                    Landing Page Mission Text: 
                    <textarea
                    type="text"
                    rows="10"
                    cols="80"
                    name="mission"
                    data-form="Home"
                    value={formState.Home.mission}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <label>
                    Landing Page Results Title: 
                    <input
                    type="text"
                    name="resultsTitle"
                    data-form="Home"
                    value={formState.Home.resultsTitle}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <label>
                    Landing Page Results Text: 
                    <textarea
                    type="text"
                    rows="10"
                    cols="80"
                    name="results"
                    data-form="Home"
                    value={formState.Home.results}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <button type="submit">Submit</button>
            </form>
        )
    } else {
        return <div>No info for this page</div>
    }
}