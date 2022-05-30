let options = {
    threshold: 0,
    rootMargin: '0px 0px -50px 0px'
}
let sliders = document.querySelectorAll('.slide-in-text');
const appearOnScroll = new window.IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        }
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry)
    });
}, options)

// sliders.forEach(fader => {
//     appearOnScroll.observe(fader)
// })
sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})