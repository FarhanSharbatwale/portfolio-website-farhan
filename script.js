function sendEmail() {
    let emailBody = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
}

const aboutCarObserver = new IntersectionObserver((entires) => {
    entires.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show")
            aboutCarObserver.unobserve(entry.target)
        } 
    })
}, { threshold: 0.4 })


const heroObserver = new IntersectionObserver((entires) => {
    entires.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("hero-visible")
        } else {
            entry.target.classList.remove("hero-visible")
        }
    })
}, { threshold: 0.28 })

const aboutItems = document.querySelectorAll(".about-infocards")
aboutItems.forEach(el => aboutCarObserver.observe(el))

const heroItems = document.querySelectorAll(".hero-container")
heroItems.forEach(el => heroObserver.observe(el))

const menu = document.getElementById("side-menu");
const menuOpen = document.getElementById("open-menu");
const menuClose = document.getElementById("menu-close");
const layer = document.getElementById("menu-layer");

menuOpen.addEventListener("click", () => {
    menu.classList.add("active");
    layer.classList.add("active");
});

menuClose.addEventListener("click", () => {
    menu.classList.remove("active");
    layer.classList.remove("active");
});

layer.addEventListener("click", () => {
    menu.classList.remove("active");
    layer.classList.remove("active");
});
