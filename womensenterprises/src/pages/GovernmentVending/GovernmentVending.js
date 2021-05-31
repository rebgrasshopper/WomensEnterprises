import Nav from '../../components/nav/nav';
import DisplayGovernmentVending from "../../components/DisplayGovernmentVending/DisplayGovernmentVending";
import axios from 'axios';
import {useEffect, useState} from 'react';
import Footer from "../../components/Footer/Footer";

export default function GovernmentVending(){


    const [ GovernmentVendingData, setGovernmentVendingData ] = useState({})


    const fetchData = async () => {
        axios
            .get('http://localhost:4001/api/governmentVending')
            .then(response => {
                console.log("Response Data:", response.data[0])
                setGovernmentVendingData(response.data[0])
            })
            .catch(error => console.error(`There was an error retrieving data: ${error}`))
    }


    useEffect(() => {
        fetchData()
    }, [])

    useEffect(()=>{
        console.log("GovernmentVendingData:", GovernmentVendingData)
    }, [GovernmentVendingData])





    return (
        <div className="main">
            <Nav />
            <DisplayGovernmentVending GovernmentVendingData = {GovernmentVendingData}/>
            <Footer />
        </div>
    )
}