import React, {useState, useEffect} from "react";
import axios from 'axios';
import Nav from '../../components/nav/nav'
// import Images from '../../components/imageLoader/imageLoader';
import './Admin.css';
import AdminNav from '../../components/AdminNav/AdminNav';
import Footer from "../../components/Footer/Footer";


export default function Form() {

    const [ user, setUser ] = useState();

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
        },
        Admin: [
            {
                user: "",
                password: "",
                super: ""
            }
        ]
    })

    function handleChange(evt) {
        const formId = evt.target.dataset.form;
        const fieldName = evt.target.name
        const value = evt.target.value;
        if (formId === "CommunityPartnersList" || formId === "ProductList" || formId === "Admin") {
            const formIndex = evt.target.dataset.index;
            let falseObject = formState[formId];

            falseObject[formIndex][fieldName] = value;
            setFormState({
                ...formState,
                [formId]: falseObject
            });
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

    function handleRadioButton(evt) {
        console.log(evt.target.dataset.index)
        let falseForm = formState.Admin;
        falseForm[evt.target.dataset.index].super = evt.target.value === "true" ? true : false;
        setFormState({
            ...formState,
            Admin: falseForm
        })
    }


    function handleSubmit(evt) {
        evt.preventDefault();
        const target = evt.target.id;
        console.log("target from handleSubmit():", target)
        handleDataUpdate(target);
        fetchData();

    }   

    function handleDataDelete(event) {
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
                fetchData();
            })
            .catch(error => console.error(`There was an error creating the data`))
    }

    function handleDataUpdate(target) {
        if (target === "CommunityPartnersList" || target === "ProductList" || target === "Admin") {
            formState[target].forEach(listItem => {
                const targetId = listItem.id
                console.log("Inside list update, target ID:", targetId)
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
            console.log("inside object update")
            axios
                .put(`http://localhost:4001/api/update${target}`, formState[target])
                .then(res => {
                    fetchData();
                })
                .catch(error => console.error(`There was an error updating the data: ${error}`))
        }
    }


    const fetchData = async () => {
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
                                                                axios
                                                                .get('http://localhost:4001/api/admin')
                                                                    .then(response => {
                                                                        if (response.data[0]) {
                                                                            falseForm.Admin = response.data;
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
            })
            .catch(error => console.error(`There was an error retrieving home data: ${error}`))
        



    }

    function checkUser(username) {
        for (const userObject of formState.Admin) {
            if (userObject.user === username) {
                return true
            }
        }
        return false;
    }

    function logoutAdmin(){
        setUser();
    }

    function loginAdmin(event) {
        const username = event.target.adminUser.value;
        const userpassword = event.target.adminPassword.value;
        console.log(username, userpassword);
        if (checkUser(username)) {
            for (const userObject of formState.Admin) {
                if (userObject.password === userpassword) {
                    setUser(username);
                } else {
                    alert("oh no, wrong password")
                }
            }
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    console.log(user)

    return (
        <div className="main">
            <Nav />
            
            <div id="adminDiv">
                <AdminNav logoutAdmin={logoutAdmin} loginAdmin={loginAdmin} adminPermission = {checkUser(user)} handleRadioButton = {handleRadioButton} handleSubmit = {handleSubmit} handleDataDelete = {handleDataDelete} handleDataCreate = {handleDataCreate} handleChange = {handleChange} formState = {formState} />
            </div>
            <Footer />
        </div>
    );
}