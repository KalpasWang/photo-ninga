// $(document).ready(function(){
//   $('.sidenav').sidenav();
//   $('.materialboxed').materialbox();
//   $('.parallax').parallax();
//   $('.tabs').tabs();
//   $('.datepicker').datepicker({
//     disableWeekends: true,
//     yearRange: 1
//   });
//   var elems = document.querySelectorAll('.scrollspy');
//   M.ScrollSpy.init(elems);
//   $('.tooltipped').tooltip();
// });

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);
  elems = document.querySelectorAll('.materialboxed');
  M.Materialbox.init(elems);
  elems = document.querySelectorAll('.parallax');
  M.Parallax.init(elems);
  elems = document.querySelectorAll('.tabs');
  M.Tabs.init(elems);
  elems = document.querySelectorAll('.datepicker');
  M.Datepicker.init(elems, {
    disableWeekends: true,
    yearRange: 1
  });
  elems = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(elems);
  elems = document.querySelectorAll('.tooltipped');
  M.Tooltip.init(elems);
});