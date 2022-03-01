const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/chia-fruit-drink.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/confused-cat.jpg'
    }]
    res.render('places/index',  { places } )
})

router.post('/', (req,res) => {

})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req,res) => {

})

router.get('/:id/edit', (req,res) => {

})

router.delete('/:id', (req,res) => {

})

router.post('/:id/rant', (req,res) => {

})

router.delete('/:id/rant/:rantid', (req,res) => {

})

module.exports = router