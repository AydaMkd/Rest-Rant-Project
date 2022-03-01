const router = require("express").Router();

// GET /places
router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: "/images/florencia-viadana--2etgsqvy68-unsplash.jpg"
  }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: "/images/marcos-paulo-prado-fdzsoySp9Uo-unsplash.jpg"
  }]
      res.render('places/index', { places })
  })

  

module.exports = router;