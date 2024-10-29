document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("animatedButton");
    const hoverText = button.querySelector(".hover-text");
    
    // Función para iniciar la animación
    function animateButton() {
        hoverText.style.width = '100%'; 
        hoverText.style.filter = 'drop-shadow(0 0 23px #8a28f3)'; 
    }

    animateButton();
        
    setTimeout(() => {
        window.location.href = "../views/home.html"; 
    }, 3500); 
});



gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".container");
const colors = [
    "#FF4D80",
    "#FF3E41",
    "#DF367C",
    "#883955",
    "#4C3549",
    "#88498F",
    "#423E3B",
];

let panelCreated = false;
let panelNum = 3;

const createPanel = (index) => {
    const section = document.createElement("section");
    const h1 = document.createElement("h1");
    container.appendChild(section);
    section.appendChild(h1);
    h1.innerHTML = `Panel ${index}`;
    gsap.set(section, {
        backgroundColor: colors[gsap.utils.random(0, colors.length-1, 1)],
        className: `panel-${index}`
    }); 
};

ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
        let progress = self.progress.toFixed(2);
        if (progress >= 0.9 && self.direction === 1) {
            createPanel(panelNum++);
            ScrollTrigger.refresh();
        }
    },
});
