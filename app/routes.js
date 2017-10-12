var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router

// **********
// Start page
router.post('/start-page', function (req, res) {

  var startGroup = req.session.data['start-group']

  if (startGroup == "2"){
    res.redirect('/find-your-case')
  } else {
      res.redirect('/start-page')
  }

})

// **************
// Find your case
router.post('/find-your-case', function (req, res) {

  //var caseFound = "1"
  var caseURNValidation  = req.session.data['case-urn-number']
  var yourPostcode  = req.session.data['your-postcode']
  
  if (caseURNValidation == "123"){
      res.redirect('/find-your-case-error-1')
  } else if (caseURNValidation == "456"){
      res.redirect('/find-your-case-error-2')
  } else if (yourPostcode == ""){
      res.redirect('/find-your-case-error-3')
  } else {
      res.redirect('/your-details')
  }
    
})
router.post('/find-your-case-error-1', function (req, res) {

  //var caseFound = "1"
  var caseURNValidation  = req.session.data['case-urn-number']
  var yourPostcode  = req.session.data['your-postcode']
  
  if (caseURNValidation == "123"){
      res.redirect('/find-your-case-error-1')
  } else if (caseURNValidation == "456"){
      res.redirect('/find-your-case-error-2')
  } else if (yourPostcode == ""){
      res.redirect('/find-your-case-error-3')
  } else {
      res.redirect('/your-details')
  }
    
})
router.post('/find-your-case-error-2', function (req, res) {

  //var caseFound = "1"
  var caseURNValidation  = req.session.data['case-urn-number']
  var yourPostcode  = req.session.data['your-postcode']
  
  if (caseURNValidation == "123"){
      res.redirect('/find-your-case-error-1')
  } else if (caseURNValidation == "456"){
      res.redirect('/find-your-case-error-2')
  } else if (yourPostcode == ""){
      res.redirect('/find-your-case-error-3')
  } else {
      res.redirect('/your-details')
  }
    
})
router.post('/find-your-case-error-3', function (req, res) {

  //var caseFound = "1"
  var caseURNValidation  = req.session.data['case-urn-number']
  var yourPostcode  = req.session.data['your-postcode']
  
  if (caseURNValidation == "123"){
      res.redirect('/find-your-case-error-1')
  } else if (caseURNValidation == "456"){
      res.redirect('/find-your-case-error-2')
  } else if (yourPostcode == ""){
      res.redirect('/find-your-case-error-3')
  } else {
      res.redirect('/your-details')
  }
    
})

