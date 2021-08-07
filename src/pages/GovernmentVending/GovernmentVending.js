import Nav from '../../components/nav/nav';
import DisplayGovernmentVending from "../../components/DisplayGovernmentVending/DisplayGovernmentVending";
import axios from 'axios';
import {useEffect, useState} from 'react';
import Footer from "../../components/Footer/Footer";
import "./DisplayGovernmentVending.css";

export default function GovernmentVending(){


    const [ GovernmentVendingData, setGovernmentVendingData ] = useState({});
    const [ ProductData, setProductData ] = useState([]);


    const fetchData = async () => {
        axios
            .get('https://dn1jzsyzm5.execute-api.us-east-2.amazonaws.com/governmentVending')
            .then(response => {
                setGovernmentVendingData(response.data)
            })
            .catch(error => console.error(`There was an error retrieving data: ${error}`))
        axios
            .get('https://dn1jzsyzm5.execute-api.us-east-2.amazonaws.com/productList')
            .then(response => {
                setProductData(response.data)
            })
    }


    useEffect(() => {
        fetchData()
    }, [])




    return (
        <div className="main">
            <Nav />
            <DisplayGovernmentVending GovernmentVendingData = {GovernmentVendingData} ProductData={ProductData}/>
            <Footer />
        </div>
    )
}