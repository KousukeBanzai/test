// -------------------------------------------------------------------
// UserAgentで振り分けてhtmlにclassを振る
// -------------------------------------------------------------------
var UA       = navigator.userAgent;
var htmlElement = document.documentElement;

// @ Mac のとき
// ------------------------------------------------------------

if (navigator.platform.search("Mac") != -1) {
  htmlElement.className += 'mac ';
}

// Windows のとき
if(UA.search("Windows") != -1){
  htmlElement.className += 'win ';

  if((UA.search("Trident") != -1) || ((UA.search("MSIE") != -1))) { // Internet Explorer All
    htmlElement.className += 'ie ';

    if(UA.search("Trident") != -1) { // IE8以上
      htmlElement.className += 'gte_ie8 ';
    }
    if(UA.search("Trident") == -1) { // IE7以下
      htmlElement.className += 'lte_ie8 ';
    }
    if(UA.search("MSIE 7") != -1){ // 一応IE7
      htmlElement.className += 'ie7 ';
    }
    if(UA.search("MSIE 8") != -1){ // IE8
      htmlElement.className += 'ie8 ';
    }
    if(UA.search("MSIE 9") != -1){ // IE9
      htmlElement.className += 'ie9 ';
    }
    if(UA.search("MSIE 10") != -1){ // IE10
      htmlElement.className += 'ie10 ';
    }
    if(UA.search("Trident/7") != -1){ // IE11
      htmlElement.className += 'ie11 ';
    }
  }
}

// Chrome のとき
if((UA.search("Chrome") != -1) && (UA.search("OPR") == -1)){
  htmlElement.className += 'chrome ';
}
// Safari のとき
if((UA.search("Safari") != -1) && (UA.search("Chrome") == -1) && (UA.search("OPR") == -1) && (UA.search("Presto") == -1)) {
  htmlElement.className += 'safari ';
}
// Firefox のとき
if(UA.search("Firefox") != -1) {
  htmlElement.className += 'firefox ';
}

// iPad のとき
if(UA.search("iPad") != -1){ htmlElement.className += 'ipad '; }

// iPhone のとき
if(UA.search("iPhone") != -1){ htmlElement.className += 'iphone '; }

// Android のとき
if(UA.search("Android") != -1){ htmlElement.className += 'android '; }

// ============================================================
// @ スマホ時のみ電話番号にリンクを張る
// ============================================================
//
// example
//
// <span data-tel="0300000000">03-0000-0000</span>
// <span data-tel="0312345678"><img src="tel.png" /></span>
//
// data-telが付いている要素をリンク書き換えの対象として、その値が電話番号になるように設定

$(function() {
  sp_tel();
});

// スマートフォン・タブレットで談話番号にリンクを追加する
function sp_tel() {
  var UA = navigator.userAgent.toLowerCase();
  var isSpTb = (UA.indexOf('iphone') > -1) || (UA.indexOf('ipad') > -1) || (UA.indexOf('android') > -1);
  if(!isSpTb) {
    return;
  }
  for (var i = 0; i < $('[data-tel]').length; i++) {
    var telElem = $('[data-tel]').eq(i).html();
    var telUrl = $('[data-tel]').eq(i).data('tel');
    $('[data-tel]').eq(i).replaceWith('<a href="tel:' + telUrl + '" data-tel="' + telUrl + '">' + telElem + '</a>');
  }
}

// ============================================================
// 変数
// ============================================================

$screen = {
  'xsm' : '320',
  'sm' : '414',
  'md' : '1024',
}

// 画面幅取得
// -------------------
$(window).on('load resize', function(){
  $windowWidth = $(window).width();
});

// ============================================================
// html要素にscreen判定クラスを付与
// ============================================================

// screen- から始まるクラスを全てremove
// -------------------

function removeScreenClass(target) {
  target.removeClass(function(index, className) {
    return (className.match(/\bscreen-\S+/g) || []).join(' ');
  });
}

// 画面サイズを判定してscreenクラスをセット
// -------------------

function setScreenClass(target) {
  removeScreenClass(target);
  if($windowWidth <= $screen.xsm){
    target.addClass('screen-xsm');
  }else if($windowWidth > $screen.xsm && $windowWidth <= $screen.sm){
    target.addClass('screen-sm');
  }else if($windowWidth > $screen.sm && $windowWidth <= $screen.md){
    target.addClass('screen-md');
  }else if($windowWidth > $screen.md){
    target.addClass('screen-lg');
  }else{
    target.addClass('none');
  }
}

// 関数実行
// -------------------

$(window).on('load resize', function(){
  setScreenClass($('html'));
});

// ============================================================
// jquery
// ============================================================


