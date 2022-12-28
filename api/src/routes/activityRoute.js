
const { Router } = require('express');
const { Activity } = require('../db');
const { newActivity } = require(('../controllers/activityController'))


const router = Router();


router.post('/', async (req, res)=>{
    try {
        const { name, difficulty, duration, season, countryId } = req.body;
        let result = await newActivity(name, difficulty, duration, season, countryId)
        res.status(200).send({result})
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.get('/', async (req, res, next) => {
    try {
        const activity = await Activity.findAll()
        res.send(activity)
    } catch (error) {
        next(error)
    }
})

module.exports = router;