// ************
// Your details
router.post('/your-details', function (req, res) {
    
    /*
    var yourDetails = "1"
    var nameAddressGroup = req.session.data['name-address-group']
    
    if (nameAddressGroup !== "1") {
        if (nameAddressGroup !== "2") {
            res.redirect('/your-details-error-0')
        }
    }
    */
    
    /*
    if (req.session.data['home-telephone'] == "") {
        req.session.data['home-telephone'] = "–"
    }
    if (req.session.data['mobile'] == "") {
        req.session.data['mobile'] = "–"
    }
    if (req.session.data['email'] == "") {
        res.redirect('/your-details-error-1')
    }
    if (req.session.data['dob-day'] == "") {
        res.redirect('/your-details-error-2')
    }
    */
    
    if (req.session.data['dob-month'] == "") {
        res.redirect('/your-details-error-2')
    } else if ((req.session.data['dob-month'] == "1") || (req.session.data['dob-month'] == "01")) {
        req.session.data['dob-month'] = "January"
    } else if ((req.session.data['dob-month'] == "2") || (req.session.data['dob-month'] == "02")) {
        req.session.data['dob-month'] = "Februrary"
    } else if ((req.session.data['dob-month'] == "3") || (req.session.data['dob-month'] == "03")) {
        req.session.data['dob-month'] = "March"
    } else if ((req.session.data['dob-month'] == "4") || (req.session.data['dob-month'] == "04")) {
        req.session.data['dob-month'] = "April"
    } else if ((req.session.data['dob-month'] == "5") || (req.session.data['dob-month'] == "05")) {
        req.session.data['dob-month'] = "May"
    } else if ((req.session.data['dob-month'] == "6") || (req.session.data['dob-month'] == "06")) {
        req.session.data['dob-month'] = "June"
    } else if ((req.session.data['dob-month'] == "7") || (req.session.data['dob-month'] == "07")) {
        req.session.data['dob-month'] = "July"
    } else if ((req.session.data['dob-month'] == "8") || (req.session.data['dob-month'] == "08")) {
        req.session.data['dob-month'] = "August"
    } else if ((req.session.data['dob-month'] == "9") || (req.session.data['dob-month'] == "09")) {
        req.session.data['dob-month'] = "September"
    } else if (req.session.data['dob-month'] == "10") {
        req.session.data['dob-month'] = "October"
    } else if (req.session.data['dob-month'] == "11") {
        req.session.data['dob-month'] = "November"
    } else if (req.session.data['dob-month'] == "12") {
        req.session.data['dob-month'] = "December"
    }
    
    /*
    if (req.session.data['dob-year'] == "") {
        res.redirect('/your-details-error-2')
    }
    */
    
    /*
    if (req.session.data['NIN-radio-inline-group'] == "1") {
        if (req.session.data['NIN'] == "") {
            res.redirect('/your-details-error-3')
        }
    }
    */

    if (req.session.data['NIN-radio-inline-group'] == "2") {
        req.session.data['NIN'] = "Does not have a National Insurance number"
    }

    /*
    if (yourDetails == "1"){
        res.redirect('/your-plea')
    }
    */
    
    res.redirect('/your-plea')
    
})
router.post('/your-details-error-0', function (req, res) {

  var yourDetails = "1"
  var nameAddressGroup = req.session.data['name-address-group']
    
  if (nameAddressGroup !== "1") {
    if (nameAddressGroup !== "2") {
        res.redirect('/your-details-error-0')
    }
  }
    
  if (req.session.data['home-telephone'] == "") {
      req.session.data['home-telephone'] = "–"
  }
  if (req.session.data['mobile'] == "") {
      req.session.data['mobile'] = "–"
  }
  if (req.session.data['email'] == "") {
      res.redirect('/your-details-error-1')
  }
  if (req.session.data['dob-day'] == "") {
      res.redirect('/your-details-error-2')
  }
    
  if (req.session.data['dob-month'] == "") {
      res.redirect('/your-details-error-2')
  } else if ((req.session.data['dob-month'] == "1") || (req.session.data['dob-month'] == "01")) {
      req.session.data['dob-month'] = "January"
  } else if ((req.session.data['dob-month'] == "2") || (req.session.data['dob-month'] == "02")) {
      req.session.data['dob-month'] = "Februrary"
  } else if ((req.session.data['dob-month'] == "3") || (req.session.data['dob-month'] == "03")) {
      req.session.data['dob-month'] = "March"
  } else if ((req.session.data['dob-month'] == "4") || (req.session.data['dob-month'] == "04")) {
      req.session.data['dob-month'] = "April"
  } else if ((req.session.data['dob-month'] == "5") || (req.session.data['dob-month'] == "05")) {
      req.session.data['dob-month'] = "May"
  } else if ((req.session.data['dob-month'] == "6") || (req.session.data['dob-month'] == "06")) {
      req.session.data['dob-month'] = "June"
  } else if ((req.session.data['dob-month'] == "7") || (req.session.data['dob-month'] == "07")) {
      req.session.data['dob-month'] = "July"
  } else if ((req.session.data['dob-month'] == "8") || (req.session.data['dob-month'] == "08")) {
      req.session.data['dob-month'] = "August"
  } else if ((req.session.data['dob-month'] == "9") || (req.session.data['dob-month'] == "09")) {
      req.session.data['dob-month'] = "September"
  } else if (req.session.data['dob-month'] == "10") {
      req.session.data['dob-month'] = "October"
  } else if (req.session.data['dob-month'] == "11") {
      req.session.data['dob-month'] = "November"
  } else if (req.session.data['dob-month'] == "12") {
      req.session.data['dob-month'] = "December"
 }
    
  if (req.session.data['dob-year'] == "") {
      res.redirect('/your-details-error-2')
  }
    
    if (req.session.data['NIN-radio-inline-group'] == "1") {
        if (req.session.data['NIN'] == "") {
            res.redirect('/your-details-error-3')
        }
    }

    if (req.session.data['NIN-radio-inline-group'] == "2") {
        req.session.data['NIN'] = "Does not have a National Insurance number"
    }

  if (yourDetails == "1"){
    res.redirect('/your-plea')
  }
})
router.post('/your-details-error-1', function (req, res) {

  var yourDetails = "1"
  var nameAddressGroup = req.session.data['name-address-group']
    
  if (nameAddressGroup !== "1") {
    if (nameAddressGroup !== "2") {
        res.redirect('/your-details-error-0')
    }
  }
    
  if (req.session.data['home-telephone'] == "") {
      req.session.data['home-telephone'] = "–"
  }
  if (req.session.data['mobile'] == "") {
      req.session.data['mobile'] = "–"
  }
  if (req.session.data['email'] == "") {
      res.redirect('/your-details-error-1')
  }
  if (req.session.data['dob-day'] == "") {
      res.redirect('/your-details-error-2')
  }
    
  if (req.session.data['dob-month'] == "") {
      res.redirect('/your-details-error-2')
  } else if ((req.session.data['dob-month'] == "1") || (req.session.data['dob-month'] == "01")) {
      req.session.data['dob-month'] = "January"
  } else if ((req.session.data['dob-month'] == "2") || (req.session.data['dob-month'] == "02")) {
      req.session.data['dob-month'] = "Februrary"
  } else if ((req.session.data['dob-month'] == "3") || (req.session.data['dob-month'] == "03")) {
      req.session.data['dob-month'] = "March"
  } else if ((req.session.data['dob-month'] == "4") || (req.session.data['dob-month'] == "04")) {
      req.session.data['dob-month'] = "April"
  } else if ((req.session.data['dob-month'] == "5") || (req.session.data['dob-month'] == "05")) {
      req.session.data['dob-month'] = "May"
  } else if ((req.session.data['dob-month'] == "6") || (req.session.data['dob-month'] == "06")) {
      req.session.data['dob-month'] = "June"
  } else if ((req.session.data['dob-month'] == "7") || (req.session.data['dob-month'] == "07")) {
      req.session.data['dob-month'] = "July"
  } else if ((req.session.data['dob-month'] == "8") || (req.session.data['dob-month'] == "08")) {
      req.session.data['dob-month'] = "August"
  } else if ((req.session.data['dob-month'] == "9") || (req.session.data['dob-month'] == "09")) {
      req.session.data['dob-month'] = "September"
  } else if (req.session.data['dob-month'] == "10") {
      req.session.data['dob-month'] = "October"
  } else if (req.session.data['dob-month'] == "11") {
      req.session.data['dob-month'] = "November"
  } else if (req.session.data['dob-month'] == "12") {
      req.session.data['dob-month'] = "December"
 }
    
  if (req.session.data['dob-year'] == "") {
      res.redirect('/your-details-error-2')
  }
    
    if (req.session.data['NIN-radio-inline-group'] == "1") {
        if (req.session.data['NIN'] == "") {
            res.redirect('/your-details-error-3')
        }
    }

    if (req.session.data['NIN-radio-inline-group'] == "2") {
        req.session.data['NIN'] = "Does not have a National Insurance number"
    }

  if (yourDetails == "1"){
    res.redirect('/your-plea')
  }
})
router.post('/your-details-error-2', function (req, res) {

  var yourDetails = "1"
  var nameAddressGroup = req.session.data['name-address-group']
    
  if (nameAddressGroup !== "1") {
    if (nameAddressGroup !== "2") {
        res.redirect('/your-details-error-0')
    }
  }
    
  if (req.session.data['home-telephone'] == "") {
      req.session.data['home-telephone'] = "–"
  }
  if (req.session.data['mobile'] == "") {
      req.session.data['mobile'] = "–"
  }
  if (req.session.data['email'] == "") {
      res.redirect('/your-details-error-1')
  }
  if (req.session.data['dob-day'] == "") {
      res.redirect('/your-details-error-2')
  }
    
  if (req.session.data['dob-month'] == "") {
      res.redirect('/your-details-error-2')
  } else if ((req.session.data['dob-month'] == "1") || (req.session.data['dob-month'] == "01")) {
      req.session.data['dob-month'] = "January"
  } else if ((req.session.data['dob-month'] == "2") || (req.session.data['dob-month'] == "02")) {
      req.session.data['dob-month'] = "Februrary"
  } else if ((req.session.data['dob-month'] == "3") || (req.session.data['dob-month'] == "03")) {
      req.session.data['dob-month'] = "March"
  } else if ((req.session.data['dob-month'] == "4") || (req.session.data['dob-month'] == "04")) {
      req.session.data['dob-month'] = "April"
  } else if ((req.session.data['dob-month'] == "5") || (req.session.data['dob-month'] == "05")) {
      req.session.data['dob-month'] = "May"
  } else if ((req.session.data['dob-month'] == "6") || (req.session.data['dob-month'] == "06")) {
      req.session.data['dob-month'] = "June"
  } else if ((req.session.data['dob-month'] == "7") || (req.session.data['dob-month'] == "07")) {
      req.session.data['dob-month'] = "July"
  } else if ((req.session.data['dob-month'] == "8") || (req.session.data['dob-month'] == "08")) {
      req.session.data['dob-month'] = "August"
  } else if ((req.session.data['dob-month'] == "9") || (req.session.data['dob-month'] == "09")) {
      req.session.data['dob-month'] = "September"
  } else if (req.session.data['dob-month'] == "10") {
      req.session.data['dob-month'] = "October"
  } else if (req.session.data['dob-month'] == "11") {
      req.session.data['dob-month'] = "November"
  } else if (req.session.data['dob-month'] == "12") {
      req.session.data['dob-month'] = "December"
 }
    
  if (req.session.data['dob-year'] == "") {
      res.redirect('/your-details-error-2')
  }
    
    if (req.session.data['NIN-radio-inline-group'] == "1") {
        if (req.session.data['NIN'] == "") {
            res.redirect('/your-details-error-3')
        }
    }

    if (req.session.data['NIN-radio-inline-group'] == "2") {
        req.session.data['NIN'] = "Does not have a National Insurance number"
    }

  if (yourDetails == "1"){
    res.redirect('/your-plea')
  }
})
router.post('/your-details-error-3', function (req, res) {

  var yourDetails = "1"
  var nameAddressGroup = req.session.data['name-address-group']
    
  if (nameAddressGroup !== "1") {
    if (nameAddressGroup !== "2") {
        res.redirect('/your-details-error-0')
    }
  }
    
  if (req.session.data['home-telephone'] == "") {
      req.session.data['home-telephone'] = "–"
  }
  if (req.session.data['mobile'] == "") {
      req.session.data['mobile'] = "–"
  }
  if (req.session.data['email'] == "") {
      res.redirect('/your-details-error-1')
  }
  if (req.session.data['dob-day'] == "") {
      res.redirect('/your-details-error-2')
  }
    
  if (req.session.data['dob-month'] == "") {
      res.redirect('/your-details-error-2')
  } else if ((req.session.data['dob-month'] == "1") || (req.session.data['dob-month'] == "01")) {
      req.session.data['dob-month'] = "January"
  } else if ((req.session.data['dob-month'] == "2") || (req.session.data['dob-month'] == "02")) {
      req.session.data['dob-month'] = "Februrary"
  } else if ((req.session.data['dob-month'] == "3") || (req.session.data['dob-month'] == "03")) {
      req.session.data['dob-month'] = "March"
  } else if ((req.session.data['dob-month'] == "4") || (req.session.data['dob-month'] == "04")) {
      req.session.data['dob-month'] = "April"
  } else if ((req.session.data['dob-month'] == "5") || (req.session.data['dob-month'] == "05")) {
      req.session.data['dob-month'] = "May"
  } else if ((req.session.data['dob-month'] == "6") || (req.session.data['dob-month'] == "06")) {
      req.session.data['dob-month'] = "June"
  } else if ((req.session.data['dob-month'] == "7") || (req.session.data['dob-month'] == "07")) {
      req.session.data['dob-month'] = "July"
  } else if ((req.session.data['dob-month'] == "8") || (req.session.data['dob-month'] == "08")) {
      req.session.data['dob-month'] = "August"
  } else if ((req.session.data['dob-month'] == "9") || (req.session.data['dob-month'] == "09")) {
      req.session.data['dob-month'] = "September"
  } else if (req.session.data['dob-month'] == "10") {
      req.session.data['dob-month'] = "October"
  } else if (req.session.data['dob-month'] == "11") {
      req.session.data['dob-month'] = "November"
  } else if (req.session.data['dob-month'] == "12") {
      req.session.data['dob-month'] = "December"
 }
    
  if (req.session.data['dob-year'] == "") {
      res.redirect('/your-details-error-2')
  }
    
    if (req.session.data['NIN-radio-inline-group'] == "1") {
        if (req.session.data['NIN'] == "") {
            res.redirect('/your-details-error-3')
        }
    }

    if (req.session.data['NIN-radio-inline-group'] == "2") {
        req.session.data['NIN'] = "Does not have a National Insurance number"
    }

  if (yourDetails == "1"){
    res.redirect('/your-plea')
  }
})