$(function () {

  // オフキャンバスメニュー
  // ------------------------------------------------------------

  $(".js-offcanvas-menu").hiraku({
    btn: ".js-offcanvas-trigger",
    direction: "left",
    breakpoint: $screen.md
  });

  // オフキャンバス内 開閉メニュー
  // ------------------------------------------------------------

  $('[data-js-toggleOffcanvasMenu="trigger"]').click(function(e){
    winW = $(window).width();
    if(winW <= $screen.md){
      $(this).closest('[data-js-toggleOffcanvasMenu="item"]').find('ul').slideToggle();
      e.preventDefault();
    }
  });

  // ヘッダー固定
  // ------------------------------------------------------------

  var $header = $('[data-js-structure="header"]');
  var $body = $('[data-js-structure="body"]');
  var breakPoint = 1024;

  function doHeaderFixedPage(){
    var winW = $(window).width();
    if(winW > breakPoint){
      $header.addClass('is-header-fixed');
      $body.addClass('is-header-fixed');
    }else{
      $header.removeClass('is-header-fixed');
      $body.removeClass('is-header-fixed');
    }
  }

  // 関数実行

  if(!$header.hasClass('header--top')){
    $(window).on('load resize',function () {
      doHeaderFixedPage();
    });
  }

  // ============================================================
  // フッター固定処理
  // ============================================================

  // フッター固定バナーとページトップボタンが競合した場合
  // bottom値が変化するので処理を同期的に

  // footer-fixed-banner
  // ------------------------------------------------------------

  function setFooterFixedBanner() {

    var $targetElm = $('[data-js-structure="footer-fixed-banner"]');
    var $targetElmH = $targetElm.height();


  }

  // pagetop
  // ------------------------------------------------------------

  var showFlag = false;
  var $pagetopElm = $('.js-pagetop');
  $pagetopElm.css('bottom', '-100px');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {

      if (showFlag == false) {
        showFlag = true;
        $pagetopElm.removeClass('is-hidden');
        $pagetopElm.stop().animate({
          'bottom': '20px'
        }, 400);
      }
    } else {

      if (showFlag) {
        showFlag = false;
        $pagetopElm.stop().animate({
          'bottom': '-100px'
        }, 400);
      }

    }
  });

  $pagetopElm.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  // fixed-footer-banner
  // ------------------------------------------------------------

  var bannerShowFlag = false;
  $(window).on('scroll', function () {
    if($('[data-js-structure="footer-fixed-banner"]').length) {
      var $targetBannerElm = $('[data-js-structure="footer-fixed-banner"]');

      if ($(this).scrollTop() > 150) {

        if (bannerShowFlag == false) {
          bannerShowFlag = true;
          $targetBannerElm.stop().animate({
            'bottom': '0'
          }, 400);
        }
      } else {

        if (bannerShowFlag) {
          bannerShowFlag = false;
          $targetBannerElm.stop().animate({
            'bottom': '-100px'
          }, 400);
        }

      }

    }
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
      var inviewFlag = 'both';
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

  // CTA inview アニメーション
  // ------------------------------------------------------------

  if($('[data-js-inview="cta"]').length){

    var $this = $('[data-js-inview="cta"]');

    $this.on('inview',function (event, visible, topOrBottomOrBoth) {
      if (visible) {
        if(topOrBottomOrBoth === 'top') {
          setTimeout(function(){
            var $ctaTargetItem = $this.find('[data-js-inview="target"]');
            $ctaTargetItem.eq(0).addClass('animated fadeInLeft');
            $ctaTargetItem.eq(1).addClass('animated fadeInRight');
          },300);
        }
      }
    });
  }

  // indexアイテム アニメーション
  // ------------------------------------------------------------

  function setIndexItems($trigger) {
    if($trigger.length){
      var $this = $trigger;
      setTimeout(function(){
        setSequenceAnimation($this.find('[data-js-inview-target="sequence-item"]'), 'fadeInRight', 250);
      },300);
    }
  }

  setIndexItems($('[data-js-inview-trigger="card02_yj-index-a-summary"]'));
  setIndexItems($('[data-js-inview-trigger="index-card"]'));

});

// エディターのテキストエリアにhtmlボタンを追加
// ------------------------------------------------------------

ACMS.Ready(function () {
  ACMS.Config.LiteEditorConf.btnOptions.push({
    label: '打ち消し',
    tag: 's',
    className: '',
    sampleText: ''
  });
  ACMS.Config.aTableOption = [];
  ACMS.Config.aTableOption.push(
    {
    label: 'デフォルトテーブル',
    value: 'table01'
    },{
    label: '縦線なしテーブル',
    value: 'table02'
    },{
    label: 'レスポンシブテーブル',
    value: 'table03'
    },{
      label: '横スクロールテーブル',
      value: 'table01 acms-table-scrollable'
    }
    );
});
