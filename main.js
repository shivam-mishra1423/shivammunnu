// Typed.js
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Full Stack Developer", "AI Enthusiast", "Machine Learning"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

// Skills bar animation
window.addEventListener('load', () => {
    document.querySelector('.progress-line.html span').style.width = "90%";
    document.querySelector('.progress-line.css span').style.width = "80%";
    document.querySelector('.progress-line.js span').style.width = "70%";
    document.querySelector('.progress-line.python span').style.width = "75%";
    document.querySelector('.progress-line.react span').style.width = "65%";
});