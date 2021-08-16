import React, {useState, useEffect} from "react";
import axios from 'axios';
import Nav from '../../components/nav/nav'
// import Images from '../../components/imageLoader/imageLoader';
import './Admin.css';
import AdminNav from '../../components/AdminNav/AdminNav';
import Footer from "../../components/Footer/Footer";
import { useAlert } from 'react-alert'


export default function Form() {

    const [ user, setUser ] = useState();
    const [ adminPermission, setadminPermission ] = useState(false);

    const [formState, setFormState] = useState({
        home: {
            recentMessageTitle: "",
            recentMessage: "",
            missionTitle: "",
            mission:"",
            resultsTitle:"",
            results:""
        },
        about: {
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
        communityPartners: {
            pageTitle: "",
            endBlurb: "",
            contactLinkText: "",
        },
        communityPartnersList: [
            {
                orgName: "",
                orgUrl: "",
                orgImgLink: "",
                orgBlurb: "",
            }
        ],
        governmentVending: {
            pageTitle: "",
            aboutVending: "",
            productsIntro: "",
            productsOutro: "",
            contactLinkText: "",
        },
        productList: [
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
        contact: {
            email: "",
            phone: "",
            facebook: "",
            instagram: "",
        },
        admin: [
            {
                user: "",
                password: ""
            }
        ]
    })

    const alert = useAlert();

    useEffect(()=>{
        console.log("Newly Set Form:", formState)
    }, [formState])

    useEffect(() => {
        console.log("current user:", user)
    }, [user])
    
    function showLoginSuccess(){
        alert.show("Please take care with your changes.");
    }

    function showLoginFailure(){
        alert.show("Invalid username/password combination");
    }

    function showChangeSuccess(){
        alert.show("Changes saved.");
    }

    function handleChange(evt) {
        const formId = evt.target.dataset.form;
        const fieldName = evt.target.name
        const value = evt.target.value;
        if (formId === "communityPartnersList" || formId === "productList" || formId === "admin") {
            const formIndex = evt.target.dataset.index;
            let falseObject = formState[formId];
            console.log('keys', Object.keys(falseObject), 'object:', falseObject)
            console.log('formIndex:', formIndex, 'fieldName:', fieldName, 'value:', value)
            for (const item of falseObject){
                if (item.id == formIndex) {
                    console.log('changed object index', formIndex)
                    item[fieldName] = value
                }
            }
            setFormState({
                ...formState,
                [formId]: falseObject
            });
        } else {
            let falseObject = formState;
            falseObject[formId.toLowerCase()][fieldName] = value;
            setFormState({
                ...falseObject
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
        console.log("handleSubmit Target:", target, formState[target])
        handleDataUpdate(target);
        fetchData();
        showChangeSuccess();
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
                console.log(res)
                fetchData();
            })
            .catch(error => console.error(`There was an error deleting the data`))
    }

    function handleDataCreate(event) {
        const target = event.target.dataset.target;
        axios
            .post(`http://localhost:4001/api/create${target}`, formState[target])
            .then(res => {
                console.log(res)
                fetchData();
            })
            .catch(error => console.error(`There was an error creating the data`))
    }

    function handleDataUpdate(target) {
        if (target === "communityPartnersList" || target === "productList" || target === "admin") {
            formState[target].forEach(listItem => {
                const targetId = listItem.id
                console.log("Inside list update, target ID:", targetId)
                console.log("listItem", listItem)
                listItem.tableName = target;
                axios
                .put(`https://7w710d6s8g.execute-api.us-west-2.amazonaws.com`, listItem)
                .then(res => {
                    console.log('data from updating!', res.data.body)
                    fetchData();
                })
                .catch(error => console.error(`There was an error updating the data: ${error}`))

            })
        } else {
            console.log("inside object update")
            let sendData = formState[target]
            sendData.tableName = target;
            console.log("data sent:", sendData)
            axios
                .put(`https://7w710d6s8g.execute-api.us-west-2.amazonaws.com`, formState[target])
                .then(res => {
                    console.log("RESULT:", res);
                    fetchData();
                })
                .catch(error => console.error(`There was an error updating the data: ${error}`))
        }
    }


    const fetchData = async () => {

        axios
        .get('https://7w710d6s8g.execute-api.us-west-2.amazonaws.com/')
            .then(response => {
                console.log(response.data)
                setFormState(response.data)

            })
            .catch(error => console.error(`There was an error retrieving data: ${error}`))

        



    }

    function checkUser(username, userpassword, called=false) {
        axios
        .get('https://7w710d6s8g.execute-api.us-west-2.amazonaws.com/admin/'+username)
            .then(response => {
    
                for (const userThing of response.data) {
                    if (userThing.user === username) {
                        setUser(userThing.user)
                        console.log("checkUser sending back user data for", userThing.user)
                            console.log("now in loginAdmin")
                            for (const userThing of response.data) {
                                console.log(userThing)
                                if (userThing.user === username && userThing.password === userpassword) {
                                    console.log("Found User!")
                                    setUser(userThing.user);
                                    setadminPermission(true);
                                    showLoginSuccess();
                                    return true
                                }
                            }
                        if (called){
                            showLoginFailure();
                        }
                        return false;
                    }
                }
            })
            .catch(error => console.error(`There was an error retrieving data: ${error}`))
        
        return false;
    }

    function logoutAdmin(){
        setUser();
        setadminPermission(false);
    }

    function loginAdmin(event) {
        event.preventDefault();
        const username = event.target.adminUser.value;
        const userpassword = event.target.adminPassword.value;
        checkUser(username, userpassword, true);
        console.log("checkking user data")
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="main">
            <Nav />
            
            <div id="adminDiv">
                <AdminNav user={user} checkUser={checkUser} logoutAdmin={logoutAdmin} loginAdmin={loginAdmin} adminPermission = {adminPermission} handleRadioButton = {handleRadioButton} handleSubmit = {handleSubmit} handleDataDelete = {handleDataDelete} handleDataCreate = {handleDataCreate} handleChange = {handleChange} formState = {formState} />
            </div>
            <Footer />
        </div>
    );
}