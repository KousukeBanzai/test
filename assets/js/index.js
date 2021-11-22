import "../scss/style.scss";
import '/node_modules/hiraku/js/jquery-hiraku.js';
import '/node_modules/hiraku/scss/hiraku.scss';
import { window_loading } from "./modules/window_loading";

$(function(){
  
  $('.navbar').addClass('is-jumbo');
  
  $(".js-offcanvas").hiraku({
    btn: ".js-offcanvas-btn",
    fixedHeader: ".js-fixed-header",
    direction: "right",
    breakpoint: 767
  });
  
  var wl = new window_loading;
  wl.init();
  
  
  $('#start').on('click',function (){
    console.log('animation start');
    wl.changeWord();
  });
  $('#stop').on('click',function (){
    console.log('animation stop');
    wl.stop();
  });
  
});
