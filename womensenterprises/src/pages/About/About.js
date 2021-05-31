import axios from 'axios';
import Nav from '../../components/nav/nav';
import { useEffect, useState } from 'react';
import DisplayAbout from '../../components/DisplayAbout/DisplayAbout';
import './About.css';
import Footer from "../../components/Footer/Footer";

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


    const fetchData = async () => {
        axios
            .get('http://localhost:4001/api/about')
            .then(response => {
                setAboutData(response.data[0])
            })
            .catch(error => console.error(`There was an error retrieving data: ${error}`))
    }


    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className="main">
            <Nav />

            <DisplayAbout aboutData={aboutData} />

            <Footer />
        </div>
    )
}