// *********
// Your plea
router.post('/your-plea', function (req, res) {

  var howDoYouPlea = req.session.data['how-do-you-plea']
  var pleaValidation = ""
  
  if (howDoYouPlea == "0") {
      pleaValidation = "1"
  } else {
      pleaValidation = "0"
  }

  if (pleaValidation == "1") {
    res.redirect('/your-plea-error')
  } else if (howDoYouPlea == "1" && pleaValidation == "0"){
    req.session.data['how-do-you-plea'] = "Guilty";
    res.redirect('/guilty-plea')
  } else if (howDoYouPlea == "2" && pleaValidation == "0") {
    req.session.data['how-do-you-plea'] = "Not guilty";
    res.redirect('/not-guilty-plea')
  } else {
      res.redirect('/your-plea-error')
  }

})
router.post('/your-plea-error', function (req, res) {

  var howDoYouPlea = req.session.data['how-do-you-plea']
  var pleaValidation = ""
  
  if (howDoYouPlea == "0") {
      pleaValidation = "1"
  } else {
      pleaValidation = "0"
  }

  if (pleaValidation == "1") {
    res.redirect('/your-plea-error')
  } else if (howDoYouPlea == "1" && pleaValidation == "0"){
    req.session.data['how-do-you-plea'] = "Guilty";
    res.redirect('/guilty-plea')
  } else if (howDoYouPlea == "2" && pleaValidation == "0") {
    req.session.data['how-do-you-plea'] = "Not guilty";
    res.redirect('/not-guilty-plea')
  } else {
      res.redirect('/your-plea-error')
  }

})

// ***********
// Guilty plea
router.post('/guilty-plea', function (req, res) {

  var guiltyComeToCourt = req.session.data['guilty-come-to-court']

    if (req.session.data['mitigation-textarea'] == "") {
        req.session.data['mitigation-textarea'] = "–"
    }
        
  if (guiltyComeToCourt == "1"){
    req.session.data['how-do-you-plea-2'] = "No";
    res.redirect('/your-finances')
  } else if (guiltyComeToCourt == "2") {
    req.session.data['how-do-you-plea-2'] = "Yes";
    res.redirect('/your-court-hearing')
  } else {
      res.redirect('guilty-plea-error')
  }

})
router.post('/guilty-plea-error', function (req, res) {

  var guiltyComeToCourt = req.session.data['guilty-come-to-court']

    if (req.session.data['mitigation-textarea'] == "") {
        req.session.data['mitigation-textarea'] = "–"
    }
        
  if (guiltyComeToCourt == "1"){
    req.session.data['how-do-you-plea-2'] = "No";
    res.redirect('/your-finances')
  } else if (guiltyComeToCourt == "2") {
    req.session.data['how-do-you-plea-2'] = "Yes";
    res.redirect('/your-court-hearing')
  } else {
      res.redirect('guilty-plea-error')
  }

})

// ******************
// Your court hearing
router.post('/your-court-hearing', function (req, res) {
    
    if (req.session.data['interpreter-required'] !== "1") {
        if (req.session.data['interpreter-required'] !== "2") {
            res.redirect('/your-court-hearing-error')
        }
    } 
    
    if (req.session.data['interpreter-required'] == "1") {
        req.session.data['interpreter-required'] = "Yes"
    }
    if (req.session.data['interpreter-required'] == "2") {
        req.session.data['interpreter-required'] = "No"
    }
    
    res.redirect('/your-finances')
    
})
router.post('/your-court-hearing-error', function (req, res) {
    
    if (req.session.data['interpreter-required'] !== "1") {
        if (req.session.data['interpreter-required'] !== "2") {
            res.redirect('/your-court-hearing-error')
        }
    } 
    
    if (req.session.data['interpreter-required'] == "1") {
        req.session.data['interpreter-required'] = "Yes"
    }
    if (req.session.data['interpreter-required'] == "2") {
        req.session.data['interpreter-required'] = "No"
    }
    
    res.redirect('/your-finances')
    
})

