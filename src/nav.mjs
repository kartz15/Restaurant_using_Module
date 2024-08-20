export { showSection , initializeNavigation};


// Function to show the target section and hide others
function showSection(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.toggle('active', section.id === id);
    });
}
// Function to initialize navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.navbar-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor click behavior
            const targetId = link.getAttribute('data-target');
            showSection(targetId);
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
        });
    });

    // Optionally, show the default section on page load
    showSection('home'); // Change 'home' to your default section if needed
}
