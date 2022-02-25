$(document).ready(function(){

  let menuIsActive = false;
  
  // When the hamburger icon is clicked, its colour changes and it either reveals or collapses the dropdown menu depending on if it was already active or not
  $("#hamburger_icon").click(function () {
    if (menuIsActive == false) {
      menuIsActive = true;
    } else {
      menuIsActive = false;
    }

    if (menuIsActive) {

      $('#hamburger_icon .dropdown_nav').css({
        'display': 'block',
      });

      $('#hamburger_icon .hamburger').css({
        'background-color': '#45B467',
      });

    } else {

      $('#hamburger_icon .dropdown_nav').css({
        'display': 'none',
      });

      $('#hamburger_icon .hamburger').css({
        'background-color': 'black',
      });
    }

  });

});