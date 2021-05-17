const express = require('express');

const Routes = require('./../controllers/orm.js');

const router = express.Router()


router.get('/home', Routes.homeData);

router.post('/createHome', Routes.createHomeData);

module.exports = router;