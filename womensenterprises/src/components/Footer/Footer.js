import Insta from '../../images/icons/instagram.png';
import Facebook from '../../images/icons/facebook.png';
import "./Footer.css";
import axios from 'axios'
import { useEffect, useState } from 'react';

function Footer(){

    const [ contactInfo, setContactInfo ] = useState({
        email: '',
        phone: '',
        facebook: '',
        instagram: ''
    })

    useEffect(() => {
        axios
            .get('http://localhost:4001/api/contact')
            .then(response => {
                if (response.data[0]) {
                    setContactInfo({
                        ...
                        response.data[0]
                    })
                }
            })
    });

    return (
        <footer>
            <p id="copyright">© Women's Enterprises 2021</p>
            <div id="socialMedia">
                <button id="FB"><a href={contactInfo.facebook} target="_blank"
                        rel="noreferrer"><img src={Facebook} alt="facebook icon" /></a></button>

                <button id="insta"><a href={contactInfo.instagram} target="_blank" rel="noreferrer">
                    <img src={Insta} alt="instagram icon" ></img>
                    </a></button>
            </div>
        </footer>
    )
}


export default Footer;