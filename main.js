// navLinks.forEach( link => {
//     link.addEventListener('click', () =>{
//         document.body.classList.remove('nav-open');
//     });
// })

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// To make the toggle botton work
function navOpen() {
    document.body.classList.toggle('nav-open')
}

navToggle.addEventListener('click', navOpen);

// To make the nav toggle off when the nav link is click

navLinks.forEach( link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
