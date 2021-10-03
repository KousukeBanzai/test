import "../scss/style.scss";
import '/node_modules/hiraku/js/jquery-hiraku.js';
import '/node_modules/hiraku/scss/hiraku.scss';

$(function(){
  
  
  $('.navbar').addClass('is-jumbo');
  
  $(".js-offcanvas").hiraku({
    btn: ".js-offcanvas-btn",
    fixedHeader: ".js-fixed-header",
    direction: "right",
    breakpoint: 767
  });
  
});