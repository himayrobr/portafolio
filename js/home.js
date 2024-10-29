document.addEventListener("scroll", () => {
    const skillsSection = document.getElementById('skills-section');
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0 && !skillsSection.dataset.loaded) {
        loadSkills();
    }
});

// esta parte es la animacion de las habilidades document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.card'); 
        const observerOptions = {
            root: null, // Observa el viewport
            threshold: 1 // Se activa cuando el 100% del elemento es visible
        };
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Cuando la tarjeta es visible, añade la clase 'visible' y 'bounce'
                    entry.target.classList.add('visible');
                    entry.target.classList.add('bounce'); // Agrega la clase de rebote
                } else {
                    // Cuando la tarjeta ya no es visible, elimina las clases
                    entry.target.classList.remove('visible');
                    entry.target.classList.remove('bounce'); // Remueve la clase de rebote
                }
            });
        }, observerOptions);
    
        cards.forEach(card => {
            observer.observe(card); 
        });
    });

// Espera a que el documento esté listo
$(document).ready(function() {
    // Establece la velocidad de desplazamiento suave
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        
        // Calcula la posición del objetivo
        var target = this.hash;
        var $target = $(target);

        // Desplazamiento suave
        $('html, body').animate({
            scrollTop: $target.offset().top
        }, 1200); // Cambia 800 a la duración en milisegundos que desees
    });
});

// scroll de proyectos
const proyectos = [
    {
      titulo: 'Proyecto 1',
      descripcion: 'Descripción del proyecto 1.',
      imagen: '../storage/img/spacex.png',
    },
    {
      titulo: 'Proyecto 2',
      descripcion: 'Descripción del proyecto 2.',
      imagen: '../storage/img/flat-design-electronic-music-fest-photocall.png',
    },
    {
      titulo: 'Proyecto 3',
      descripcion: 'Descripción del proyecto 3.',
      imagen: '../storage/img/imagen3.jpg',
    },
  ];
  
  let indiceActual = 0;
  
  const titulo = document.querySelector('.contendido h1');
  const descripcion = document.querySelector('.contendido p');
  const imagenProyecto = document.querySelector('.imagenProyecto img');
  const imagenBorrosa = document.querySelector('.imagenBorrosa'); // Selecciona la imagen borrosa
  
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
    imagenBorrosa.src = proyecto.imagen; // Cambia la imagen borrosa también
  }
  