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
            .get('http://localhost:4001/api/governmentVending')
            .then(response => {
                setGovernmentVendingData(response.data[0])
            })
            .catch(error => console.error(`There was an error retrieving data: ${error}`))
        axios
            .get('http://localhost:4001/api/productList')
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