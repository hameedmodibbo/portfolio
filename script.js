const toggle = document.querySelector(".toggle");
const mobileNav = document.querySelector(".mobile-nav");
const about = document.querySelector('#about');
const hero = document.querySelector('.hero');

const nav = document.querySelector('.main-header');
const logo = document.querySelector('.logo');
const navLinks = document.querySelector('.mobile-nav');

toggle.addEventListener('click', ()=>{
  mobileNav.classList.toggle("open");
})
const message = document.createElement('div');
message.innerHTML = 'We use this cookie to provide better functionality and analytics<button class="cta btn-close-cookie">Got it!</button>';
console.log(hero);
message.classList.add('cookie-message')
about.append(message)

const closeCookie = document.querySelector('.btn-close-cookie');
closeCookie.addEventListener('click',()=>{
  about.removeChild(message)
});

// navLinks.addEventListener('click', function(e){
// if (e.target.classList.contains('nav-link')) {
  
// }
// });

const stickyNav = function(entries, observer){
  const [entry] = entries;
  
  if(!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove('sticky');

  stickyobserver.unobserve(hero)
}
const stickyobserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0
}) 
stickyobserver.observe(hero);