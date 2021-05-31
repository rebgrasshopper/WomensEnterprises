import './DisplayGovernmentVending.css';
import {Link} from 'react-router-dom'

export default function DisplayGovernmentVending({GovernmentVendingData, ProductData}) {

    if (GovernmentVendingData.aboutVending) {
        return (
            <div id="DisplayGovernmentVending">
                 <div className="Jumbotron">
                    <h1 className="textH1">{GovernmentVendingData.pageTitle}</h1>
                </div>
                <div className="GVDivText">
                <div className="textContent">{GovernmentVendingData.aboutVending.split("\n").map((element, index) => {
                        return <div className = "textContent" key={index}>{element}</div>
                    })}</div>
                </div>
                <div className="ProductsDiv">
                    {ProductData.map(product => {
                        return (
                                <div className="card productCard" key={product.prodName}>
                                    <h2>{product.prodName}</h2>
                                    <img src={product.prodImgLink} alt={product.prodName}></img>
                                    <div className="textContent">{product.prodBlurb.split("\n").map((element, index) => {
                                        return <div className = "textContent" key={index}>{element}</div>
                                    })}</div>
                                </div>
                            )
                    })}
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