import "./AdminForm.css";

export default function AdminForm({ handleSubmit, handleDataDelete, handleDataCreate, handleChange, formState, page }) {
    if (page === "Home") {
        return (
            <form id="Home" onSubmit={handleSubmit}>
                <label>
                    What's going on with WE? Title: 
                    <input
                    type="text"
                    name="recentMessageTitle"
                    data-form="Home"
                    value={formState.Home.recentMessageTitle}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <label>
                    What's going on with WE? Text: 
                    <textarea
                    type="text"
                    rows="10"
                    name="recentMessage"
                    data-form="Home"
                    value={formState.Home.recentMessage}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <label>
                    Landing Page Mission Title: 
                    <input
                    type="text"
                    name="missionTitle"
                    data-form="Home"
                    value={formState.Home.missionTitle}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <label>
                    Landing Page Mission Text: 
                    <textarea
                    type="text"
                    rows="10"
                    name="mission"
                    data-form="Home"
                    value={formState.Home.mission}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <label>
                    Landing Page Results Title: 
                    <input
                    type="text"
                    name="resultsTitle"
                    data-form="Home"
                    value={formState.Home.resultsTitle}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <label>
                    Landing Page Results Text: 
                    <textarea
                    type="text"
                    rows="10"
                    name="results"
                    data-form="Home"
                    value={formState.Home.results}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <button type="submit">Submit</button>
            </form>
        )
    } else if (page === "About") {
        return (
            <form id="About" onSubmit={handleSubmit}>
                <label>
                    About Page Mission Title: 
                    <input
                    type="text"
                    name="missionTitle"
                    data-form="About"
                    value={formState.About.missionTitle}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <label>
                    About Page Mission Text: 
                    <textarea
                    type="text"
                    rows="10"
                    name="mission"
                    data-form="About"
                    value={formState.About.mission}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <label>
                    About the Founder Title: 
                    <input
                    type="text"
                    name="founderTitle"
                    data-form="About"
                    value={formState.About.founderTitle}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <label>
                    About the Founder Text: 
                    <textarea
                    type="text"
                    rows="10"
                    name="founderAbout"
                    data-form="About"
                    value={formState.About.founderAbout}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <label>
                    Founder Image URL: 
                    <input
                    type="text"
                    name="founderImgUrl"
                    data-form="About"
                    value={formState.About.founderImgUrl}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <label>
                    About Our Community Partners Link Text: 
                    <textarea
                    type="text"
                    rows="10"
                    name="communityPartnersLinkText"
                    data-form="About"
                    value={formState.About.communityPartnersLinkText}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <label>
                    More Details About WE Title: 
                    <input
                    type="text"
                    name="moreDetailsTitle"
                    data-form="About"
                    value={formState.About.moreDetailsTitle}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <label>
                    More Details About WE Text: 
                    <textarea
                    type="text"
                    rows="10"
                    name="moreDetails"
                    data-form="About"
                    value={formState.About.moreDetails}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <label>
                    More About Government Vending Link Text: 
                    <textarea
                    type="text"
                    rows="10"
                    name="governmentVendingLinkText"
                    data-form="About"
                    value={formState.About.governmentVendingLinkText}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <button type="submit">Submit</button>
            </form>
        )
    } else if (page === "Community Partners") {
        return (
            <form id="CommunityPartners" onSubmit={handleSubmit}>
                <label>
                    Community Partners Page Title: 
                    <input
                    type="text"
                    name="pageTitle"
                    data-form="CommunityPartners"
                    value={formState.CommunityPartners.pageTitle}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <label>
                    Community Partners Page Outro Text: 
                    <textarea
                    type="text"
                    rows="10"
                    name="endBlurb"
                    data-form="CommunityPartners"
                    value={formState.CommunityPartners.endBlurb}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <label>
                    Contact Us To Become a Community Partner Text: 
                    <textarea
                    type="text"
                    rows="10"
                    name="contactLinkText"
                    data-form="CommunityPartners"
                    value={formState.CommunityPartners.contactLinkText}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <button type="submit">Submit</button>
            </form>
        )
    } else if (page === "CommunityPartnersList") {
        return (
            <form id="CommunityPartnersList" onSubmit={handleSubmit}>
            {formState.CommunityPartnersList.map((partner, index) => {
                return (
                <div className="card" data-org={partner.id} key={partner.id} >
                    <label>
                        Organization Name: 
                        <input
                        type="text"
                        name="orgName"
                        data-form="CommunityPartnersList"
                        value={partner.orgName}
                        onChange={handleChange}
                        data-index={index}
                        ></input>
                    </label><br></br>
                    <label>
                        Organization URL: 
                        <input
                        type="text"
                        name="orgURL"
                        data-form="CommunityPartnersList"
                        value={partner.orgUrl}
                        onChange={handleChange}
                        data-index={index}
                        ></input>
                    </label><br></br>
                    <label>
                        Organization Image Link: 
                        <input
                        type="text"
                        name="orgImgLink"
                        data-form="CommunityPartnersList"
                        value={partner.orgImgLink}
                        onChange={handleChange}
                        data-index={index}
                        ></input>
                    </label><br></br>
                    <label>
                        About This Organization: 
                        <textarea
                        type="text"
                        rows="10"
                        cols="80"
                        name="orgBlurb"
                        data-form="CommunityPartnersList"
                        value={partner.orgBlurb}
                        onChange={handleChange}
                        data-index={index}
                        ></textarea>
                    </label><br></br>
                    <button type="button" className="remove" data-target="CommunityPartnersList" data-id={partner.id} onClick={handleDataDelete}>Remove</button>
                </div>
                )
            })}
                <div className="formButtonDiv">
                    <button type="submit">Submit</button>
                    <button type="button" id="add" data-target="CommunityPartnersList" onClick={handleDataCreate}>Add New</button>
                </div>
            </form>
        )
    } else if (page === "Government Vending") {
        return (
            <form id="GovernmentVending" onSubmit={handleSubmit}>
                <label>
                    Government Vending Page Title: 
                    <input
                    type="text"
                    name="pageTitle"
                    data-form="GovernmentVending"
                    value={formState.GovernmentVending.pageTitle}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <label>
                    About the Program Text: 
                    <textarea
                    type="text"
                    rows="10"
                    name="aboutVending"
                    data-form="GovernmentVending"
                    value={formState.GovernmentVending.aboutVending}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <label>
                    Intro to Product List Text: 
                    <textarea
                    type="text"
                    rows="10"
                    name="productsIntro"
                    data-form="GovernmentVending"
                    value={formState.GovernmentVending.productsIntro}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <label>
                    Contact Us To Become a Government Vendor Text: 
                    <textarea
                    type="text"
                    rows="10"
                    name="contactLinkText"
                    data-form="GovernmentVending"
                    value={formState.GovernmentVending.contactLinkText}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <button type="submit">Submit</button>
            </form>
        )
    } else if (page === "ProductList") {
        return (
            <form id="ProductList" onSubmit={handleSubmit}>
            {formState.ProductList.map((product, index) => {
                return (
                <div className="card" data-org={product.id} key={product.id} >
                    <label>
                        Product Name: 
                        <input
                        type="text"
                        name="prodName"
                        data-form="ProductList"
                        value={product.prodName}
                        onChange={handleChange}
                        data-index={index}
                        ></input>
                    </label><br></br>
                    <label>
                        Product Image Link: 
                        <input
                        type="text"
                        name="prodImgLink"
                        data-form="ProductList"
                        value={product.prodImgLink}
                        onChange={handleChange}
                        data-index={index}
                        ></input>
                    </label><br></br>
                    <label>
                        About This Product: 
                        <textarea
                        type="text"
                        rows="10"
                        cols="80"
                        name="prodBlurb"
                        data-form="ProductList"
                        value={product.prodBlurb}
                        onChange={handleChange}
                        data-index={index}
                        ></textarea>
                    </label><br></br>
                    <label>
                        Product Price (10ct): 
                        <input
                        type="text"
                        name="prodPrice10"
                        data-form="ProductList"
                        value={product.prodPrice10}
                        onChange={handleChange}
                        data-index={index}
                        ></input>
                    </label><br></br>
                    <label>
                        Product Price (50ct): 
                        <input
                        type="text"
                        name="prodPrice50"
                        data-form="ProductList"
                        value={product.prodPrice50}
                        onChange={handleChange}
                        data-index={index}
                        ></input>
                    </label><br></br>
                    <label>
                        Product Price (100ct): 
                        <input
                        type="text"
                        name="prodPrice100"
                        data-form="ProductList"
                        value={product.prodPrice100}
                        onChange={handleChange}
                        data-index={index}
                        ></input>
                    </label><br></br>
                    <label>
                        Product Price (500ct): 
                        <input
                        type="text"
                        name="prodPrice500"
                        data-form="ProductList"
                        value={product.prodPrice500}
                        onChange={handleChange}
                        data-index={index}
                        ></input>
                    </label><br></br>
                    <label>
                        Product Price (1000ct): 
                        <input
                        type="text"
                        name="prodPrice1000"
                        data-form="ProductList"
                        value={product.prodPrice1000}
                        onChange={handleChange}
                        data-index={index}
                        ></input>
                    </label><br></br>
                    <button type="submit">Submit</button>
                </div>
                )
            })}
            </form>
        )
    } else if (page === "Contact") {
        return (
            <form id="Contact" onSubmit={handleSubmit}>
                <label>
                    Email: 
                    <input
                    type="text"
                    name="email"
                    data-form="Contact"
                    value={formState.Contact.email}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <label>
                    Phone: 
                    <input
                    type="text"
                    name="phone"
                    data-form="Contact"
                    value={formState.Contact.phone}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <label>
                    Facebook: 
                    <input
                    type="text"
                    name="facebook"
                    data-form="Contact"
                    value={formState.Contact.facebook}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <label>
                    Instagram: 
                    <input
                    type="text"
                    name="instagram"
                    data-form="Contact"
                    value={formState.Contact.instagram}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <button type="submit">Submit</button>
            </form>
        )
    } else {
        return <div>Please Select a page to edit.</div>
    }
}