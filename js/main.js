let nav = document.querySelector(".header");
window.onscroll = function(){
  if(document.documentElement.scrollTop > 50) {
    nav.classList.add("header-scolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
}