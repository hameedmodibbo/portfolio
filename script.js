const toggle = document.querySelector(".toggle");
const mobileNav = document.querySelector(".mobile-nav");
const about = document.querySelector('#about');
const hero = document.querySelector('.hero');


toggle.addEventListener('click', ()=>{
  mobileNav.classList.toggle("open")
})
const message = document.createElement('div');
// message.classList('cookie-message')
message.innerHTML = 'We use this cookie to provide better functionality and analytics<button class="cta btn-close-cookie">Got it!</button>';
console.log(hero);
message.classList.add('cookie-message')
about.append(message)
console.log(message);

const closeCookie = document.querySelector('.btn-close-cookie');
closeCookie.addEventListener('click',()=>{
  about.removeChild(message)
});
