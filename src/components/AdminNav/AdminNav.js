import './AdminNav.css';
import { useState } from 'react';
import AdminForm from '../AdminForm/AdminForm';

export default function AdminNav({ checkUser, user, logoutAdmin, loginAdmin, adminPermission, handleRadioButton, handleSubmit, handleDataDelete, handleDataCreate, handleChange, formState }) {

    const [page, setPage] = useState("SelectPage");


    console.log("AdminNav:", formState)

    function handlePageChoice(e){
        setPage(e.target.value)
    }

    if (adminPermission) {
        return (
            <div id="adminNav">
                <div id="formChoiceDiv">
                    <label id="chooseLabel" htmlFor="navSelect">Choose page to edit:</label>
                    <select name="navSelect" onChange = {handlePageChoice}>
                        <option value = "SelectPage">Select a Page</option>
                        <option value = "Home">Home</option>
                        <option value = "About">About</option>
                        <option value = "Community Partners">Community Partners</option>
                        <option value = "CommunityPartnersList">List of Community Partners</option>
                        <option value = "Government Vending">Government Vending</option>
                        <option value = "ProductList">List of Products</option>
                        <option value = "Contact">Contact</option>
                        <option value = "Admin">Admin</option>
                    </select>
                </div>
                <AdminForm user={user} checkUser={checkUser} logoutAdmin={logoutAdmin} handleRadioButton = {handleRadioButton} page = {page} handleSubmit = {handleSubmit} handleDataDelete = {handleDataDelete} handleDataCreate = {handleDataCreate} handleChange = {handleChange} formState = {formState}/>
            </div>
        )
    } else {
        return (
            <div id="adminNav">
                <div id="formChoiceDiv">
                    Please Log In
                </div>
                <form id="adminLogin" onSubmit={loginAdmin}>
                    <label id="adminUser" htmlFor="adminUser">
                        User
                        <input name="adminUser" type="text"></input>
                    </label>
                    <label id="adminPassword" htmlFor="adminPassword">
                        Password
                        <input name="adminPassword" type="password"></input>
                    </label>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}