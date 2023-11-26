/* Show Menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu Show */
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu Hidden */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/* Remove Menu Mobile */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* Blur Header */
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50  ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/* Show Scroll Up */
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* Scroll Section Active Link */
const sections = document.querySelectorAll('section[id')

const scrollAcive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop    = current.offsetTop - 58,
              sectionId     = current.getAttribute('id'),
              sectionClass  = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
              
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollAcive)

/* Scroll Reveal Animation */

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true, //animations repeat
})

sr.reveal(`.home__social, .sponsor__container. footer`)
sr.reveal(`.home__title span:nth-child(1)`, {origin: 'left', opacity: 1})
sr.reveal(`.home__title span:nth-child(2)`, {origin: 'left', opacity: 1})
sr.reveal(`.home__title span:nth-child(3)`, {origin: 'left', opacity: 1})
sr.reveal(`.home__title span:nth-child(4)`, {origin: 'right', opacity: 1})
sr.reveal(`.home__title span:nth-child(5)`, {origin: 'right', opacity: 1})
sr.reveal(`.home__title span:nth-child(6)`, {origin: 'right', opacity: 1})
sr.reveal(`.home__title span:nth-child(7)`, {origin: 'right', opacity: 1})
sr.reveal(`.home__tooltip, .home__button`, {origin: 'bottom'})
sr.reveal(`.about__data`, {origin: 'left'})
sr.reveal(`.about__img, .feature__tooltip`, {origin: 'right'})

