import Nav from '../../components/nav/nav';
import DisplayCommunityPartners from "../../components/DisplayCommunityPartners/DisplayCommunityPartners";
import axios from 'axios';
import {useEffect, useState} from 'react';

export default function CommunityPartners(){


    const [ CommunityPartnersData, setCommunityPartnersData ] = useState({
        missionTitle: "",
        mission: "",
        founderTitle: "",
        founderAbout: "",
        founderImgUrl: "",
        communityPartnersLinkText: "",
        moreDetailsTitle: "",
        moreDetails: "",
        governmentVendingLinkText: "",
    })

    const [ loading, setLoading ] = useState(true);

    const fetchData = async () => {
        axios
            .get('http://localhost:4001/api/communityPartners')
            .then(response => {
                console.log("Response Data:", response.data[0])
                setCommunityPartnersData(response.data[0])
                setLoading(false)
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
        <div>
            <Nav />
            <DisplayCommunityPartners CommunityPartnersData = {CommunityPartnersData}/>
        </div>
    )
}