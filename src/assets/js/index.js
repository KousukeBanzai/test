$(function () {
  $('.js-mainvisual').sliderPro({
    width: 900,
    autoHeight: true,
    arrows: true,
    fadeArrows:false,
    slideDistance:0,
    visibleSize: '100%',
    buttons: false,
    slideAnimationDuration:1000,
    breakpoints: {
      769: {
        fadeArrows:true
      }
    }
  });
});