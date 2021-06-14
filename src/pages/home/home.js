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
// import { API } from 'aws-amplify';
// import { listTodos } from '../../graphql/queries';
// import { createTodo as createTodoMutation, deleteTodo as deleteTodoMutation } from '../../graphql/mutations';

export default function Home(){


    // const [todos, setTodos] = useState([]);

    // async function fetchTodos() {
    //     const apiData = await API.graphql({ query: listTodos });
    //     setTodos(apiData.data.listTodos.items);
    // }

    // useEffect(()=>{
    //     console.log("trying to fetch todos")
    //     fetchTodos();
    // }, []);

    // useEffect(()=>{
    //     console.log("todos:", todos);
    // }, [todos]);

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
            .get('http://localhost:4001/api/home')
            .then(response => {
                setHomeData(response.data[0])
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