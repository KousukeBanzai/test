import jquery from "jquery";
import Vue from 'vue';
import { hello } from "./sub";
import "../scss/style.scss";

// ドルマークに参照を代入(慣習的な $ を使うため)
const $ = jquery;

// sub.jsに定義されたJavaScriptを実行する。
//hello();

$('#test').addClass('hoge');

new Vue({
  el: "#app"
});