// ***************
// Not guilty plea
router.post('/not-guilty-plea', function (req, res) {
    
    req.session.data['how-do-you-plea-2'] = "Yes - there will be a court hearing when pleading not guilty";
    
    if (req.session.data['mitigation-textarea'] == "") {
        res.redirect('/not-guilty-plea-error-1')
    }  
    if (req.session.data['interpreter-required'] !== "1") {
            if (req.session.data['interpreter-required'] !== "2") {
                res.redirect('/not-guilty-plea-error-2')
            }
    }  
    if (req.session.data['witness-statement-group'] !== "1") {
            if (req.session.data['witness-statement-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-3')
            }
    }  
    if (req.session.data['own-witness-group'] !== "1") {
            if (req.session.data['own-witness-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-4')
            }
    }  
    if (req.session.data['nogo-dates-group'] !== "1") {
            if (req.session.data['nogo-dates-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-5')
            }
    }  

    if (req.session.data['interpreter-required'] == "1") {
            req.session.data['interpreter-required'] = "Yes"
    }
    if (req.session.data['interpreter-required'] == "2") {
            req.session.data['interpreter-required'] = "No"
    }

    if (req.session.data['witness-statement-group'] == "1") {
            req.session.data['witness-statement-group'] = "Yes"
    }  
    if (req.session.data['witness-statement-group'] == "2") {
            req.session.data['witness-statement-group'] = "No"
    }
    
    if (req.session.data['own-witness-group'] == "1") {
            req.session.data['own-witness-group'] = "Yes"
    }  
    if (req.session.data['own-witness-group'] == "2") {
            req.session.data['own-witness-group'] = "No"
    }  

    if (req.session.data['nogo-dates-group'] == "1") {
            req.session.data['nogo-dates-group'] = "Yes"
    }  
    if (req.session.data['nogo-dates-group'] == "2") {
            req.session.data['nogo-dates-group'] = "No"
    }  


    res.redirect('/your-finances')
})
router.post('/not-guilty-plea-error-1', function (req, res) {
    
    req.session.data['how-do-you-plea-2'] = "Yes - there will be a court hearing when pleading not guilty";
    
    if (req.session.data['mitigation-textarea'] == "") {
        res.redirect('/not-guilty-plea-error-1')
    }  
    if (req.session.data['interpreter-required'] !== "1") {
            if (req.session.data['interpreter-required'] !== "2") {
                res.redirect('/not-guilty-plea-error-2')
            }
    }  
    if (req.session.data['witness-statement-group'] !== "1") {
            if (req.session.data['witness-statement-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-3')
            }
    }  
    if (req.session.data['own-witness-group'] !== "1") {
            if (req.session.data['own-witness-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-4')
            }
    }  
    if (req.session.data['nogo-dates-group'] !== "1") {
            if (req.session.data['nogo-dates-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-5')
            }
    }  

    if (req.session.data['interpreter-required'] == "1") {
            req.session.data['interpreter-required'] = "Yes"
    }
    if (req.session.data['interpreter-required'] == "2") {
            req.session.data['interpreter-required'] = "No"
    }

    if (req.session.data['witness-statement-group'] == "1") {
            req.session.data['witness-statement-group'] = "Yes"
    }  
    if (req.session.data['witness-statement-group'] == "2") {
            req.session.data['witness-statement-group'] = "No"
    }
    
    if (req.session.data['own-witness-group'] == "1") {
            req.session.data['own-witness-group'] = "Yes"
    }  
    if (req.session.data['own-witness-group'] == "2") {
            req.session.data['own-witness-group'] = "No"
    }  

    if (req.session.data['nogo-dates-group'] == "1") {
            req.session.data['nogo-dates-group'] = "Yes"
    }  
    if (req.session.data['nogo-dates-group'] == "2") {
            req.session.data['nogo-dates-group'] = "No"
    }  


    res.redirect('/your-finances')
})
router.post('/not-guilty-plea-error-2', function (req, res) {
    
    req.session.data['how-do-you-plea-2'] = "Yes - there will be a court hearing when pleading not guilty";
    
    if (req.session.data['mitigation-textarea'] == "") {
        res.redirect('/not-guilty-plea-error-1')
    }  
    if (req.session.data['interpreter-required'] !== "1") {
            if (req.session.data['interpreter-required'] !== "2") {
                res.redirect('/not-guilty-plea-error-2')
            }
    }  
    if (req.session.data['witness-statement-group'] !== "1") {
            if (req.session.data['witness-statement-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-3')
            }
    }  
    if (req.session.data['own-witness-group'] !== "1") {
            if (req.session.data['own-witness-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-4')
            }
    }  
    if (req.session.data['nogo-dates-group'] !== "1") {
            if (req.session.data['nogo-dates-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-5')
            }
    }  

    if (req.session.data['interpreter-required'] == "1") {
            req.session.data['interpreter-required'] = "Yes"
    }
    if (req.session.data['interpreter-required'] == "2") {
            req.session.data['interpreter-required'] = "No"
    }

    if (req.session.data['witness-statement-group'] == "1") {
            req.session.data['witness-statement-group'] = "Yes"
    }  
    if (req.session.data['witness-statement-group'] == "2") {
            req.session.data['witness-statement-group'] = "No"
    }
    
    if (req.session.data['own-witness-group'] == "1") {
            req.session.data['own-witness-group'] = "Yes"
    }  
    if (req.session.data['own-witness-group'] == "2") {
            req.session.data['own-witness-group'] = "No"
    }  

    if (req.session.data['nogo-dates-group'] == "1") {
            req.session.data['nogo-dates-group'] = "Yes"
    }  
    if (req.session.data['nogo-dates-group'] == "2") {
            req.session.data['nogo-dates-group'] = "No"
    }  


    res.redirect('/your-finances')
})
router.post('/not-guilty-plea-error-2b', function (req, res) {
    
    req.session.data['how-do-you-plea-2'] = "Yes - there will be a court hearing when pleading not guilty";
    
    if (req.session.data['mitigation-textarea'] == "") {
        res.redirect('/not-guilty-plea-error-1')
    }  
    if (req.session.data['interpreter-required'] !== "1") {
            if (req.session.data['interpreter-required'] !== "2") {
                res.redirect('/not-guilty-plea-error-2')
            }
    }  
    if (req.session.data['witness-statement-group'] !== "1") {
            if (req.session.data['witness-statement-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-3')
            }
    }  
    if (req.session.data['own-witness-group'] !== "1") {
            if (req.session.data['own-witness-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-4')
            }
    }  
    if (req.session.data['nogo-dates-group'] !== "1") {
            if (req.session.data['nogo-dates-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-5')
            }
    }  

    if (req.session.data['interpreter-required'] == "1") {
            req.session.data['interpreter-required'] = "Yes"
    }
    if (req.session.data['interpreter-required'] == "2") {
            req.session.data['interpreter-required'] = "No"
    }

    if (req.session.data['witness-statement-group'] == "1") {
            req.session.data['witness-statement-group'] = "Yes"
    }  
    if (req.session.data['witness-statement-group'] == "2") {
            req.session.data['witness-statement-group'] = "No"
    }
    
    if (req.session.data['own-witness-group'] == "1") {
            req.session.data['own-witness-group'] = "Yes"
    }  
    if (req.session.data['own-witness-group'] == "2") {
            req.session.data['own-witness-group'] = "No"
    }  

    if (req.session.data['nogo-dates-group'] == "1") {
            req.session.data['nogo-dates-group'] = "Yes"
    }  
    if (req.session.data['nogo-dates-group'] == "2") {
            req.session.data['nogo-dates-group'] = "No"
    }  


    res.redirect('/your-finances')
})
router.post('/not-guilty-plea-error-3', function (req, res) {
    
    req.session.data['how-do-you-plea-2'] = "Yes - there will be a court hearing when pleading not guilty";
    
    if (req.session.data['mitigation-textarea'] == "") {
        res.redirect('/not-guilty-plea-error-1')
    }  
    if (req.session.data['interpreter-required'] !== "1") {
            if (req.session.data['interpreter-required'] !== "2") {
                res.redirect('/not-guilty-plea-error-2')
            }
    }  
    if (req.session.data['witness-statement-group'] !== "1") {
            if (req.session.data['witness-statement-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-3')
            }
    }  
    if (req.session.data['own-witness-group'] !== "1") {
            if (req.session.data['own-witness-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-4')
            }
    }  
    if (req.session.data['nogo-dates-group'] !== "1") {
            if (req.session.data['nogo-dates-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-5')
            }
    }  

    if (req.session.data['interpreter-required'] == "1") {
            req.session.data['interpreter-required'] = "Yes"
    }
    if (req.session.data['interpreter-required'] == "2") {
            req.session.data['interpreter-required'] = "No"
    }

    if (req.session.data['witness-statement-group'] == "1") {
            req.session.data['witness-statement-group'] = "Yes"
    }  
    if (req.session.data['witness-statement-group'] == "2") {
            req.session.data['witness-statement-group'] = "No"
    }
    
    if (req.session.data['own-witness-group'] == "1") {
            req.session.data['own-witness-group'] = "Yes"
    }  
    if (req.session.data['own-witness-group'] == "2") {
            req.session.data['own-witness-group'] = "No"
    }  

    if (req.session.data['nogo-dates-group'] == "1") {
            req.session.data['nogo-dates-group'] = "Yes"
    }  
    if (req.session.data['nogo-dates-group'] == "2") {
            req.session.data['nogo-dates-group'] = "No"
    }  


    res.redirect('/your-finances')
})
router.post('/not-guilty-plea-error-3b', function (req, res) {
    
    req.session.data['how-do-you-plea-2'] = "Yes - there will be a court hearing when pleading not guilty";
    
    if (req.session.data['mitigation-textarea'] == "") {
        res.redirect('/not-guilty-plea-error-1')
    }  
    if (req.session.data['interpreter-required'] !== "1") {
            if (req.session.data['interpreter-required'] !== "2") {
                res.redirect('/not-guilty-plea-error-2')
            }
    }  
    if (req.session.data['witness-statement-group'] !== "1") {
            if (req.session.data['witness-statement-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-3')
            }
    }  
    if (req.session.data['own-witness-group'] !== "1") {
            if (req.session.data['own-witness-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-4')
            }
    }  
    if (req.session.data['nogo-dates-group'] !== "1") {
            if (req.session.data['nogo-dates-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-5')
            }
    }  

    if (req.session.data['interpreter-required'] == "1") {
            req.session.data['interpreter-required'] = "Yes"
    }
    if (req.session.data['interpreter-required'] == "2") {
            req.session.data['interpreter-required'] = "No"
    }

    if (req.session.data['witness-statement-group'] == "1") {
            req.session.data['witness-statement-group'] = "Yes"
    }  
    if (req.session.data['witness-statement-group'] == "2") {
            req.session.data['witness-statement-group'] = "No"
    }
    
    if (req.session.data['own-witness-group'] == "1") {
            req.session.data['own-witness-group'] = "Yes"
    }  
    if (req.session.data['own-witness-group'] == "2") {
            req.session.data['own-witness-group'] = "No"
    }  

    if (req.session.data['nogo-dates-group'] == "1") {
            req.session.data['nogo-dates-group'] = "Yes"
    }  
    if (req.session.data['nogo-dates-group'] == "2") {
            req.session.data['nogo-dates-group'] = "No"
    }  


    res.redirect('/your-finances')
})
router.post('/not-guilty-plea-error-4', function (req, res) {
    
    req.session.data['how-do-you-plea-2'] = "Yes - there will be a court hearing when pleading not guilty";
    
    if (req.session.data['mitigation-textarea'] == "") {
        res.redirect('/not-guilty-plea-error-1')
    }  
    if (req.session.data['interpreter-required'] !== "1") {
            if (req.session.data['interpreter-required'] !== "2") {
                res.redirect('/not-guilty-plea-error-2')
            }
    }  
    if (req.session.data['witness-statement-group'] !== "1") {
            if (req.session.data['witness-statement-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-3')
            }
    }  
    if (req.session.data['own-witness-group'] !== "1") {
            if (req.session.data['own-witness-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-4')
            }
    }  
    if (req.session.data['nogo-dates-group'] !== "1") {
            if (req.session.data['nogo-dates-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-5')
            }
    }  

    if (req.session.data['interpreter-required'] == "1") {
            req.session.data['interpreter-required'] = "Yes"
    }
    if (req.session.data['interpreter-required'] == "2") {
            req.session.data['interpreter-required'] = "No"
    }

    if (req.session.data['witness-statement-group'] == "1") {
            req.session.data['witness-statement-group'] = "Yes"
    }  
    if (req.session.data['witness-statement-group'] == "2") {
            req.session.data['witness-statement-group'] = "No"
    }
    
    if (req.session.data['own-witness-group'] == "1") {
            req.session.data['own-witness-group'] = "Yes"
    }  
    if (req.session.data['own-witness-group'] == "2") {
            req.session.data['own-witness-group'] = "No"
    }  

    if (req.session.data['nogo-dates-group'] == "1") {
            req.session.data['nogo-dates-group'] = "Yes"
    }  
    if (req.session.data['nogo-dates-group'] == "2") {
            req.session.data['nogo-dates-group'] = "No"
    }  


    res.redirect('/your-finances')
})
router.post('/not-guilty-plea-error-4b', function (req, res) {
    
    req.session.data['how-do-you-plea-2'] = "Yes - there will be a court hearing when pleading not guilty";
    
    if (req.session.data['mitigation-textarea'] == "") {
        res.redirect('/not-guilty-plea-error-1')
    }  
    if (req.session.data['interpreter-required'] !== "1") {
            if (req.session.data['interpreter-required'] !== "2") {
                res.redirect('/not-guilty-plea-error-2')
            }
    }  
    if (req.session.data['witness-statement-group'] !== "1") {
            if (req.session.data['witness-statement-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-3')
            }
    }  
    if (req.session.data['own-witness-group'] !== "1") {
            if (req.session.data['own-witness-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-4')
            }
    }  
    if (req.session.data['nogo-dates-group'] !== "1") {
            if (req.session.data['nogo-dates-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-5')
            }
    }  

    if (req.session.data['interpreter-required'] == "1") {
            req.session.data['interpreter-required'] = "Yes"
    }
    if (req.session.data['interpreter-required'] == "2") {
            req.session.data['interpreter-required'] = "No"
    }

    if (req.session.data['witness-statement-group'] == "1") {
            req.session.data['witness-statement-group'] = "Yes"
    }  
    if (req.session.data['witness-statement-group'] == "2") {
            req.session.data['witness-statement-group'] = "No"
    }
    
    if (req.session.data['own-witness-group'] == "1") {
            req.session.data['own-witness-group'] = "Yes"
    }  
    if (req.session.data['own-witness-group'] == "2") {
            req.session.data['own-witness-group'] = "No"
    }  

    if (req.session.data['nogo-dates-group'] == "1") {
            req.session.data['nogo-dates-group'] = "Yes"
    }  
    if (req.session.data['nogo-dates-group'] == "2") {
            req.session.data['nogo-dates-group'] = "No"
    }  


    res.redirect('/your-finances')
})
router.post('/not-guilty-plea-error-5', function (req, res) {
    
    req.session.data['how-do-you-plea-2'] = "Yes - there will be a court hearing when pleading not guilty";
    
    if (req.session.data['mitigation-textarea'] == "") {
        res.redirect('/not-guilty-plea-error-1')
    }  
    if (req.session.data['interpreter-required'] !== "1") {
            if (req.session.data['interpreter-required'] !== "2") {
                res.redirect('/not-guilty-plea-error-2')
            }
    }  
    if (req.session.data['witness-statement-group'] !== "1") {
            if (req.session.data['witness-statement-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-3')
            }
    }  
    if (req.session.data['own-witness-group'] !== "1") {
            if (req.session.data['own-witness-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-4')
            }
    }  
    if (req.session.data['nogo-dates-group'] !== "1") {
            if (req.session.data['nogo-dates-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-5')
            }
    }  

    if (req.session.data['interpreter-required'] == "1") {
            req.session.data['interpreter-required'] = "Yes"
    }
    if (req.session.data['interpreter-required'] == "2") {
            req.session.data['interpreter-required'] = "No"
    }

    if (req.session.data['witness-statement-group'] == "1") {
            req.session.data['witness-statement-group'] = "Yes"
    }  
    if (req.session.data['witness-statement-group'] == "2") {
            req.session.data['witness-statement-group'] = "No"
    }
    
    if (req.session.data['own-witness-group'] == "1") {
            req.session.data['own-witness-group'] = "Yes"
    }  
    if (req.session.data['own-witness-group'] == "2") {
            req.session.data['own-witness-group'] = "No"
    }  

    if (req.session.data['nogo-dates-group'] == "1") {
            req.session.data['nogo-dates-group'] = "Yes"
    }  
    if (req.session.data['nogo-dates-group'] == "2") {
            req.session.data['nogo-dates-group'] = "No"
    }  


    res.redirect('/your-finances')
})
router.post('/not-guilty-plea-error-5b', function (req, res) {
    
    req.session.data['how-do-you-plea-2'] = "Yes - there will be a court hearing when pleading not guilty";
    
    if (req.session.data['mitigation-textarea'] == "") {
        res.redirect('/not-guilty-plea-error-1')
    }  
    if (req.session.data['interpreter-required'] !== "1") {
            if (req.session.data['interpreter-required'] !== "2") {
                res.redirect('/not-guilty-plea-error-2')
            }
    }  
    if (req.session.data['witness-statement-group'] !== "1") {
            if (req.session.data['witness-statement-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-3')
            }
    }  
    if (req.session.data['own-witness-group'] !== "1") {
            if (req.session.data['own-witness-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-4')
            }
    }  
    if (req.session.data['nogo-dates-group'] !== "1") {
            if (req.session.data['nogo-dates-group'] !== "2") {
                res.redirect('/not-guilty-plea-error-5')
            }
    }  

    if (req.session.data['interpreter-required'] == "1") {
            req.session.data['interpreter-required'] = "Yes"
    }
    if (req.session.data['interpreter-required'] == "2") {
            req.session.data['interpreter-required'] = "No"
    }

    if (req.session.data['witness-statement-group'] == "1") {
            req.session.data['witness-statement-group'] = "Yes"
    }  
    if (req.session.data['witness-statement-group'] == "2") {
            req.session.data['witness-statement-group'] = "No"
    }
    
    if (req.session.data['own-witness-group'] == "1") {
            req.session.data['own-witness-group'] = "Yes"
    }  
    if (req.session.data['own-witness-group'] == "2") {
            req.session.data['own-witness-group'] = "No"
    }  

    if (req.session.data['nogo-dates-group'] == "1") {
            req.session.data['nogo-dates-group'] = "Yes"
    }  
    if (req.session.data['nogo-dates-group'] == "2") {
            req.session.data['nogo-dates-group'] = "No"
    }  


    res.redirect('/your-finances')
})

