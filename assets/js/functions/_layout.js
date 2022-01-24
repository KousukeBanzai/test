export function headerMenuAutoWidth(){
  
  $(window).on('load resize',function (){
    // nav widht
    let winW = $(window).width();
    $('.header-secondary-menu').css('width',winW);
    
  })
  
}


