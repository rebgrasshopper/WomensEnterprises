import './AdminNav.css';
import { useState } from 'react';
import AdminForm from '../AdminForm/AdminForm';

export default function AdminNav({ handleSubmit, handleDataDelete, handleDataCreate, handleChange, formState }) {

    const [page, setPage] = useState("SelectPage");

    function handlePageChoice(e){
        setPage(e.target.value)
    }

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
                </select>
            </div>
            <AdminForm  page = {page} handleSubmit = {handleSubmit} handleDataDelete = {handleDataDelete} handleDataCreate = {handleDataCreate} handleChange = {handleChange} formState = {formState}/>
        </div>
        )
}