import axios from 'axios';
import { useEffect, useState } from 'react';
import CarouselComponent from "../../components/carousel/carousel";
import pic1 from '../../images/Landing/pexels-andrea-piacquadio-cropped.jpg';
import pic2 from '../../images/Landing/pexels-anna-tarazevich-cropped.jpg';
import pic3 from '../../images/Landing/pexels-matheus-bertelli-cropped.jpg';
import pic4 from '../../images/Landing/pexels-rfstudio-cropped.jpg';
import DisplayHome from '../../components/displayHome/displayHome';

export default function Home(){

    const [ homeData, setHomeData ] = useState({
        recentMessageTitle: '',
        recentMessage: '',
        missionTitle: '',
        mission: '',
        resultsTitle: '',
        results: ''
    })

    const [ loading, setLoading ] = useState(true);

    let photos = [
        {photo: pic2, alt:"Photo by Andrea Piacquadio, from Pexels", caption:"Let's support women in our communities"},
        {photo: pic1, alt:"Photo by Anna Tarazevich, from Pexels", caption:"Let's bring to life ideas from minority voices"},
        {photo: pic4, alt:"Photo by RFStudio, from Pexels", caption:"Let's support women lead organizations"},
        {photo: pic3, alt:"Photo by Matheus Bertelli", caption:"Let's create opportunities for women to suceed"}
    ];

    const fetchData = async () => {
        axios
            .get('http://localhost:4001/api/home')
            .then(response => {
                console.log("Response Data:", response.data)
                setHomeData(response.data[0])

                setLoading(false)
            })
            .catch(error => console.error(`There was an error retrieving data: ${error}`))
    }


    useEffect(() => {
        fetchData()
    }, [])

    console.log("Home Data from home.js: ", homeData)
    console.log("loading from home.js:", loading)
    return (
        <div>
            <CarouselComponent photos={photos} />
            {loading ? <div>Loading</div> : <DisplayHome homeData = {homeData}/>}
            
        </div>
        )
}