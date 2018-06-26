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
  for (var i = 0; i < $('[data-tel').length; i++) {
    var telElem = $('[data-tel]').eq(i).html();
    var telUrl = $('[data-tel]').eq(i).data('tel');
    $('[data-tel]').eq(i).replaceWith('<a href="tel:' + telUrl + '" data-tel="' + telUrl + '">' + telElem + '</a>');
  }
}


// ============================================================
// @ hiraku js
// ============================================================

$(function () {
  $(".js-offcanvas").hiraku({
    btn: ".js-offcanvas-btn",
    fixedHeader: ".js-fixed-header",
    direction: "left",
    breakpoint: 769
  });
});
