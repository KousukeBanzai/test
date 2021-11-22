export class window_loading{
  
  eid = '';
  
  init() {
  
    //DOMをつっこんでおく
    let words = document.getElementsByClassName('loading-text-item');
    let wordArray = [];
    let currentWord = 0;
  
    //初期表示のテキストの透明度を100%に
    words[currentWord].style.opacity = 1;
  
    for (var i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    
    }
  
    function splitLetters(word) {
      //テキストの文字列を取得
      let content = word.innerHTML;
    
      //初期化
      word.innerHTML = '';
    
      let letters = [];
    
      //1文字づつループを回す
      for (let i = 0; i < content.length; i++) {
      
        //span要素作成
        let letter = document.createElement('span');
      
        //span要素にクラス名付与
        letter.className = 'letter';
      
        //文字も要素に追加
        letter.innerHTML = content.charAt(i);
      
        //受け取ったDOMに要素を追加
        word.appendChild(letter);
      
        //配列に追加
        letters.push(letter);
      }
    
    
      //正規化したデータを配列に
      wordArray.push(letters);
    }
  
    //フェードアウト処理
    function animateLetterOut(cw, i) {
      setTimeout(function() {
        cw[i].className = 'letter out';
      }, i*80);
    }
  
    //フェードイン処理
    function animateLetterIn(nw, i) {
      setTimeout(function() {
        nw[i].className = 'letter in';
      }, 340+(i*80));
    }
  
    function changeWord() {
    
      //現在のデータ
      var cw = wordArray[currentWord];
    
      //次のデータ、回帰的に処理させる
      var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
    
      //文字数分フェードアウト処理
      for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
      }
    
      //
      // 二段階目のアニメーションを追加したい場合はここに処理を記述
      // その場合、一段階目と二段階目で関数処理を関数分けした方が良き
      //
    
      //出現処理
      for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
      }
    
      //インクリメント処理
      currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
    }
  
    startInterval();
    
    let intervalId;
    function startInterval() {
      intervalId = setInterval(() =>{
        changeWord();
      }, 2000);
    }
    
    this.eid = intervalId;
    
    
  }
  restart(){
    console.log(this.eid);
    setInterval(this.eid,2000)
  }
  stop() {
    function stopInterval(intervalId) {
      clearInterval(intervalId);
    }
    stopInterval(this.eid);
  }
}
