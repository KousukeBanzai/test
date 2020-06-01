$(function () {

  var $header = $('[data-js-structure="header"]');
  var $body = $('[data-js-structure="body"]');
  var breakPoint = 1024;

  // メインビジュアル高さ保持
  // ------------------------------------------------------------

  function setVisualFixed() {

    var headerH = $header.height();
    var sectionTitleH = $('[data-js-structure="section-hero-title"]').outerHeight(true);
    var appierEmlH = headerH + sectionTitleH;
    var winH = $(window).height();
    var headerMarginTop = (winH - appierEmlH);
    var $sliderItemElm = $('[data-js-structure="slider-item"]');

    $body.css('margin-top',headerMarginTop + 'px');
    $sliderItemElm.css('height',headerMarginTop + 'px');
  }

  setVisualFixed();
  $(window).on('resize',function () {
    setVisualFixed();
  });

  // ヘッダー固定 トップページ
  // ------------------------------------------------------------

  function doHeaderFixedTop() {
    var winW = $(window).width();
    var headerH = $header.height();
    var contentWrapperOffset = $('[data-js-structure="wrapper"]').offset().top;
    var triggerPoint = contentWrapperOffset - headerH;
    var winPos = $(window).scrollTop();

    if(winPos > triggerPoint){
      if(winW > breakPoint) {
        $header.addClass('is-header-fixed');
        $body.addClass('is-header-fixed');
      }
    }else{
      if(winW > breakPoint) {
        $header.removeClass('is-header-fixed');
        $body.removeClass('is-header-fixed');
      }
    }
  }

  $(window).on('scroll load resize',function () {
    doHeaderFixedTop();
  });

  // bxslider
  // ------------------------------------------------------------

  $('.js-main-visual-slider').bxSlider({
    'mode':'fade',
    'pager':false,
    'controls':false,
    'auto':true,
    'pause':4000,
    'speed':2500
  });

  // ============================================================
  // inview 処理
  // ============================================================

  var animateClass = 'animated';

  // ウィンドウサイズでinview.jsの表示イベントタイミングを動的に変更
  //
  //
  function setInviewFlag() {
    var winW = $(window).width();
    if(winW > 1024){
      var inviewFlag = 'top';
    }else{
      var inviewFlag = 'top';
    }
    return inviewFlag;
  }

  function setSequenceAnimation(targetItem,animate,delay){
    var $targetItem = targetItem;
    for (var i = 0; i < $targetItem.length; i++) {
      setTimeout(function (ii) {
        elm = $targetItem[ii];
        $(elm).addClass('animated ' + animate);
      }.bind(null, i), i * delay);
    }
  }

  // section-hero
  // -------------------

  $('[data-js-inview-trigger="section-hero"]').on('inview',function (event, visible, topOrBottomOrBoth) {

    var $target = $(this).find('[data-js-inview-target="section-hero"]');

    if (visible) {
      if(topOrBottomOrBoth === setInviewFlag()){
        $target.eq(0).addClass(animateClass + ' fadeInUp');
        setTimeout(function(){
          $target.eq(1).addClass(animateClass + ' fadeInUp');
        },900);
      }
    }
  });

  // section-reasons
  // -------------------

  $('[data-js-inview-trigger="section-reasons"]').on('inview',function (event, visible, topOrBottomOrBoth) {

    var $this = $(this);

    if (visible) {
      if(topOrBottomOrBoth === setInviewFlag()){
        $this.find('[data-js-inview-target="1"]').addClass(animateClass + ' fadeInLeft');
        $this.find('[data-js-inview-target="2"]').addClass(animateClass + ' fadeInRight');
        setTimeout(function(){
          $this.find('[data-js-inview-target="3"]').addClass(animateClass + ' fadeInUp');
        },350);

        setTimeout(function(){
          setSequenceAnimation($this.find('[data-js-inview-target="4"]').find('[data-js-inview-target="sequence-item"]'),'fadeInRight',200);
        },650);
      }
    }
  });

  //
  // -------------------
  $('[data-js-inview-trigger="card02_yj-top-index-voice"]').on('inview',function (event, visible, topOrBottomOrBoth) {
    var $this = $(this);
    if (visible) {
      if(topOrBottomOrBoth === setInviewFlag()) {
        setSequenceAnimation($this.find('[data-js-inview-target="sequence-item"]'), 'fadeInRight', 200);
      }
    }

  });

  // section-vison
  // -------------------
  $('[data-js-inview-trigger="section-vison"]').on('inview',function (event, visible, topOrBottomOrBoth) {
    var $this = $(this);
    if (visible) {
      if(topOrBottomOrBoth === setInviewFlag()) {
        setSequenceAnimation($this.find('[data-js-inview-target="1"]').find('[data-js-inview-target="sequence-item"]'), 'fadeInUp', 200);
      }
    }
  });

  // section-summary-link
  // -------------------
  $('[data-js-inview-trigger="section-summary-link"]').on('inview',function (event, visible, topOrBottomOrBoth) {
    var $this = $(this);
    if (visible) {
      if(topOrBottomOrBoth === setInviewFlag()) {
        setSequenceAnimation($this.find('[data-js-inview-target="1"]').find('[data-js-inview-target="sequence-item"]'), 'fadeInRight', 200);
      }
    }
  });
});
