document.addEventListener("scroll", () => {
    const skillsSection = document.getElementById('skills-section');
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0 && !skillsSection.dataset.loaded) {
        loadSkills();
        skillsSection.dataset.loaded = true; // Marca como cargado
    }
});

// Animación de habilidades
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const observerOptions = {
        root: null,
        threshold: 1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.add('bounce');
            } else {
                entry.target.classList.remove('visible');
                entry.target.classList.remove('bounce');
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});

// Desplazamiento suave
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            scrollTop: $target.offset().top
        }, 1200);
    });
});

// Scroll de proyectos
const proyectos = [
    { titulo: 'Proyecto 1', descripcion: 'Descripción del proyecto 1.', imagen: '../storage/img/spacex.png' },
    { titulo: 'Proyecto 2', descripcion: 'Descripción del proyecto 2.', imagen: '../storage/img/wallet.png' },
    { titulo: 'Proyecto 3', descripcion: 'Descripción del proyecto 3.', imagen: '../storage/img/redmoon.png' }
];

let indiceActual = 0;
const titulo = document.querySelector('.contendido h1');
const descripcion = document.querySelector('.contendido p');
const imagenProyecto = document.querySelector('.imagenProyecto img');
const imagenBorrosa = document.querySelector('.imagenBorrosa');

document.getElementById('btnPrev').addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + proyectos.length) % proyectos.length;
    actualizarProyecto();
});

document.getElementById('btnNext').addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % proyectos.length;
    actualizarProyecto();
});

function actualizarProyecto() {
    const proyecto = proyectos[indiceActual];
    titulo.textContent = proyecto.titulo;
    descripcion.textContent = proyecto.descripcion;
    imagenProyecto.src = proyecto.imagen;
    imagenBorrosa.src = proyecto.imagen;
}
