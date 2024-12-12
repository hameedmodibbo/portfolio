const toggle = document.querySelector(".toggle");
const mobileNav = document.querySelector(".mobile-nav");


toggle.addEventListener('click', ()=>{
  mobileNav.classList.toggle("open")
})