var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router

// Start page
router.post('/start-page', function (req, res) {

  var startGroup = req.session.data['start-group']

  if (startGroup == "2"){
    res.redirect('/find-your-case')
  } else {
      res.redirect('/start-page')
  }

})

// Your details
router.post('/your-details', function (req, res) {

  var youDetails = "1"

  if (youDetails == "1"){
    res.redirect('/your-plea')
  }

})

// Find your case
router.post('/find-your-case', function (req, res) {

  var caseFound = "1"

  if (caseFound == "1"){
    res.redirect('/your-details')
  }

})

// Your plea
router.post('/your-plea', function (req, res) {

  var howDoYouPlea = req.session.data['how-do-you-plea']

  if (howDoYouPlea == "1"){
    res.redirect('/guilty-plea')
  } else if (howDoYouPlea == "2") {
    res.redirect('/not-guilty-plea')
  } else {
      res.redirect('your-plea')
  }

})

// Guilty plea
router.post('/guilty-plea', function (req, res) {

  var guiltyComeToCourt = req.session.data['guilty-come-to-court']

  if (guiltyComeToCourt == "1"){
    res.redirect('/your-finances')
  } else if (guiltyComeToCourt == "2") {
    res.redirect('/your-court-hearing')
  }

})

// Your income
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

//Your employer
router.post('/your-employer', function (req, res) {

  var areYouEmployed = req.session.data['are-you-employed-group']
  var benefitsStatus = req.session.data['claiming-benefits-group']

  if (areYouEmployed == "1"){
    res.redirect('/your-employer-details')
  } else if (benefitsStatus == "1") {
      res.redirect('/your-benefits')
  } else {
      res.redirect('/your-outgoings')
  }

})

//Your employer details
router.post('/your-employer-details', function (req, res) {

  var benefitsStatus = req.session.data['claiming-benefits-group']

  if (benefitsStatus == "1") {
      res.redirect('/your-benefits')
  } else {
      res.redirect('/your-outgoings')
  }

})

// Your outgoings
router.post('/your-outgoings', function (req, res) {

  var yourOutgoings = "1"

  if (yourOutgoings == "1"){
    res.redirect('/check-your-answers')
  }

})

// Declaration
router.post('/declaration', function (req, res) {

  var declarationTicked = req.session.data['confirmation-group']

  if (declarationTicked == "1"){
    res.redirect('/confirmation')
  } else {
      res.redirect('/declaration')
  }

})