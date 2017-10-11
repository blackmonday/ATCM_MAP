/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})

// ATCM MAP

// ***********
// Your details
$('input[name="name-address-group"]').on('change', function() {
  $('.name-address-fields')
      .toggle(+this.value === 2 && this.checked);
}).change();

$('input[name="NIN-radio-inline-group"]').on('change', function() {
  $('.NIN-fields')
      .toggle(+this.value === 1 && this.checked);
}).change();

// *********
// Your plea
$('input[name="how-do-you-plea"]').on('change', function() {
  $('.guilty-plea-fields')
      .toggle(+this.value === 1 && this.checked);
  $('.not-guilty-plea-fields')
      .toggle(+this.value === 2 && this.checked);
}).change();

// ***************
// Your court hearing interpreter
$('input[name="interpreter-required"]').on('change', function() {
  $('.interpreter-fields')
      .toggle(+this.value === 1 && this.checked);
}).change();

// ***************
// Not guilty plea
$('input[name="interpreter-required"]').on('change', function() {
  $('.interpreter-fields')
      .toggle(+this.value === 1 && this.checked);
}).change();

$('input[name="witness-statement-group"]').on('change', function() {
  $('.witness-statement-fields')
      .toggle(+this.value === 2 && this.checked);
}).change();

$('input[name="own-witness-group"]').on('change', function() {
  $('.own-witness-fields')
      .toggle(+this.value === 1 && this.checked);
}).change();

$('input[name="nogo-dates-group"]').on('change', function() {
  $('.nogo-dates-fields')
      .toggle(+this.value === 1 && this.checked);
}).change();

// ***********
// Your income
$('input[name="employment-status-group"]').on('change', function() {
  $('.other-employment-status')
      .toggle(+this.value === 4 && this.checked);
}).change();

$('input[name="claiming-benefits-group"]').on('change', function() {
  $('.claiming-benefits-status')
      .toggle(+this.value === 1 && this.checked);
}).change();

// *************
// Your benefits
$('input[name="deduct-from-benefits-group"]').on('change', function() {
  $('.deduct-from-benefits-no')
      .toggle(+this.value === 2 && this.checked);
}).change();

// **************
// Your outgoings
$('input[name="your-outgoings-group"]').on('change', function() {
  $('.your-outgoings-yes')
      .toggle(+this.value === 1 && this.checked);
}).change();