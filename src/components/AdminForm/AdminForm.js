import "./AdminForm.css";

export default function AdminForm({ checkUser, user, logoutAdmin, handleRadioButton, handleSubmit, handleDataDelete, handleDataCreate, handleChange, formState, page }) {


    if (page === "Home") {
        return (
            <form id="home" onSubmit={handleSubmit}>
                <label>
                    What's going on with WE? Title: 
                    <input
                    type="text"
                    name="recentMessageTitle"
                    data-form="Home"
                    value={formState.home.recentMessageTitle ? formState.home.recentMessageTitle : ""}
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
                    value={formState.home.recentMessage ? formState.home.recentMessage : ""}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <label>
                    Landing Page Mission Title: 
                    <input
                    type="text"
                    name="missionTitle"
                    data-form="Home"
                    value={formState.home.missionTitle ? formState.home.missionTitle : ""}
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
                    value={formState.home.mission ? formState.home.mission : ""}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <label>
                    Landing Page Results Title: 
                    <input
                    type="text"
                    name="resultsTitle"
                    data-form="Home"
                    value={formState.home.resultsTitle ? formState.home.resultsTitle : ""}
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
                    value={formState.home.results ? formState.home.results : ""}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <button type="submit">Submit</button>
            </form>
        )
    } else if (page === "About") {
        return (
            <form id="about" onSubmit={handleSubmit}>
                <label>
                    About Page Mission Title: 
                    <input
                    type="text"
                    name="missionTitle"
                    data-form="About"
                    value={formState.about.missionTitle ? formState.about.missionTitle : ""}
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
                    value={formState.about.mission ? formState.about.mission : ""}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <label>
                    About the Founder Title: 
                    <input
                    type="text"
                    name="founderTitle"
                    data-form="About"
                    value={formState.about.founderTitle ? formState.about.founderTitle : ""}
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
                    value={formState.about.founderAbout ? formState.about.founderAbout : ""}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <label>
                    Founder Image URL: 
                    <input
                    type="text"
                    name="founderImgUrl"
                    data-form="About"
                    value={formState.about.founderImgUrl ? formState.about.founderImgUrl : ""}
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
                    value={formState.about.communityPartnersLinkText ? formState.about.communityPartnersLinkText : ""}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <label>
                    More Details About WE Title: 
                    <input
                    type="text"
                    name="moreDetailsTitle"
                    data-form="About"
                    value={formState.about.moreDetailsTitle ? formState.about.moreDetailsTitle : ""}
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
                    value={formState.about.moreDetails ? formState.about.moreDetails : ""}
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
                    value={formState.about.governmentVendingLinkText ? formState.about.governmentVendingLinkText : ""}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <button type="submit">Submit</button>
            </form>
        )
    } else if (page === "Community Partners") {
        return (
            <form id="communityPartners" onSubmit={handleSubmit}>
                <label>
                    Community Partners Page Title: 
                    <input
                    type="text"
                    name="pageTitle"
                    data-form="CommunityPartners"
                    value={formState.communityPartners.pageTitle ? formState.communityPartners.pageTitle : ""}
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
                    value={formState.communityPartners.endBlurb ? formState.communityPartners.endBlurb : ""}
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
                    value={formState.communityPartners.contactLinkText ? formState.communityPartners.contactLinkText : ""}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <button type="submit">Submit</button>
            </form>
        )
    } else if (page === "CommunityPartnersList") {
        return (
            <form id="communityPartnersList" onSubmit={handleSubmit}>
            {formState.communityPartnersList.map((partner, index) => {
                return (
                <div className="card" data-org={partner.id} key={partner.id} >
                    <label>
                        Organization Name: 
                        <input
                        type="text"
                        name="orgName"
                        data-form="CommunityPartnersList"
                        value={partner.orgName ? partner.orgName : ""}
                        onChange={handleChange}
                        data-index={index}
                        ></input>
                    </label><br></br>
                    <label>
                        Organization URL: 
                        <input
                        type="text"
                        name="orgUrl"
                        data-form="CommunityPartnersList"
                        value={partner.orgUrl ? partner.orgUrl : ""}
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
                        value={partner.orgImgLink ? partner.orgImgLink : ""}
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
                        value={partner.orgBlurb ? partner.orgBlurb : ""}
                        onChange={handleChange}
                        data-index={index}
                        ></textarea>
                    </label><br></br>
                    <button type="button" className="remove" data-target="communityPartnersList" data-id={partner.id} onClick={handleDataDelete}>Remove</button>
                </div>
                )
            })}
                <div className="formButtonDiv">
                    <button type="submit">Submit</button>
                    <button type="button" id="add" data-target="communityPartnersList" onClick={handleDataCreate}>Add New</button>
                </div>
            </form>
        )
    } else if (page === "Government Vending") {
        return (
            <form id="governmentVending" onSubmit={handleSubmit}>
                <label>
                    Government Vending Page Title: 
                    <input
                    type="text"
                    name="pageTitle"
                    data-form="GovernmentVending"
                    value={formState.governmentVending.pageTitle ? formState.governmentVending.pageTitle : ""}
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
                    value={formState.governmentVending.aboutVending ? formState.governmentVending.aboutVending : ""}
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
                    value={formState.governmentVending.productsIntro ? formState.governmentVending.productsIntro : ""}
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
                    value={formState.governmentVending.contactLinkText ? formState.governmentVending.contactLinkText : ""}
                    onChange={handleChange}
                    ></textarea>
                </label><br></br>
                <button type="submit">Submit</button>
            </form>
        )
    } else if (page === "ProductList") {
        return (
            <form id="productList" onSubmit={handleSubmit}>
            {formState.productList.map((product, index) => {
                return (
                <div className="card" data-org={product.id} key={product.id} >
                    <label>
                        Product Name: 
                        <input
                        type="text"
                        name="prodName"
                        data-form="ProductList"
                        value={product.prodName ? product.prodName : ""}
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
                        value={product.prodImgLink ? product.prodImgLink : ""}
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
                        value={product.prodBlurb ? product.prodBlurb : ""}
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
                        value={product.prodPrice10 ? product.prodPrice10 : ""}
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
                        value={product.prodPrice50 ? product.prodPrice50 : ""}
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
                        value={product.prodPrice100 ? product.prodPrice100 : ""}
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
                        value={product.prodPrice500 ? product.prodPrice500 : ""}
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
                        value={product.prodPrice1000 ? product.prodPrice1000 : ""}
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
    } else if (page === "Admin") {
        console.log(formState.admin)
        return (
            <form id="admin" onSubmit={handleSubmit}>
            {formState.admin.map((adminUser, index) => {
                return (
                <div className="card" data-org={adminUser.id} key={index} >
                    <label>
                        User: 
                        <input
                        type="text"
                        name="user"
                        data-form="Admin"
                        value={adminUser.user ? adminUser.user : ""}
                        onChange={handleChange}
                        data-index={index}
                        ></input>
                    </label><br></br>
                    
                    {(adminUser.user === user || adminUser.user === null) 
                    && 
                    <label>Password: <input type="text" name="password" data-form="Admin" value={adminUser.password ? adminUser.password : ""} onChange={handleChange} data-index={index} ></input></label>}
                        
                    <br></br>
                    <button type="button" className="remove" data-target="admin" data-id={adminUser.id} onClick={handleDataDelete}>Remove</button>
                    
                </div>
                )
            })}
                <div className="formButtonDiv">
                    <button type="submit">Submit</button>
                    <button type="button" id="add" data-target="admin" onClick={handleDataCreate}>Add New</button>
                </div>
            </form>
        )
    } else if (page === "Contact") {
        return (
            <form id="contact" onSubmit={handleSubmit}>
                <label>
                    Email: 
                    <input
                    type="text"
                    name="email"
                    data-form="Contact"
                    value={formState.contact.email ? formState.contact.email : ""}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <label>
                    Phone: 
                    <input
                    type="text"
                    name="phone"
                    data-form="Contact"
                    value={formState.contact.phone ? formState.contact.phone : ""}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <label>
                    Facebook: 
                    <input
                    type="text"
                    name="facebook"
                    data-form="Contact"
                    value={formState.contact.facebook ? formState.contact.facebook : ""}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <label>
                    Instagram: 
                    <input
                    type="text"
                    name="instagram"
                    data-form="Contact"
                    value={formState.contact.instagram ? formState.contact.instagram : ""}
                    onChange={handleChange}
                    ></input>
                </label><br></br>
                <button type="submit">Submit</button>
            </form>
        )
    } else {
        return (
            <div>
                <div>Please Select a page to edit.</div>
                <div>or</div>
                <button type="button" onClick={logoutAdmin}>Log Out</button>
            </div>
        )
    }
}