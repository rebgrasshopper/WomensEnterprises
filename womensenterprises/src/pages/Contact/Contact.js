import Nav from '../../components/nav/nav';
import DisplayContact from "../../components/DisplayContact/DisplayContact";
import axios from 'axios';
import {useEffect, useState} from 'react';
import Footer from "../../components/Footer/Footer";

export default function Contact(){


    const [ ContactData, setContactData ] = useState({})

    const fetchData = async () => {
        axios
            .get('http://localhost:4001/api/contact')
            .then(response => {
                setContactData(response.data[0])
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