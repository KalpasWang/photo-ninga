$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.materialboxed').materialbox();
  $('.parallax').parallax();
  $('.tabs').tabs();
  $('.datepicker').datepicker({
    disableWeekends: true,
    yearRange: 1
  });
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, {throttle: 5000});
  $('.tooltipped').tooltip();
});