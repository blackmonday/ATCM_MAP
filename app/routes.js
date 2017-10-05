var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router

router.post('/start-page', function (req, res) {

  var startGroup = req.session.data['start-group']

  if (startGroup == "2"){
    res.redirect('/find-your-case')
  } else if (startGroup == "1") {
      res.redirect('index')
  }

})

router.post('/your-plea', function (req, res) {

  var howDoYouPlea = req.session.data['how-do-you-plea']

  if (howDoYouPlea == "1"){
    res.redirect('/guilty-plea')
  } else if (howDoYouPlea == "2") {
    res.redirect('/not-guilty-plea')
  }

})

router.post('/guilty-plea', function (req, res) {

  var guiltyComeToCourt = req.session.data['guilty-come-to-court']

  if (guiltyComeToCourt == "1"){
    res.redirect('/your-finances')
  } else if (guiltyComeToCourt == "2") {
    res.redirect('/your-court-hearing')
  }

})

router.post('/your-income', function (req, res) {

  var employmentStatus = req.session.data['employment-status-group']
  var benefitsStatus = req.session.data['claiming-benefits-group']

  if (employmentStatus == "1"){
    res.redirect('/your-employer')
  } else if (benefitsStatus == "1") {
    res.redirect('/your-benefits')
  } else {
      res.redirect('/your-outgoings')
  }

})

router.post('/your-employer', function (req, res) {

  var areYouEmployed = req.session.data['are-you-employed-group']

  if (areYouEmployed == "1"){
    res.redirect('/your-employer-details')
  } else {
      res.redirect('/your-outgoings')
  }

})