import Vue from 'vue';
import * as variables from './functions/_variables';
import * as layout from './functions/_layout';
import * as animation from './functions/_animation';

new Vue({
  el: '#app',
  
  mounted(){
  
    layout.headerMenuAutoWidth();
    animation.hoge();
    
    
    function mvSetHeight(){
      
      const winH = window.innerHeight;
      const headerH = document.getElementById('header').clientHeight;
      const headerSecondaryMenuH = document.getElementsByClassName('header-secondary-menu')[0].clientHeight;
      const targetElm =  document.getElementById("mv");
      
      targetElm.style.height = winH - headerH + headerSecondaryMenuH + 'px';
    }
  
    window.addEventListener("load", mvSetHeight, false);
    window.addEventListener("resize", mvSetHeight, false);
    
    loading();
    
    function loading(){
      
      let rotateCount = 1;
      $('#loading_icon').on('animationiteration',function (){
        console.log(rotateCount);
        rotateCount++;
        
        if(rotateCount === 2){
          
          let stopCount = rotateCount;
          $('body').removeClass('is-step1').addClass('is-step2');
          setTimeout(function(){
            $('body').removeClass('is-step2').addClass('is-step3');
            $('#loading_icon').css('animation','rotation 2s ' + ' linear forwards');
          },2000);
          
        }
        
      });
  
      
      
    }
    
  }
});

