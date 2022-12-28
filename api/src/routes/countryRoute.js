//route/countryRoute.js
const { Router } = require("express");
const { getAllCountries } = require('../controllers/countryController')
const { Op } = require('sequelize');
const { Country, Activity } = require("../db");
const router = Router();


router.get('/', async (req, res, next) => {
  try {
    const name = req.query.name
    let countriesTotal = await getAllCountries()
    if(name) {
      countriesTotal = { 
        where: {
          name: { [Op.iLike]: `%${name}%`}
        }
      }
    }
    const nameSearch = await Country.findAll({...countriesTotal, include: {
      model: Activity,
        attributes: ['id', 'name', 'difficulty', 'duration', 'season'],
        through: {attributes: []},
        }})
        
        if(!nameSearch.length) 
        return res.status(404).send(`The Country '${name}' not found`)
        res.json(nameSearch)
  } catch (error) {
    next(error)
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
      let searchId = await Country.findOne({
        where: {
          id: id.toUpperCase(),
        },
        include:{
          model: Activity,
          attributes: ['id','name','difficulty','duration','season'],
          through: { attributes: [] },
        }
      })
        
      if(!searchId) {
        res.status(404).send(`'${id}' not found`)
      } else {
        res.json(searchId)
      }
  } catch (error) {
    next(error)
  }
})

module.exports = router;
