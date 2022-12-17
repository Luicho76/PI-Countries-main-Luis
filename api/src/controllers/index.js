const axios =  require('axios');
const { Country } = require('../db')

async function getAllCountries(){
  try {
    let countries = (await axios.get('https://restcountries.com/v3/all')).data.map(country=>({
        id: country.cca3,
        name: country.name.common !== null ? country.name.common: 'Country not found',
        flags: country.flags !== null ? country.flags[0]: 'Flag not found',            
        continents: country.region !== null ? country.region: 'Continents not found',
        capital: typeof country.capital !== 'undefined' ? country.capital[0]: 'Capital not found',
        subregion: typeof country.subregion !== "undefined" ? country.subregion : "Subregion not found",
        area: typeof country.area !== "undefined" ? country.area : "Area not found", 
        population: country.population,
        })
    )
    await Country.bulkCreate(countries)
        console.log('Paises cargados en la db correctamente')
    } catch (error) {
        console.log(error)
    }
}

function getAllCountriesFromDb(req,res){
    Country.findAll()
    .then(countries => res.send(countries))
    .catch(error => (error))
}

module.exports = { getAllCountries, getAllCountriesFromDb };