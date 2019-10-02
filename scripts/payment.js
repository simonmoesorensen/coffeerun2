(function(window) {
  "use strict";
  var App = window.App;
  var $ = window.jQuery;
  var FormHandler = App.FormHandler;

  var FORM_SELECTOR = "[data-payment=\"form\"]";
  var paymentHandler = new FormHandler(FORM_SELECTOR);

  paymentHandler.addSubmitHandler(function(data) {
    var modal = $("#submit-modal");
    modal.modal();
    $("#thank-you").append("<span id=\"add_here\">" + data["title"] + " " +
    data["username"] + "</span>");
  });
})(window);
