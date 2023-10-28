
window.addEventListener('scroll', ScrollTop);

function scrollToTop() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}

function ScrollTop() {
    const button = document.querySelector('.scroll-to-top');
    if (document.documentElement.scrollTop > 100) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}
