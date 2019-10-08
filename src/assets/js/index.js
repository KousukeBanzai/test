$(function () {

  // スライドショー読み込み用クラス削除処理
  // ------------------------------------

  if ($('.is-load').length) {
    $('.js-load-fadein').removeClass('is-load');
  }

  // スライドショー初期化
  // ------------------------------------


  $('.js-slider-pro').sliderPro({
    height: '504',
    width: 1280,
    visibleSize: '100%',
    forceSize: 'fullWidth',
    autoSlideSize: true,
    slideDistance: 0,
    arrows: true,
    centerImage: true,
    buttons: false,
    responsive: false,
  });

});

