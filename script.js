const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
},
 {
  threshold: 0.2,
});
document.querySelectorAll('.fade-up, .fade-left, .fade-right')
.forEach((el) => observer.observe(el));

const hiddenElements = document.querySelectorAll(
  '.fade-up, .fade-left, .fade-right'
);

hiddenElements.forEach((el) => observer.observe(el));

// Navbar Blur On Scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if(window.scrollY > 50){
    header.style.background = 'rgba(2,6,23,.9)';
  }
  else{
    header.style.background = 'rgba(2,6,23,.5)';
  }
});