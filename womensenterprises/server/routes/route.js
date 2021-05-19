const express = require('express');
const Routes = require('./../controllers/orm.js');

const router = express.Router()




//GETS

router.get('/home', Routes.homeData);
router.get('/about', Routes.aboutData);
router.get('/communityPartners', Routes.communityPartnersData);
router.get('/communityPartnersList', Routes.communityPartnersListData);
router.get('/governmentVending', Routes.governmentVendingData);
router.get('/productList', Routes.productListData);
router.get('/contact', Routes.contactData);




//POSTS

router.post('/createHome', Routes.createHomeData);
router.post('/createAbout', Routes.createAboutData);
router.post('/createCommunityPartners', Routes.createCommunityPartnersData);
router.post('/createCommunityPartnersList', Routes.createCommunityPartnersListData);
router.post('/createGovernmentVending', Routes.createGovernmentVendingData);
router.post('/createProductList', Routes.createProductListData);
router.post('/createContact', Routes.createContactData);




//PUTS

router.put('/updateHome', Routes.updateHomeData);
router.put('/updateAbout', Routes.updateAboutData);
router.put('/updateCommunityPartners', Routes.updateCommunityPartnersData);
router.put('/updateCommunityPartnersList', Routes.updateCommunityPartnersListData);
router.put('/updateGovernmentVending', Routes.updateGovernmentVendingData);
router.put('/updateProductList', Routes.updateProductListData);
router.put('/updateContact', Routes.updateContactData);


//EXPORT

module.exports = router;