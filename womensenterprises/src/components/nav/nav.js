import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../images/WElogo.png';
import './nav.css';

export default function Nav() {
    const [path, setPath] = useState("");


    useEffect(() => {
        const pathID = window.location.pathname;
        setPath(pathID);
    }, [])

    return ( 


        <nav className="navbar navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="/"><img src={Logo} alt="Women's Enterprises Logo"></img></a>
            </div>
            <ul className="nav navbar-nav d-flex flex-row">
                <li className={ path === "/" ? "navlinks active" : "navlinks" }><Link id = "homeLink" className = "nav-link" to = { process.env.PUBLIC_URL + "/" }> Home </Link></li>
                <li className={ path === "/About" ? "navlinks active" : "navlinks" }><Link id = "aboutLink" className = "nav-link" to = { process.env.PUBLIC_URL + "/About" }> About </Link> </li>
                <li className={ path === "/CommunityPartners" ? "navlinks active" : "navlinks" }><Link id = "communityPartnersLink" className ="nav-link" to = { process.env.PUBLIC_URL + "/CommunityPartners" } > Community Partners </Link></li>
                <li className={ path === "/GovernmentVending" ? "navlinks active" : "navlinks" }><Link id = "governmentVendingLink" className ="nav-link" to = { process.env.PUBLIC_URL + "/GovernmentVending" } > Government Vending </Link> </li>
                <li className={ path === "/Contact" ? "navlinks active" : "navlinks" }><Link id = "contactLink" className ="nav-link" to = { process.env.PUBLIC_URL + "/Contact" } > Contact </Link> </li>
            </ul>
        </div>
    </nav>
    
    );
}