// Load Dom before running Jquery
$(function(){

  // Variables
  var icons = $('.icons');
  var basicInfoButton = $('.basic-info-next-button');
  var namePattern = new RegExp("^[a-zA-Z' .-]{1,50}$");
  var emailPattern = new RegExp ("^[a-zA-Z0-9._-]*[@][a-zA-Z]*\.[a-zA-Z]{2,6}$");

  icons.hide();

  basicInfoButton.on('click',show);

  function show(e){
    e.preventDefault();
    icons.toggle();
  }



});
