import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

export default function Nav() {
    const [path, setPath] = useState("");


    useEffect(() => {
        const pathID = window.location.pathname;
        setPath(pathID);
    }, [])


    return ( 


        <nav className="navbar bg-dark navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="/">Women's Enterprises International</a>
            </div>
            <ul className="nav navbar-nav d-flex flex-row">
                <li className="navlinks"><Link id = "homeLink" className = { path === "/" ? "nav-link" : "nav-link" } to = { process.env.PUBLIC_URL + "/" } > Home </Link></li>
                <li className="navlinks"><Link id = "aboutLink" className = { path === "/About" ? "nav-link" : "nav-link" } to = { process.env.PUBLIC_URL + "/About" } > About </Link> </li>
                <li className="navlinks"><Link id = "communityPartnersLink" className = { path === "/CommunityPartners" ? "nav-link" : "nav-link" } to = { process.env.PUBLIC_URL + "/CommunityPartners" } > Community Partners </Link></li>
                <li className="navlinks"><Link id = "governmentVendingLink" className = { path === "/GovernmentVending" ? "nav-link" : "nav-link" } to = { process.env.PUBLIC_URL + "/GovernmentVending" } > Government Vending </Link> </li>
                <li className="navlinks"><Link id = "contactLink" className = { path === "/Contact" ? "nav-link" : "nav-link" } to = { process.env.PUBLIC_URL + "/Contact" } > Contact </Link> </li>
            </ul>
        </div>
    </nav>
    
    );
}