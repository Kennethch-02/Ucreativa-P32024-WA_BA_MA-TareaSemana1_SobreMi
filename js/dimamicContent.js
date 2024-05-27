// Función para manejar el clic en los enlaces del menú de navegación
function handleNavClick(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

    // Remover la clase 'active' de todos los enlaces
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('active'));

    // Agregar la clase 'active' al enlace clickeado
    event.target.classList.add('active');

    // Obtener el ID de la sección a la que se debe desplazar
    const sectionId = event.target.getAttribute('href').substring(1);

    // Desplazarse a la sección correspondiente
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Agregar event listeners a los enlaces del menú de navegación
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.addEventListener('click', handleNavClick));
});