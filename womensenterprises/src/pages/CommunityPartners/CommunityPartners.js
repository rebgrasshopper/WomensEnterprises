import Nav from '../../components/nav/nav';
import DisplayCommunityPartners from "../../components/DisplayCommunityPartners/DisplayCommunityPartners";
import axios from 'axios';
import {useEffect, useState} from 'react';
import Footer from "../../components/Footer/Footer";

export default function CommunityPartners(){


    const [ CommunityPartnersData, setCommunityPartnersData ] = useState(undefined)
    const [ CommunityPartnersList, setCommunityPartnersList ] = useState(undefined)


    const fetchData = async () => {
        axios
            .get('http://localhost:4001/api/communityPartners')
            .then(response => {
                console.log("Response Data:", response.data[0])
                setCommunityPartnersData(response.data[0])
                axios
                .get('http://localhost:4001/api/communityPartnersList')
                .then(response => {
                    console.log("Response Data:", response.data)
                    setCommunityPartnersList(response.data)
                })
                .catch(error => console.error(`There was an error retrieving data: ${error}`))
            })
            .catch(error => console.error(`There was an error retrieving data: ${error}`))
    }


    useEffect(() => {
        fetchData()
    }, [])

    useEffect(()=>{
        console.log("CommunityPartnersData:", CommunityPartnersData)
    }, [CommunityPartnersData])





    return (
        <div className="main">
            <Nav />
            <DisplayCommunityPartners CommunityPartnersData = {CommunityPartnersData} CommunityPartnersList = {CommunityPartnersList}/>
            <Footer />
        </div>
    )
}