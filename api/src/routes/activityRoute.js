//route/activityRoute.js
const { Router } = require('express');
const { Activity } = require('../db');


const router = Router();

router.post('/', async (req, res, next) => {
    try {
        const {name, difficulty, duration, season} = req.body;
        const newActivity = await Activity.create({
            name, 
            difficulty, 
            duration, 
            season
        })
        res.send(newActivity);
    } catch (error) {
        next(error) 
    }
});

router.get('/', async (req, res, next) => {
    try {
        const activity = await Activity.findAll()
        res.send(activity)
    } catch (error) {
        next(error)
    }
})

module.exports = router;