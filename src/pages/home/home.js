import axios from 'axios';
import Nav from '../../components/nav/nav';
import { useEffect, useState } from 'react';
import CarouselComponent from "../../components/carousel/carousel";
import pic1 from '../../images/Landing/pexels-andrea-piacquadio-cropped.jpg';
import pic2 from '../../images/Landing/pexels-rfstudio-cropped.jpg';
import pic3 from '../../images/Landing/pexels-matheus-bertelli-cropped.jpg';
import pic4 from '../../images/Landing/pexels-rodnae-productions-7491615.jpg';
import DisplayHome from '../../components/DisplayHome/DisplayHome';
import Footer from "../../components/Footer/Footer";
import './home.css';

export default function Home(){


    const [ homeData, setHomeData ] = useState({
        recentMessageTitle: '',
        recentMessage: '',
        missionTitle: '',
        mission: '',
        resultsTitle: '',
        results: ''
    })


    let photos = [
        {photo: pic3, alt:"Photo by Matheus Bertelli, from Pexels", title:"Photo by Matheus Bertelli, from Pexels", caption:"Let's create opportunities for women to succeed"},
        {photo: pic4, alt:"Photo by RFStudio, from Pexels", title:"Photo by RFStudio, from Pexels", caption:"Let's support women lead organizations"},
        {photo: pic1, alt:"Photo by Anna Tarazevich, from Pexels", title:"Photo by Anna Tarazevich, from Pexels", caption:"Let's bring to life ideas from minority voices"},
        {photo: pic2, alt:"Photo by Andrea Piacquadio, from Pexels", title:"Photo by Andrea Piacquadio, from Pexels", caption:"Let's support women in our communities"},
    ];

    const fetchData = async () => {
        axios
            .get('https://dn1jzsyzm5.execute-api.us-east-2.amazonaws.com/home')
            .then(response => {
                setHomeData(response.data)
            })
            .catch(error => console.error(`There was an error retrieving data: ${error}`))
    }


    useEffect(() => {
        fetchData()
        console.log("Landing page images from Pexels: RFStudio, Anna Tarazevich, Andrea Piacquadio, Matheus Bertelli")
    }, [])

    return (
        <div className="main">
            <Nav></Nav>
            
            <div id="homepage">
                <CarouselComponent photos={photos} />
                <DisplayHome homeData = {homeData} />
                <Footer />
            </div>
        </div>
        )
}