// ***********
// Your income
router.post('/your-income', function (req, res) {

  var employmentStatus = req.session.data['employment-status-group']
  var benefitsStatus = req.session.data['claiming-benefits-group']
  
    if (req.session.data['frequency-group'] !== "1") {
        if (req.session.data['frequency-group'] !== "2") {
            if (req.session.data['frequency-group'] !== "3") {
                res.redirect('/your-income-error-1')
            }
        }
    }
    
    if (req.session.data['frequency-group'] == "1") {
       req.session.data['frequency-group'] = "weekly"
    }
    if (req.session.data['frequency-group'] == "2") {
       req.session.data['frequency-group'] = "fortnightly"
    }
    if (req.session.data['frequency-group'] == "3") {
       req.session.data['frequency-group'] = "monthly"
    }
  
    if (req.session.data['average-income'] == "") {
        res.redirect('/your-income-error-2')
    }
    
    if (employmentStatus !== "1") {
        if (employmentStatus !== "2") {
            if (employmentStatus !== "3") {
                if (employmentStatus !== "4") {
                    res.redirect('/your-income-error-3')
                }
            }
        }
    }
    
    if (benefitsStatus !== "1") {
        if (benefitsStatus !== "2") {
            res.redirect('/your-income-error-4')
        }
    }
 
    if (req.session.data['claiming-benefits-group'] == "1") {
       req.session.data['claiming-benefits-group'] = "Yes"
    }
    if (req.session.data['claiming-benefits-group'] == "2") {
       req.session.data['claiming-benefits-group'] = "No"
    }
 
  if (employmentStatus == "1"){
    req.session.data['employment-status-group'] = "Employed (full or part-time)"
    res.redirect('/your-employer')
  } else if (benefitsStatus == "1") {
      req.session.data['claiming-benefits-group'] = "Yes"
      if (employmentStatus == "1"){
          req.session.data['employment-status-group'] = "Employed (full or part-time)"
      } else if (employmentStatus == "2"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Self-employed"
      } else if (employmentStatus == "3"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Unemployed"
       } else if (employmentStatus == "4"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Other"
     }
    res.redirect('/your-benefits')
  } else {
      req.session.data['claiming-benefits-group'] = "No"
       if (employmentStatus == "2"){
           req.session.data['employer-name'] = "–"
         req.session.data['employment-status-group'] = "Self-employed"
      } else if (employmentStatus == "3"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Unemployed"
       } else if (employmentStatus == "4"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Other"
     }
     res.redirect('/your-outgoings')
  }

})
router.post('/your-income-error-1', function (req, res) {

  var employmentStatus = req.session.data['employment-status-group']
  var benefitsStatus = req.session.data['claiming-benefits-group']
  
    if (req.session.data['frequency-group'] !== "1") {
        if (req.session.data['frequency-group'] !== "2") {
            if (req.session.data['frequency-group'] !== "3") {
                res.redirect('/your-income-error-1')
            }
        }
    }
    
    if (req.session.data['frequency-group'] == "1") {
       req.session.data['frequency-group'] = "weekly"
    }
    if (req.session.data['frequency-group'] == "2") {
       req.session.data['frequency-group'] = "fortnightly"
    }
    if (req.session.data['frequency-group'] == "3") {
       req.session.data['frequency-group'] = "monthly"
    }
  
    if (req.session.data['average-income'] == "") {
        res.redirect('/your-income-error-2')
    }
    
    if (employmentStatus !== "1") {
        if (employmentStatus !== "2") {
            if (employmentStatus !== "3") {
                if (employmentStatus !== "4") {
                    res.redirect('/your-income-error-3')
                }
            }
        }
    }
    
    if (benefitsStatus !== "1") {
        if (benefitsStatus !== "2") {
            res.redirect('/your-income-error-4')
        }
    }
 
    if (req.session.data['claiming-benefits-group'] == "1") {
       req.session.data['claiming-benefits-group'] = "Yes"
    }
    if (req.session.data['claiming-benefits-group'] == "2") {
       req.session.data['claiming-benefits-group'] = "No"
    }
 
  if (employmentStatus == "1"){
    req.session.data['employment-status-group'] = "Employed (full or part-time)"
    res.redirect('/your-employer')
  } else if (benefitsStatus == "1") {
      req.session.data['claiming-benefits-group'] = "Yes"
      if (employmentStatus == "1"){
          req.session.data['employment-status-group'] = "Employed (full or part-time)"
      } else if (employmentStatus == "2"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Self-employed"
      } else if (employmentStatus == "3"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Unemployed"
       } else if (employmentStatus == "4"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Other"
     }
    res.redirect('/your-benefits')
  } else {
      req.session.data['claiming-benefits-group'] = "No"
       if (employmentStatus == "2"){
           req.session.data['employer-name'] = "–"
         req.session.data['employment-status-group'] = "Self-employed"
      } else if (employmentStatus == "3"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Unemployed"
       } else if (employmentStatus == "4"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Other"
     }
     res.redirect('/your-outgoings')
  }

})
router.post('/your-income-error-2', function (req, res) {

  var employmentStatus = req.session.data['employment-status-group']
  var benefitsStatus = req.session.data['claiming-benefits-group']
  
    if (req.session.data['frequency-group'] !== "1") {
        if (req.session.data['frequency-group'] !== "2") {
            if (req.session.data['frequency-group'] !== "3") {
                res.redirect('/your-income-error-1')
            }
        }
    }
    
    if (req.session.data['frequency-group'] == "1") {
       req.session.data['frequency-group'] = "weekly"
    }
    if (req.session.data['frequency-group'] == "2") {
       req.session.data['frequency-group'] = "fortnightly"
    }
    if (req.session.data['frequency-group'] == "3") {
       req.session.data['frequency-group'] = "monthly"
    }
  
    if (req.session.data['average-income'] == "") {
        res.redirect('/your-income-error-2')
    }
    
    if (employmentStatus !== "1") {
        if (employmentStatus !== "2") {
            if (employmentStatus !== "3") {
                if (employmentStatus !== "4") {
                    res.redirect('/your-income-error-3')
                }
            }
        }
    }
    
    if (benefitsStatus !== "1") {
        if (benefitsStatus !== "2") {
            res.redirect('/your-income-error-4')
        }
    }
 
    if (req.session.data['claiming-benefits-group'] == "1") {
       req.session.data['claiming-benefits-group'] = "Yes"
    }
    if (req.session.data['claiming-benefits-group'] == "2") {
       req.session.data['claiming-benefits-group'] = "No"
    }
 
  if (employmentStatus == "1"){
    req.session.data['employment-status-group'] = "Employed (full or part-time)"
    res.redirect('/your-employer')
  } else if (benefitsStatus == "1") {
      req.session.data['claiming-benefits-group'] = "Yes"
      if (employmentStatus == "1"){
          req.session.data['employment-status-group'] = "Employed (full or part-time)"
      } else if (employmentStatus == "2"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Self-employed"
      } else if (employmentStatus == "3"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Unemployed"
       } else if (employmentStatus == "4"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Other"
     }
    res.redirect('/your-benefits')
  } else {
      req.session.data['claiming-benefits-group'] = "No"
       if (employmentStatus == "2"){
           req.session.data['employer-name'] = "–"
         req.session.data['employment-status-group'] = "Self-employed"
      } else if (employmentStatus == "3"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Unemployed"
       } else if (employmentStatus == "4"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Other"
     }
     res.redirect('/your-outgoings')
  }

})
router.post('/your-income-error-3', function (req, res) {

  var employmentStatus = req.session.data['employment-status-group']
  var benefitsStatus = req.session.data['claiming-benefits-group']
  
    if (req.session.data['frequency-group'] !== "1") {
        if (req.session.data['frequency-group'] !== "2") {
            if (req.session.data['frequency-group'] !== "3") {
                res.redirect('/your-income-error-1')
            }
        }
    }
    
    if (req.session.data['frequency-group'] == "1") {
       req.session.data['frequency-group'] = "weekly"
    }
    if (req.session.data['frequency-group'] == "2") {
       req.session.data['frequency-group'] = "fortnightly"
    }
    if (req.session.data['frequency-group'] == "3") {
       req.session.data['frequency-group'] = "monthly"
    }
  
    if (req.session.data['average-income'] == "") {
        res.redirect('/your-income-error-2')
    }
    
    if (employmentStatus !== "1") {
        if (employmentStatus !== "2") {
            if (employmentStatus !== "3") {
                if (employmentStatus !== "4") {
                    res.redirect('/your-income-error-3')
                }
            }
        }
    }
    
    if (benefitsStatus !== "1") {
        if (benefitsStatus !== "2") {
            res.redirect('/your-income-error-4')
        }
    }
 
    if (req.session.data['claiming-benefits-group'] == "1") {
       req.session.data['claiming-benefits-group'] = "Yes"
    }
    if (req.session.data['claiming-benefits-group'] == "2") {
       req.session.data['claiming-benefits-group'] = "No"
    }
 
  if (employmentStatus == "1"){
    req.session.data['employment-status-group'] = "Employed (full or part-time)"
    res.redirect('/your-employer')
  } else if (benefitsStatus == "1") {
      req.session.data['claiming-benefits-group'] = "Yes"
      if (employmentStatus == "1"){
          req.session.data['employment-status-group'] = "Employed (full or part-time)"
      } else if (employmentStatus == "2"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Self-employed"
      } else if (employmentStatus == "3"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Unemployed"
       } else if (employmentStatus == "4"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Other"
     }
    res.redirect('/your-benefits')
  } else {
      req.session.data['claiming-benefits-group'] = "No"
       if (employmentStatus == "2"){
           req.session.data['employer-name'] = "–"
         req.session.data['employment-status-group'] = "Self-employed"
      } else if (employmentStatus == "3"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Unemployed"
       } else if (employmentStatus == "4"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Other"
     }
     res.redirect('/your-outgoings')
  }

})
router.post('/your-income-error-4', function (req, res) {

  var employmentStatus = req.session.data['employment-status-group']
  var benefitsStatus = req.session.data['claiming-benefits-group']
  
    if (req.session.data['frequency-group'] !== "1") {
        if (req.session.data['frequency-group'] !== "2") {
            if (req.session.data['frequency-group'] !== "3") {
                res.redirect('/your-income-error-1')
            }
        }
    }
    
    if (req.session.data['frequency-group'] == "1") {
       req.session.data['frequency-group'] = "weekly"
    }
    if (req.session.data['frequency-group'] == "2") {
       req.session.data['frequency-group'] = "fortnightly"
    }
    if (req.session.data['frequency-group'] == "3") {
       req.session.data['frequency-group'] = "monthly"
    }
  
    if (req.session.data['average-income'] == "") {
        res.redirect('/your-income-error-2')
    }
    
    if (employmentStatus !== "1") {
        if (employmentStatus !== "2") {
            if (employmentStatus !== "3") {
                if (employmentStatus !== "4") {
                    res.redirect('/your-income-error-3')
                }
            }
        }
    }
    
    if (benefitsStatus !== "1") {
        if (benefitsStatus !== "2") {
            res.redirect('/your-income-error-4')
        }
    }
 
    if (req.session.data['claiming-benefits-group'] == "1") {
       req.session.data['claiming-benefits-group'] = "Yes"
    }
    if (req.session.data['claiming-benefits-group'] == "2") {
       req.session.data['claiming-benefits-group'] = "No"
    }
 
  if (employmentStatus == "1"){
    req.session.data['employment-status-group'] = "Employed (full or part-time)"
    res.redirect('/your-employer')
  } else if (benefitsStatus == "1") {
      req.session.data['claiming-benefits-group'] = "Yes"
      if (employmentStatus == "1"){
          req.session.data['employment-status-group'] = "Employed (full or part-time)"
      } else if (employmentStatus == "2"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Self-employed"
      } else if (employmentStatus == "3"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Unemployed"
       } else if (employmentStatus == "4"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Other"
     }
    res.redirect('/your-benefits')
  } else {
      req.session.data['claiming-benefits-group'] = "No"
       if (employmentStatus == "2"){
           req.session.data['employer-name'] = "–"
         req.session.data['employment-status-group'] = "Self-employed"
      } else if (employmentStatus == "3"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Unemployed"
       } else if (employmentStatus == "4"){
          req.session.data['employer-name'] = "–"
          req.session.data['employment-status-group'] = "Other"
     }
     res.redirect('/your-outgoings')
  }

})

