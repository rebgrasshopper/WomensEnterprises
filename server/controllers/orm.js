const knex = require('./../db');











//READS

exports.adminData = async (req, res) => {
    knex
        .select('*')
        .from('admin')
        .then(adminContents => {
            res.json(adminContents)
        })
        .catch(err => {
            console.log("Error from adminData:", err)
            res.json({message: `There was an error retrieving home content: ${err}`})
        })
}


exports.homeData = async (req, res) => {
    knex
        .select('*')
        .from('home')
        .then(homeContents => {
            res.json(homeContents)
        })
        .catch(err => {
            res.json({message: `There was an error retrieving home content: ${err}`})
        })
}

exports.aboutData = async (req, res) => {
    knex
        .select('*')
        .from('about')
        .then(aboutContents => {
            res.json(aboutContents)
        })
        .catch(err => {
            res.json({message: `There was an error retrieving about content: ${err}`})
        })
}

exports.communityPartnersData = async (req, res) => {
    knex
        .select('*')
        .from('communityPartners')
        .then(communityPartnersContents => {
            res.json(communityPartnersContents)
        })
        .catch(err => {
            res.json({message: `There was an error retrieving communityPartners content: ${err}`})
        })
}

exports.communityPartnersListData = async (req, res) => {
    knex
        .select('*')
        .from('communityPartnersList')
        .then(communityPartnersListContents => {
            res.json(communityPartnersListContents)
        })
        .catch(err => {
            res.json({message: `There was an error retrieving communityPartnersList content: ${err}`})
        })
}

exports.governmentVendingData = async (req, res) => {
    knex
        .select('*')
        .from('governmentVending')
        .then(governmentVendingContents => {
            res.json(governmentVendingContents)
        })
        .catch(err => {
            res.json({message: `There was an error retrieving governmentVending content: ${err}`})
        })
}

exports.productListData = async (req, res) => {
    knex
        .select('*')
        .from('ProductList')
        .then(ProductListContents => {
            res.json(ProductListContents)
        })
        .catch(err => {
            res.json({message: `There was an error retrieving ProductList content: ${err}`})
        })
}

exports.contactData = async (req, res) => {
    knex
        .select('*')
        .from('contact')
        .then(contactContents => {
            res.json(contactContents)
        })
        .catch(err => {
            res.json({message: `There was an error retrieving contact content: ${err}`})
        })
}










//CREATES


exports.createAdminData = async (req, res) => {
    knex('Admin')
        .insert({
            'user':req.body.user,
            'password': req.body.password,
            'super': req.body.super
        })
        .then(() => {
            res.json({ message: `Admin data created`})
        })
        .catch(err => {
            res.json({ message: `There was an error creating Admin data`})
        })
}


exports.createHomeData = async (req, res) => {
    knex('home')
        .insert({
            'recentMessageTitle':req.body.recentMessageTitle,
            'recentMessage': req.body.recentMessage,
            'missionTitle': req.body.missionTitle,
            'mission': req.body.mission,
            'resultsTitle': req.body.resultsTitle,
            'results': req.body.results
        })
        .then(() => {
            res.json({ message: `home data created`})
        })
        .catch(err => {
            res.json({ message: `There was an error creating home data`})
        })
}

exports.createAboutData = async (req, res) => {
    knex('about')
        .insert({
            'missionTitle': req.body.missionTitle,
            'mission': req.body.mission,
            'founderTitle': req.body.founderTitle,
            'founderAbout': req.body.founderAbout,
            'founderImgUrl': req.body.founderImgUrl,
            'communityPartnersLinkText': req.body.communityPartnersLinkText,
            'moreDetailsTitle': req.body.moreDetailsTitle,
            'moreDetails': req.body.moreDetails,
            'governmentVendingLinkText': req.body.governmentVendingLinkText
        })
        .then(() => {
            res.json({ message: `about data created`})
        })
        .catch(err => {
            res.json({ message: `There was an error creating about data`})
        })
}

exports.createCommunityPartnersData = async (req, res) => {
    knex('communityPartners')
        .insert({
            'pageTitle':req.body.pageTitle,
            'endBlurb':req.body.endBlurb,
            'contactLinkText':req.body.contactLinkText
        })
        .then(() => {
            res.json({ message: `communityPartners data created`})
        })
        .catch(err => {
            res.json({ message: `There was an error creating communityPartners data`})
        })
}

exports.createCommunityPartnersListData = async (req, res) => {
    knex('communityPartnersList')
        .insert({
            'orgName':req.body.orgName,
            'orgUrl':req.body.orgUrl,
            'orgImgLink':req.body.orgImgLink,
            'orgBlurb':req.body.orgBlurb
        })
        .then(() => {
            res.json({ message: `communityPartnersList data created`})
        })
        .catch(err => {
            res.json({ message: `There was an error creating communityPartnersList data`})
        })
}

