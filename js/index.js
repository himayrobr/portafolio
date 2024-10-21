// Obtener el icono del menú y el menú desplegable
const menuIcon = document.getElementById('menu-icon');
const dropdownMenu = document.getElementById('dropdown-menu');

// Mostrar/ocultar el menú cuando se hace clic en el icono
menuIcon.addEventListener('click', function() {
    // Alternar el estilo de display entre 'block' y 'none'
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

// Ocultar el menú si se hace clic fuera de él
document.addEventListener('click', function(event) {
    // Verificar si el clic ocurrió fuera del icono del menú o el menú desplegable
    if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});

// Cambiar el estilo del encabezado cuando la ventana se desplaza
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    // Si el desplazamiento vertical es mayor a 50px, añadir la clase 'scrolled' para cambiar el borde
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
