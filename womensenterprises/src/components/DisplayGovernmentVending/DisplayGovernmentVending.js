import './DisplayGovernmentVending.css';
import {Link} from 'react-router-dom'

export default function DisplayGovernmentVending({GovernmentVendingData}) {
    console.log(GovernmentVendingData)
    if (GovernmentVendingData) {
        return (
            <div id="DisplayGovernmentVending">
                 <div className="Jumbotron">
                    <h1 className="textH1">{GovernmentVendingData.pageTitle}</h1>
                </div>
                <div className="GVDivText">
                    <div className="textContent">{GovernmentVendingData.aboutVending}</div>
                </div>
                <div className="GVDivText">
                    <h3 className="textH3">{GovernmentVendingData.productOutro}</h3>
                </div>
                <div className="GVDivText">
                    <div className="textContent">
                        {GovernmentVendingData.contactLinkText}
                        <Link to = { process.env.PUBLIC_URL + "/contact" }>contact us!</Link>
                    </div>
                </div>
            </div>
            )
    } else {
        return <div>still loading</div>;
    }
}