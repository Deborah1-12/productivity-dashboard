const themeToggler = document.getElementById('theme-toggler');
const icon = document.querySelector('#theme-toggler i');

//theme toggle
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});