import React from "react";
import axios from 'axios';
import Images from '../../components/imageLoader/imageLoader';

export default function Form() {

    console.log(Images[0].default);

    const [formState, setFormState] = React.useState({
        recentMessageTitle: "",
        recentMessage: "",
        missionTitle: "",
        mission:"",
        resultsTitle:"",
        results:""
    })

    function handleChange(evt) {
        const value = evt.target.value;
        setFormState({
            ...formState,
            [evt.target.name]: value
        });
    }


    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(formState)
        handleDataUpdate();
        // handleDataCreate();
    }   

    function handleDataCreate() {
        axios
            .post('http://localhost:4001/api/createHome', {
                recentMessageTitle: formState.recentMessageTitle,
                recentMessage: formState.recentMessage,
                missionTitle: formState.missionTitle,
                mission: formState.mission,
                resultsTitle: formState.resultsTitle,
                results: formState.results
            })
            .then(res => {
                console.log(res.data)
            })
            .catch(error => console.error(`There was an error creating the data`))
    }

    const fetchData = async () => {
        axios
            .get('http://localhost:4001/api/home')
            .then(response => {
                console.log("Response Data:", response.data)
                setFormState(response.data[0])
            })
            .catch(error => console.error(`There was an error retrieving data: ${error}`))
    }

    function handleDataUpdate() {
        axios
            .put('http://localhost:4001/api/updateHome', {
                recentMessageTitle: formState.recentMessageTitle,
                recentMessage: formState.recentMessage,
                missionTitle: formState.missionTitle,
                mission: formState.mission,
                resultsTitle: formState.resultsTitle,
                results: formState.results
            })
            .then(res => {
                console.log('data updated: ', res.data)
                fetchData();
            })
            .catch(error => console.error(`There was an error updating the data: ${error}`))
    }


    React.useEffect(() => {
        fetchData()
        console.log(formState)
    }, [])

    return (
        <form onSubmit={handleSubmit}>
        <label>
            What's going on with WE? Title: 
            <input
            type="text"
            name="recentMessageTitle"
            value={formState.recentMessageTitle}
            onChange={handleChange}
            ></input>
        </label><br></br>
        <label>
            What's going on with WE? Text: 
            <input
            type="text"
            name="recentMessage"
            value={formState.recentMessage}
            onChange={handleChange}
            ></input>
        </label><br></br>
        <label>
            Landing Page Mission Title: 
            <input
            type="text"
            name="missionTitle"
            value={formState.missionTitle}
            onChange={handleChange}
            ></input>
        </label><br></br>
        <label>
            Landing Page Mission Text: 
            <input
            type="text"
            name="mission"
            value={formState.mission}
            onChange={handleChange}
            ></input>
        </label><br></br>
        <label>
            Landing Page Results Title: 
            <input
            type="text"
            name="resultsTitle"
            value={formState.resultsTitle}
            onChange={handleChange}
            ></input>
        </label><br></br>
        <label>
            Landing Page Results Text: 
            <input
            type="text"
            name="results"
            value={formState.results}
            onChange={handleChange}
            ></input>
        </label><br></br>
        <button type="submit">Submit</button>
        </form>
    );
}