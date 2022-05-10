const navButton = document.querySelector('#nav-btn');
const nav = document.querySelector('#nav-bar');
const navOverlay = document.querySelector('#nav-overlay');
const body = document.querySelector('body');
const miniImg = document.querySelectorAll('.mini-img');
const hiddenImg = document.querySelector('#hidden-img');

document.addEventListener("mouseup", function () {
    if (event.target == navButton) {
        event.target.classList.toggle('on');
        navOverlay.classList.toggle('on');
        body.classList.toggle('noscroll')
    }
    else if (navButton.classList.contains('on') && event.target == navOverlay) {
        event.target.classList.remove('on');
        navButton.classList.remove('on');
        navOverlay.classList.remove('on');
        body.classList.toggle('noscroll');
    }

})

miniImg.forEach(img => {
    img.addEventListener("mouseover", function() {
        hiddenImg.style.background = window.getComputedStyle(img).getPropertyValue("background")
    })
});

// Plugin Scroll-Out - functioneaza doar online si afecteaza elementele cu atributul 'data-scroll'
ScrollOut({
    once: true,
    threshold: 0.8,
})