// ************
//Your employer
router.post('/your-employer', function (req, res) {

  var areYouEmployed = req.session.data['are-you-employed-group']
  var benefitsStatus = req.session.data['claiming-benefits-group']
  //var deductFromEarningsStatus = req.session.data['deduct-from-earnings-group']

  if (areYouEmployed == "1"){
    req.session.data['are-you-employed-group'] = "Yes"
    res.redirect('/your-employer-details')
  } else if (benefitsStatus == "1") {
    req.session.data['claiming-benefits-group'] = "Yes"
    res.redirect('/your-benefits')
  } else {
    req.session.data['are-you-employed-group'] = "No"
    req.session.data['claiming-benefits-group'] = "No"
    req.session.data['employer-name'] = "You chose to not give employer details"
    res.redirect('/your-outgoings')
  }

})

// ********************
//Your employer details
router.post('/your-employer-details', function (req, res) {

  var benefitsStatus = req.session.data['claiming-benefits-group']
  
  if (req.session.data['employer-name'] == "") {
      req.session.data['employer-name'] = "–"
  }

  if (req.session.data['employer-number'] == "") {
      req.session.data['employer-number'] = "–"
  }

  if (req.session.data['employer-address-1'] == "") {
      req.session.data['employer-address-1'] = "–"
  }

  if (benefitsStatus == "1") {
      res.redirect('/your-benefits')
  } else {
      res.redirect('/your-outgoings')
  }

})

