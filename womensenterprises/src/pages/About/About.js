import axios from 'axios';
import Nav from '../../components/nav/nav';
import { useEffect, useState } from 'react';
import DisplayAbout from '../../components/DisplayAbout/DisplayAbout';
import './About.css';

export default function About(){

    const [ aboutData, setAboutData ] = useState({
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
            .get('http://localhost:4001/api/about')
            .then(response => {
                console.log("Response Data:", response.data[0])
                setAboutData(response.data[0])
                setLoading(false)
            })
            .catch(error => console.error(`There was an error retrieving data: ${error}`))
    }


    useEffect(() => {
        fetchData()
    }, [])

    useEffect(()=>{
        console.log("AboutData:", aboutData)
    }, [aboutData])


    return (
        <div>
            <Nav />

            <DisplayAbout aboutData={aboutData} />
        </div>
    )
}