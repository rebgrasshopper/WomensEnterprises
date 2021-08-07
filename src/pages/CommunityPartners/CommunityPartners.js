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
            .get('https://dn1jzsyzm5.execute-api.us-east-2.amazonaws.com/communityPartners')
            .then(response => {
                setCommunityPartnersData(response.data)
                axios
                .get('https://dn1jzsyzm5.execute-api.us-east-2.amazonaws.com/communityPartnersList')
                .then(response => {
                    setCommunityPartnersList(response.data)
                })
                .catch(error => console.error(`There was an error retrieving data: ${error}`))
            })
            .catch(error => console.error(`There was an error retrieving data: ${error}`))
    }


    useEffect(() => {
        fetchData()
    }, [])





    return (
        <div className="main">
            <Nav />
            <DisplayCommunityPartners CommunityPartnersData = {CommunityPartnersData} CommunityPartnersList = {CommunityPartnersList}/>
            <Footer />
        </div>
    )
}