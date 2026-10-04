const header=document.querySelector('.header');
let last=0;
window.addEventListener('scroll',()=>{const y=window.scrollY;if(y>30&&!header.classList.contains('scrolled'))header.classList.add('scrolled');if(y<=30)header.classList.remove('scrolled');last=y},{passive:true});