// *************
// Your benefits
router.post('/your-benefits', function (req, res) {

  var deductFromYourBenefits = req.session.data['deduct-from-benefits-group']
  
  if (deductFromYourBenefits == "1"){
    req.session.data['deduct-from-benefits-group'] = "Yes"
    res.redirect('/your-outgoings')
  } else if (deductFromYourBenefits == "2"){
    req.session.data['deduct-from-benefits-group'] = "No"
    res.redirect('/your-outgoings')
  } else {
    res.redirect('/your-benefits-error')
  }

})
router.post('/your-benefits-error', function (req, res) {

  var deductFromYourBenefits = req.session.data['deduct-from-benefits-group']
  
  if (deductFromYourBenefits == "1"){
    req.session.data['deduct-from-benefits-group'] = "Yes"
    res.redirect('/your-outgoings')
  } else if (deductFromYourBenefits == "2"){
    req.session.data['deduct-from-benefits-group'] = "No"
    res.redirect('/your-outgoings')
  } else {
    res.redirect('/your-benefits-error')
  }

})

// **************
// Your outgoings
router.post('/your-outgoings', function (req, res) {

  var yourOutgoings = req.session.data['your-outgoings-group']
  
  var accomodationTotal = parseInt(req.session.data['accomodation'])
  var councilTaxTotal = parseInt(req.session.data['council-tax'])
  var houseHoldBillsTotal = parseInt(req.session.data['household-bills'])
  var travelExpensesTotal = parseInt(req.session.data['travel-expeneses'])
  var childMaintenanceTotal = parseInt(req.session.data['child-maintenance'])
  var otherExpensesTotal = parseInt(req.session.data['other-expenses-amount'])
  
  if (req.session.data['other-expenses-amount'] == "") {
    req.session.data['other-expenses-amount'] = "0"
    otherExpensesTotal = parseInt(req.session.data['other-expenses-amount'])
  }
  
  if (req.session.data['other-expenses-list'] !== "") {
      req.session.data['other-expenses-list'] = " including " + req.session.data['other-expenses-list']
  }
  
  if (yourOutgoings == "1"){
    req.session.data['benefits-total'] = accomodationTotal + councilTaxTotal + houseHoldBillsTotal + travelExpensesTotal + childMaintenanceTotal + otherExpensesTotal
    res.redirect('/check-your-answers')
  } else if (yourOutgoings == "2"){
    req.session.data['benefits-total'] = 0 + " - you chose to not give details of your monthly outgoings"
    res.redirect('/check-your-answers')
  } else {
    res.redirect('/your-outgoings-error')
  }

})
router.post('/your-outgoings-error', function (req, res) {

  var yourOutgoings = req.session.data['your-outgoings-group']
  
  var accomodationTotal = parseInt(req.session.data['accomodation'])
  var councilTaxTotal = parseInt(req.session.data['council-tax'])
  var houseHoldBillsTotal = parseInt(req.session.data['household-bills'])
  var travelExpensesTotal = parseInt(req.session.data['travel-expeneses'])
  var childMaintenanceTotal = parseInt(req.session.data['child-maintenance'])
  var otherExpensesTotal = parseInt(req.session.data['other-expenses-amount'])
  
  if (yourOutgoings == "1"){
    req.session.data['benefits-total'] = accomodationTotal + councilTaxTotal + houseHoldBillsTotal + travelExpensesTotal + childMaintenanceTotal + otherExpensesTotal
    res.redirect('/check-your-answers')
  } else if (yourOutgoings == "2"){
    req.session.data['benefits-total'] = 0 + " - you chose to not give details of your monthly outgoings"
    res.redirect('/check-your-answers')
  } else {
    res.redirect('/your-outgoings-error')
  }

})

// ***********
// Declaration
router.post('/declaration', function (req, res) {

  var declarationTicked = req.session.data['confirmation-group']

  if (declarationTicked == "1"){
    res.redirect('/confirmation')
  } else {
      res.redirect('/declaration-error')
  }

})
router.post('/declaration-error', function (req, res) {

  var declarationTicked = req.session.data['confirmation-group']

  if (declarationTicked == "1"){
    res.redirect('/confirmation')
  } else {
      res.redirect('/declaration-error')
  }

})