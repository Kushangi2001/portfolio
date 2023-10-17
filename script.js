const header = document.querySelector("header");

window.addEventListener ("scroll", funtion() {
    header.classList.toggle ("sticky" , window.scrollY > 200)
});

let menu = document.querySelector('menu-icon');
let nav = document.querySelector('.navlist');

menu.onclick = ()=>  {
    menu.classList.toggle('bx bx-menu');
    nav.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2050,
    delay: 200,
    reset: true,
});
sr.reveal('.hero-text',{origin: 'top'});
sr.reveal('image, .service-item, .about-text', {origin: 'bottom'});
sr.reveal('about-text h2, .text-center, .right-contact h2', {origin: 'top'});

