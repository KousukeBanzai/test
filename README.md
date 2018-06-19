# コーディングマナー

メンテナンス性、効率を意識したコーディングを心がけます。
拡張性、再利用性、柔軟性、ルールを持たせます。
要素の追加・削除のし易さを意識します。
制作の環境に合わせて適宜調整します。

## 対応ブラウザ

Internet Explorer11、Microsoft Edge 最新ver、Firefox 最新ver、Chrome 最新ver Safari 最新ver
スマートフォンOSに搭載されている標準のブラウザ
旧ブラウザは閲覧性を重視します。

## 命名規則 

### 共通

単語の繋ぎはハイフン「 - 」を使用します。

### HTML

ファイル名はページタイトルを英語化します。

### CSS

BEM記法、マルチクラス  

- ````[塊]__[要素]--[属性]````  
- ````[接頭辞]-[塊]__[要素]--[属性]````

````
<div class="unit">
     <div class="unit__header">
      <h2 class-"unit__title">タイトル</h2>
     </div>
     <div class="unit__body">
         <ul class="list list--disc">
           <li class="list__item">テキスト</li>
           <li class="list__item">テキスト</li>
         </ul>
     </div>
 </div>
````

### img

固有のClass名がある場合は同じファイル名でも良いです。

- ````[要素]_[属性]_[連番]````
- ````[接頭辞]-[要素]_[属性]_[連番]````