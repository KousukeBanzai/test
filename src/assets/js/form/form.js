$(function () {
  // ------------------------------------------------------------
  // @ autoKana
  // ------------------------------------------------------------

  $.fn.autoKana('#first-name', '#first-kana', {
    katakana: true  //true：カタカナ、false：ひらがな（デフォルト）
  });
  $.fn.autoKana('#name', '#kana', {
    katakana: true  //true：カタカナ、false：ひらがな（デフォルト）
  });

  // ------------------------------------------------------------
  // @ jpostal
  // ------------------------------------------------------------

  $('#zipcode01').jpostal({
    postcode: [
      '#zipcode01',
      '#zipcode02'
    ],
    address: {
      '#zip01': '%3',
      '#zip02': '%4%5'
    }
  });

});