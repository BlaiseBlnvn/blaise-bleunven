const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
if(toggle&&links){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===current){a.classList.add('active');a.setAttribute('aria-current','page');}});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