exports.createGovernmentVendingData = async (req, res) => {
    knex('governmentVending')
        .insert({
            'pageTitle':req.body.pageTitle,
            'aboutVending':req.body.aboutVending,
            'productsIntro':req.body.productsIntro,
            'productsOutro':req.body.productsOutro,
            'contactLinkText':req.body.contactLinkText
        })
        .then(() => {
            res.json({ message: `governmentVending data created`})
        })
        .catch(err => {
            res.json({ message: `There was an error creating governmentVending data`})
        })
}

exports.createProductListData = async (req, res) => {
    knex('ProductList')
        .insert({
            'prodName':req.body.prodName,
            'prodImgLink':req.body.prodImgLink,
            'prodBlurb':req.body.prodBlurb,
            'prodPrice10':req.body.prodPrice10,
            'prodPrice50':req.body.prodPrice50,
            'prodPrice100':req.body.prodPrice100,
            'prodPrice500':req.body.prodPrice500,
            'prodPrice1000':req.body.prodPrice1000
        })
        .then(() => {
            res.json({ message: `ProductList data created`})
        })
        .catch(err => {
            res.json({ message: `There was an error creating ProductList data`})
        })
}

exports.createContactData = async (req, res) => {
    knex('contact')
        .insert({
            'email':req.body.email,
            'phone':req.body.phone,
            'facebook':req.body.facebook,
            'instagram':req.body.instagram
        })
        .then(() => {
            res.json({ message: `contact data created`})
        })
        .catch(err => {
            res.json({ message: `There was an error creating contact data`})
        })
}









//UPDATES


exports.updateAdminData = async (req, res) => {
    knex('admin')
  .where({ id: req.body.id })
  .update(req.body.update)
  .then(() => {
      res.json({ message: 'admin data updated' });
  })
  .catch(err => {
      console.log("There was an error:", err)
      res.json({ message: 'There was an error updating admin data' })
  })
}


exports.updateHomeData = async (req, res) => {
    knex('home')
  .where({ id: 1 })
  .update(req.body)
  .then(() => {
      res.json({ message: 'home data updated' })
  })
  .catch(err => {
      res.json({ message: 'There was an error updating home data' })
  })
}

exports.updateAboutData = async (req, res) => {
    knex('about')
  .where({ id: 1 })
  .update(req.body)
  .then(() => {
      res.json({ message: 'about data updated' })
  })
  .catch(err => {
      res.json({ message: 'There was an error updating about data' })
  })
}

exports.updateCommunityPartnersData = async (req, res) => {
    knex('communityPartners')
  .where({ id: 1 })
  .update(req.body)
  .then(() => {

      res.json({ message: 'communityPartners data updated' })
  })
  .catch(err => {
      res.json({ message: 'There was an error updating communityPartners data' })
  })
}

exports.updateCommunityPartnersListData = async (req, res) => {
    knex('communityPartnersList')
  .where({ id: req.body.id })
  .update(req.body.update)
  .then(() => {
    res.json({ message: 'communityPartnersList data updated' })
  })
  .catch(err => {
      res.json({ message: 'There was an error updating communityPartnersList data' })
  })
}

exports.updateGovernmentVendingData = async (req, res) => {
    knex('governmentVending')
  .where({ id: 1 })
  .update(req.body)
  .then(() => {
    res.json({ message: 'governmentVending data updated' })
  })
  .catch(err => {
      res.json({ message: 'There was an error updating governmentVending data' })
  })
}

exports.updateProductListData = async (req, res) => {
    knex('ProductList')
  .where({ id: req.body.id })
  .update(req.body.update)
  .then(() => {
    res.json({ message: 'ProductList data updated' })
  })
  .catch(err => {
      res.json({ message: 'There was an error updating ProductList data' })
  })
}

exports.updateContactData = async (req, res) => {
    knex('contact')
  .where({ id: 1 })
  .update(req.body)
  .then(() => {
    res.json({ message: 'contact data updated' })
  })
  .catch(err => {
      res.json({ message: 'There was an error updating contact data' })
  })
}








//DELETES


exports.removeAdmin = async (req, res) => {
    knex('admin')
  .where({ id: req.body.id })
  .del()
  .then(() => {
      res.json({ message: `admin id: ${req.body.id} deleted` })
  })
  .catch(err => {
      res.json({ message: `There was an error deleting id: ${req.body.id} from admin` })
  })
}

exports.removeCommunityPartnersList = async (req, res) => {
    knex('communityPartnersList')
  .where({ id: req.body.id })
  .del()
  .then(() => {
      res.json({ message: `communityPartnersList id: ${req.body.id} deleted` })
  })
  .catch(err => {
      res.json({ message: `There was an error deleting id: ${req.body.id} from communityPartnersList` })
  })
}

exports.removeProductList = async (req, res) => {
    knex('ProductList')
  .where({ id: req.body.id })
  .del()
  .then(() => {
      res.json({ message: `ProductList id: ${req.body.id} deleted` })
  })
  .catch(err => {
      res.json({ message: `There was an error deleting id: ${req.body.id} from ProductList` })
  })
}