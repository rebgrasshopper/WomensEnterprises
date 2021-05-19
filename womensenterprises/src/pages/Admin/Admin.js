import React from "react";
import axios from 'axios';
import Nav from '../../components/nav/nav'
import Images from '../../components/imageLoader/imageLoader';
import './Admin.css';
import AdminNav from '../../components/AdminNav/AdminNav';

export default function Form() {

    // console.log(Images[0].default);

    const [formState, setFormState] = React.useState({
        Home: {
            recentMessageTitle: "",
            recentMessage: "",
            missionTitle: "",
            mission:"",
            resultsTitle:"",
            results:""
        },
        About: {

        },
    })

    function handleChange(evt) {
        console.log("formState:", formState)
        const formId = evt.target.dataset.form;
        const fieldName = evt.target.name
        const value = evt.target.value;
        console.log("Targeting", formId)
        let falseObject = {
            ...formState,
            [formId]: {
                ...formState[formId],
                [fieldName]: value
            }
        }
        setFormState({
            ...formState,
            [formId]: {
                ...formState[formId],
                [fieldName]: value
            }
        });
        console.log("falseFormState:", falseObject);
    }


    function handleSubmit(evt) {
        evt.preventDefault();
        console.log("EVENT TARGET:", evt.target.id)
        console.log(formState)
        handleDataUpdate(evt.target.id);
        // handleDataCreate();
    }   

    function handleDataCreate(target) {
        axios
            .post(`http://localhost:4001/api/create${target}`, formState[target])
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
                setFormState({
                    ...formState,
                    Home: response.data[0]
                })
            })
            .catch(error => console.error(`There was an error retrieving home data: ${error}`))
        // axios
        //     .get('http://localhost:4001/api/about')
        //     .then(response => {
        //         console.log("Response Data:", response.data)
        //         setFormState({
        //             ...formState,
        //             About: response.data[0]
        //         })
        //     })
        //     .catch(error => console.error(`There was an error retrieving home data: ${error}`))
        // axios
        //     .get('http://localhost:4001/api/communityPartners')
        //     .then(response => {
        //         console.log("Response Data:", response.data)
        //         setFormState({
        //             ...formState,
        //             CommunityPartners: response.data[0]
        //         })
        //     })
        //     .catch(error => console.error(`There was an error retrieving home data: ${error}`))
        // axios
        //     .get('http://localhost:4001/api/governmentVending')
        //     .then(response => {
        //         console.log("Response Data:", response.data)
        //         setFormState({
        //             ...formState,
        //             GovernmentVending: response.data[0]
        //         })
        //     })
        //     .catch(error => console.error(`There was an error retrieving home data: ${error}`))
        // axios
        //     .get('http://localhost:4001/api/contact')
        //     .then(response => {
        //         console.log("Response Data:", response.data)
        //         setFormState({
        //             ...formState,
        //             Contact: response.data[0]
        //         })
        //     })
        //     .catch(error => console.error(`There was an error retrieving home data: ${error}`))
    }

    function handleDataUpdate(target) {
        axios
            .put(`http://localhost:4001/api/update${target}`, formState[target])
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
        <div>
            <Nav />
            
            <div id="adminDiv">
                <AdminNav handleSubmit = {handleSubmit} handleChange = {handleChange} formState = {formState} />
            </div>

        </div>
    );
}