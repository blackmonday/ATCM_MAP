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

// select the relevant <input> elements, and using on() to bind a change event-handler:
$('input[name="radio-group"]').on('change', function() {
  // this, in the anonymous function, refers to the changed-<input>:
  // select the element(s) you want to show/hide:
  $('.name-address-fields')
      // pass a Boolean to the method, if the numeric-value of the changed-<input>
      // is exactly equal to 2 and that <input> is checked, the .business-fields
      // will be shown:
      .toggle(+this.value === 2 && this.checked);
// trigger the change event, to show/hide the .business-fields element(s) on
// page-load:
}).change();

$('input[name="NIN-radio-inline-group"]').on('change', function() {
  $('.NIN-fields')
      .toggle(+this.value === 1 && this.checked);
}).change();

$('input[name="how-do-you-plea"]').on('change', function() {
  $('.guilty-plea-fields')
      .toggle(+this.value === 1 && this.checked);
  $('.not-guilty-plea-fields')
      .toggle(+this.value === 2 && this.checked);

}).change();


