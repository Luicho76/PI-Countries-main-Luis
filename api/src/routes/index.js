
const { Router } = require('express');
const countryRoute = require('./countryRoute.js');
const activityRoute = require('./activityRoute.js');

const router = Router();

router.use('/countries', countryRoute);
router.use('/activities', activityRoute);

module.exports = router;
