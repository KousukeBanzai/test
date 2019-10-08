$(function () {

  var $formType01 = $("#js-form-validation");
  // ------------------------------------------------------------
  // @ init
  // ------------------------------------------------------------

  var valDataKey = 'data-validation-engine',
      valReq     = 'validate[required]';

  $('.js-validation-required').attr(valDataKey,valReq);
  $('#fld_mail').attr(valDataKey,'validate[required,custom[email]]');

  // ------------------------------------------------------------
  // @ validationEngine
  // ------------------------------------------------------------

  $formType01.validationEngine({
    promptPosition: "bottomLeft",//エラー文の表示位置
    showArrowOnRadioAndCheckbox: true,//エラー箇所の図示
    focusFirstField: true,//エラー時に一番文頭の入力フィールドにフォーカスさせるかどうか
    scroll: true,
    scrollOffset: 50
  });

  $.fn.autoKana('#fld_name', '#fld_phonetic', {
    katakana: true  //true：カタカナ、false：ひらがな（デフォルト）
  });

  $formType01.jpostal({
    postcode: [
      '#fld_zipcode'
    ],
    address: {
      '#fld_zip': '%3%4%5',
    }
  });

});