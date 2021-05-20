import React from "react";
import axios from 'axios';
import Nav from '../../components/nav/nav'
import Images from '../../components/imageLoader/imageLoader';
import './Admin.css';
import AdminNav from '../../components/AdminNav/AdminNav';

export default function Form() {

    console.log(Images[0].default);

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
            missionTitle: "",
            mission: "",
            founderTitle: "",
            founderAbout: "",
            founderImgUrl: "",
            communityPartnersLinkText: "",
            moreDetailsTitle: "",
            moreDetails: "",
            governmentVendingLinkText: "",
        },
        CommunityPartners: {
            pageTitle: "",
            endBlurb: "",
            contactLinkText: "",
        },
        CommunityPartnersList: [
            {
                orgName: "",
                orgUrl: "",
                orgImgLink: "",
                orgBlurb: "",
            }
        ],
        GovernmentVending: {
            pageTitle: "",
            aboutVending: "",
            productsIntro: "",
            productsOutro: "",
            contactLinkText: "",
        },
        ProductList: [
            {
                prodName: "",
                prodImgLink: "",
                prodBlurb: "",
                prodPrice10: "",
                prodPrice50: "",
                prodPrice100: "",
                prodPrice500: "",
                prodPrice1000: "",
            }
        ],
        Contact: {
            email: "",
            phone: "",
            facebook: "",
            instagram: "",
        }
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
        const target = evt.target.id;
        console.log(formState)
        handleDataUpdate(target);
        
        // handleDataCreate(target);
    }   

    // function handleDataCreate(target) {
    //     axios
    //         .post(`http://localhost:4001/api/create${target}`, formState[target])
    //         .then(res => {
    //             console.log(res.data)
    //         })
    //         .catch(error => console.error(`There was an error creating the data`))
    // }

    const fetchData = async () => {
        const falseForm = formState;
        axios
            .get('http://localhost:4001/api/home')
            .then(response => {
                if (response.data[0]) {
                    console.log("Response Data:", response.data);
                    falseForm.Home = response.data[0];
                }
                axios
                    .get('http://localhost:4001/api/about')
                    .then(response => {
                        if (response.data[0]) {
                            console.log("Response Data:", response.data);
                            falseForm.About = response.data[0];
                        }
                        axios
                            .get('http://localhost:4001/api/communityPartners')
                            .then(response => {
                                if (response.data[0]) {
                                    console.log("Response Data:", response.data);
                                    falseForm.CommunityPartners = response.data[0];
                                }
                                axios
                                    .get('http://localhost:4001/api/governmentVending')
                                    .then(response => {
                                        if (response.data[0]) {
                                            console.log("Response Data:", response.data);
                                            falseForm.GovernmentVending = response.data[0];
                                        }
                                        axios
                                            .get('http://localhost:4001/api/contact')
                                            .then(response => {
                                                if (response.data[0]) {
                                                    console.log("Response Data:", response.data);
                                                    falseForm.Contact = response.data[0];
                                                }
                                                axios
                                                .get('http://localhost:4001/api/communityPartnersList')
                                                    .then(response => {
                                                        if (response.data[0]) {
                                                            console.log("Response Data:", response.data);
                                                            falseForm.CommunityPartnersList = response.data;
                                                        }
                                                        axios
                                                        .get('http://localhost:4001/api/productList')
                                                            .then(response => {
                                                                if (response.data[0]) {
                                                                    console.log("Response Data:", response.data);
                                                                    falseForm.ProductList = response.data;
                                                                }
                                                                setFormState(falseForm)
                                                            })
                                                            .catch(error => console.error(`There was an error retrieving home data: ${error}`))
                                                    })
                                                    .catch(error => console.error(`There was an error retrieving home data: ${error}`))
                                            })
                                            .catch(error => console.error(`There was an error retrieving home data: ${error}`))
                                    })
                                    .catch(error => console.error(`There was an error retrieving home data: ${error}`))
                            })
                            .catch(error => console.error(`There was an error retrieving home data: ${error}`))
                    })
                    .catch(error => console.error(`There was an error retrieving home data: ${error}`))
            })
            .catch(error => console.error(`There was an error retrieving home data: ${error}`))
        



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

    // function handleListItemCreation(target) {
    //     // axios
    //     //     .post(`http://localhost:4001/api/update${target}`,)
    // }


    React.useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="main">
            <Nav />
            
            <div id="adminDiv">
                <AdminNav handleSubmit = {handleSubmit} handleChange = {handleChange} formState = {formState} />
            </div>

        </div>
    );
}