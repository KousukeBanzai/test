export function scrollObserver(){
  
  function lazyLoadListner() {
    function loading(target) {
      target.classList.add('js_isActive');
    }
    
    function observeCallback(entries, observer) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        const target = entry.target;
        loading(target);
      });
    }
    
    const options_0 = {
      root: null,
      rootMargin: "0% 0%",
      threshold: 0
    };
    
    const options_25 = {
      root: null,
      rootMargin: "-30% 0%",
      threshold: 0
    };
    
    const options_35 = {
      root: null,
      rootMargin: "-35% 0%",
      threshold: 0
    };
    
    const options_50 = {
      root: null,
      rootMargin: "-50% 0%",
      threshold: 0
    };
    
    const options_75 = {
      root: null,
      rootMargin: "-75% 0%",
      threshold: 0
    };
    
    const observer_0 = new IntersectionObserver(observeCallback, options_0);
    const lazyloadImages_0 = document.querySelectorAll(".js_animation_0");
    
    const observer_25 = new IntersectionObserver(observeCallback, options_25);
    const lazyloadImages_25 = document.querySelectorAll(".js_animation_25");
    
    const observer_35 = new IntersectionObserver(observeCallback, options_35);
    const lazyloadImages_35 = document.querySelectorAll(".js_animation_35, .el_fadeUp_scroll");
    
    const observer_50 = new IntersectionObserver(observeCallback, options_50);
    const lazyloadImages_50 = document.querySelectorAll(".js_animation_50");
    
    const observer_75 = new IntersectionObserver(observeCallback, options_75);
    const lazyloadImages_75 = document.querySelectorAll(".js_animation_75");
    
    
    lazyloadImages_0.forEach(lazyloadImage => {
      observer_0.observe(lazyloadImage);
    });
    
    lazyloadImages_25.forEach(lazyloadImage => {
      observer_25.observe(lazyloadImage);
    });
    
    lazyloadImages_35.forEach(lazyloadImage => {
      observer_35.observe(lazyloadImage);
    });
    
    lazyloadImages_50.forEach(lazyloadImage => {
      observer_50.observe(lazyloadImage);
    });
    
    lazyloadImages_75.forEach(lazyloadImage => {
      observer_75.observe(lazyloadImage);
    });
    
  };
  
  lazyLoadListner();
  //window.addEventListener("DOMContentLoaded", lazyLoadListner);
  window.lazyLoadListner = lazyLoadListner;
  
}