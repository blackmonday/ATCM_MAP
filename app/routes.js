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
  var validation  = req.session.data['case-urn-number']
  /*
  var validation1 = "1234567890"
  var validation2 = "0987654321"
  */
  
  if (caseFound == "1" && validation == "123"){
      res.redirect('/find-your-case-error-1')
  } else if (caseFound == "1" && validation == "456"){
      res.redirect('/find-your-case-error-2')
  } else {
      res.redirect('/your-details')
  }

})
router.post('/find-your-case-error-1', function (req, res) {

  var caseFound = "1"
  var validation  = req.session.data['case-urn-number']
  /*
  var validation1 = "1234567890"
  var validation2 = "0987654321"
  */
  
  if (caseFound == "1" && validation == "123"){
      res.redirect('/find-your-case-error-1')
  } else if (caseFound == "1" && validation == "456"){
      res.redirect('/find-your-case-error-2')
  } else {
      res.redirect('/your-details')
  }

})
router.post('/find-your-case-error-2', function (req, res) {

  var caseFound = "1"
  var validation  = req.session.data['case-urn-number']
  /*
  var validation1 = "1234567890"
  var validation2 = "0987654321"
  */
  
  if (caseFound == "1" && validation == "123"){
      res.redirect('/find-your-case-error-1')
  } else if (caseFound == "1" && validation == "456"){
      res.redirect('/find-your-case-error-2')
  } else {
      res.redirect('/your-details')
  }

})



// Your plea
router.post('/your-plea', function (req, res) {

  var howDoYouPlea = req.session.data['how-do-you-plea']

  if (howDoYouPlea == "1"){
    req.session.data['how-do-you-plea'] = "Guilty";
    res.redirect('/guilty-plea')
  } else if (howDoYouPlea == "2") {
    req.session.data['how-do-you-plea'] = "Not guilty";
    res.redirect('/not-guilty-plea')
  } else {
      res.redirect('your-plea')
  }

})

// Guilty plea
router.post('/guilty-plea', function (req, res) {

  var guiltyComeToCourt = req.session.data['guilty-come-to-court']

  if (guiltyComeToCourt == "1"){
    req.session.data['how-do-you-plea-2'] = "Online";
    res.redirect('/your-finances')
  } else if (guiltyComeToCourt == "2") {
    req.session.data['how-do-you-plea-2'] = "In court";
    res.redirect('/your-court-hearing')
  }

})

// Your income
router.post('/your-income', function (req, res) {

  var employmentStatus = req.session.data['employment-status-group']
  var benefitsStatus = req.session.data['claiming-benefits-group']

  if (employmentStatus == "1"){
    req.session.data['employment-status-group'] = "Employed (full or part-time)"
    res.redirect('/your-employer')
  } else if (benefitsStatus == "1") {
      req.session.data['claiming-benefits-group'] = "Yes"
      if (employmentStatus == "1"){
          req.session.data['employment-status-group'] = "Employed (full or part-time)"
      } else if (employmentStatus == "2"){
          req.session.data['employment-status-group'] = "Self-eemployed"
      } else if (employmentStatus == "3"){
          req.session.data['employment-status-group'] = "Unemployed"
       } else if (employmentStatus == "4"){
          req.session.data['employment-status-group'] = "Other"
     }
    res.redirect('/your-benefits')
  } else {
      req.session.data['claiming-benefits-group'] = "No"
       if (employmentStatus == "2"){
          req.session.data['employment-status-group'] = "Self-eemployed"
      } else if (employmentStatus == "3"){
          req.session.data['employment-status-group'] = "Unemployed"
       } else if (employmentStatus == "4"){
          req.session.data['employment-status-group'] = "Other"
     }
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

// Your benefits
router.post('/your-benefits', function (req, res) {

  var yourBenefits = req.session.data['claiming-benefits-group']

  if (yourBenefits == "1"){
    res.redirect('/your-outgoings')
  } else if (yourBenefits = "2"){
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
