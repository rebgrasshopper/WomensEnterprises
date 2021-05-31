import React, {useState, useEffect, useCallback} from "react";
import axios from 'axios';
import Nav from '../../components/nav/nav'
// import Images from '../../components/imageLoader/imageLoader';
import './Admin.css';
import AdminNav from '../../components/AdminNav/AdminNav';
import Footer from "../../components/Footer/Footer";


export default function Form() {


    const [formState, setFormState] = useState({
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
        const formId = evt.target.dataset.form;
        const fieldName = evt.target.name
        const value = evt.target.value;
        if (formId === "CommunityPartnersList" || formId === "ProductList") {
            const formIndex = evt.target.dataset.index;
            let falseObject = formState[formId];

            falseObject[formIndex][fieldName] = value;
            setFormState({
                ...formState,
                [formId]: falseObject
            });
            console.log( fieldName, ":", falseObject[formIndex][fieldName])
        } else {
            setFormState({
                ...formState,
                [formId]: {
                    ...formState[formId],
                    [fieldName]: value
                }
            });
        }
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        const target = evt.target.id;
        handleDataUpdate(target);
        fetchData();

    }   

    function handleDataDelete(event) {
        console.log('id', event.target.dataset.id)
        const target = event.target.dataset.target;
        const id = event.target.dataset.id;
        axios({
            method: 'DELETE',
            url: `http://localhost:4001/api/remove${target}`,
            data: {
            id: id
            }
          })
            .then(res => {
                fetchData();
            })
            .catch(error => console.error(`There was an error deleting the data`))
    }

    function handleDataCreate(event) {
        const target = event.target.dataset.target;
        axios
            .post(`http://localhost:4001/api/create${target}`, formState[target])
            .then(res => {
                console.log(res.data)
                fetchData();
            })
            .catch(error => console.error(`There was an error creating the data`))
    }

    function handleDataUpdate(target) {
        if (target === "CommunityPartnersList" || target === "ProductList") {
            formState[target].forEach(listItem => {
                const targetId = listItem.id
                axios
                .put(`http://localhost:4001/api/update${target}`, {
                    id: targetId,
                    update: listItem
                })
                .then(res => {
                    fetchData();
                })
                .catch(error => console.error(`There was an error updating the data: ${error}`))

            })
        } else {
            axios
                .put(`http://localhost:4001/api/update${target}`, formState[target])
                .then(res => {
                    fetchData();
                })
                .catch(error => console.error(`There was an error updating the data: ${error}`))
        }
    }


    const fetchData = useCallback( async () => {
        const falseForm = formState;
        axios
            .get('http://localhost:4001/api/home')
            .then(response => {
                if (response.data[0]) {
                    falseForm.Home = response.data[0];
                }
                axios
                    .get('http://localhost:4001/api/about')
                    .then(response => {
                        if (response.data[0]) {
                            falseForm.About = response.data[0];
                        }
                        axios
                            .get('http://localhost:4001/api/communityPartners')
                            .then(response => {
                                if (response.data[0]) {
                                    falseForm.CommunityPartners = response.data[0];
                                }
                                axios
                                    .get('http://localhost:4001/api/governmentVending')
                                    .then(response => {
                                        if (response.data[0]) {
                                            falseForm.GovernmentVending = response.data[0];
                                        }
                                        axios
                                            .get('http://localhost:4001/api/contact')
                                            .then(response => {
                                                if (response.data[0]) {
                                                    falseForm.Contact = response.data[0];
                                                }
                                                axios
                                                .get('http://localhost:4001/api/communityPartnersList')
                                                    .then(response => {
                                                        if (response.data[0]) {
                                                            falseForm.CommunityPartnersList = response.data;
                                                        }
                                                        axios
                                                        .get('http://localhost:4001/api/productList')
                                                            .then(response => {
                                                                if (response.data[0]) {
                                                                    falseForm.ProductList = response.data;
                                                                }
                                                                setFormState({
                                                                    ...formState,
                                                                    ...falseForm
                                                                })
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
        



    }, [formState])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <div className="main">
            <Nav />
            
            <div id="adminDiv">
                <AdminNav handleSubmit = {handleSubmit} handleDataDelete = {handleDataDelete} handleDataCreate = {handleDataCreate} handleChange = {handleChange} formState = {formState} />
            </div>
            <Footer />
        </div>
    );
}