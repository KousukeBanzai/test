$(function () {

  var $formType01 = $(".js-contact-form01");
  // ------------------------------------------------------------
  // @ init
  // ------------------------------------------------------------

  var valDataKey = 'data-validation-engine',
      valReq     = 'validate[required]';

  $('#fld_name01').attr(valDataKey,valReq);
  $('#fld_mail01').attr(valDataKey,'validate[required,custom[email]]');

  $('#fld_age').attr(valDataKey,valReq);
  $('#fld_sex').attr(valDataKey,valReq);
  $('#fld_type').attr(valDataKey,valReq);
  $('#fld_marriage').attr(valDataKey,valReq);
  $('#fld_your-body').attr(valDataKey,valReq);
  $('#fld_partner-body input').attr(valDataKey,valReq);
  $('#fld_partner-age input').attr(valDataKey,valReq);
  $('#fld_work').attr(valDataKey,valReq);
  $('#fld_tabacco').attr(valDataKey,valReq);
  $('#fld_msg').attr(valDataKey,valReq);
  $('#fld_agree input').attr(valDataKey,valReq);

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

  $.fn.autoKana('#fld_name01', '#fld_name0101', {
    katakana: true  //true：カタカナ、false：ひらがな（デフォルト）
  });

  $formType01.jpostal({
    postcode: [
      '#fld_zipcode'
    ],
    address: {
      '#fld_zip01': '%3',
      '#fld_zip02': '%4%5'
    }
  });

});