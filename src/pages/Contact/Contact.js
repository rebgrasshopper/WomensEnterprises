import Nav from '../../components/nav/nav';
import DisplayContact from "../../components/DisplayContact/DisplayContact";
import axios from 'axios';
import {useEffect, useState} from 'react';
import Footer from "../../components/Footer/Footer";

export default function Contact(){


    const [ ContactData, setContactData ] = useState({})

    const fetchData = async () => {
        axios
            .get('https://r3tz0m64u9.execute-api.us-west-2.amazonaws.com/contact')
            .then(response => {
                setContactData(response.data)
            })
            .catch(error => console.error(`There was an error retrieving data: ${error}`))
    }


    useEffect(() => {
        fetchData()
    }, [])




    return (
        <div className="main">
            <Nav />
            <DisplayContact ContactData = {ContactData}/>
            <Footer />
        </div>
    )
}