import * as func from './functions/_ua';
import Vue from 'vue';

new Vue({
  el: '#app',
});

const param = 5;
const result = func.hoge(param);

console.log(result);