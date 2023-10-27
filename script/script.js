// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})
// Add this code in your existing JavaScript file or script tag

const skillItems = document.querySelectorAll('.skill-item');

const options = {
    threshold: 0.5, // When 50% of the element is visible
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.progress-bar');
            progressBar.style.width = progressBar.getAttribute('aria-valuenow') + '%';
            observer.unobserve(entry.target);
        }
    });
}, options);

skillItems.forEach(item => {
    observer.observe(item);
});

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    // Toggle the visibility of icons
    const lightIcon = document.querySelector('#theme-toggle .fa-sun');
    const darkIcon = document.querySelector('#theme-toggle .fa-moon');
    lightIcon.classList.toggle('hidden');
    darkIcon.classList.toggle('hidden');

    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);

    // Update button style based on theme
    themeToggle.classList.toggle('dark-button');
});

// Check if a theme preference is stored in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme + '-theme');
    if (savedTheme === 'dark') {
        const darkIcon = document.querySelector('#theme-toggle .fa-moon');
        darkIcon.classList.remove('hidden');
        themeToggle.classList.add('dark-button');
    } else {
        const lightIcon = document.querySelector('#theme-toggle .fa-sun');
        lightIcon.classList.remove('hidden');
        themeToggle.classList.remove('dark-button');
    }
}
