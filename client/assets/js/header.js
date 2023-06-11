$(document).ready(function () {
    $('.mobile-nav i').click(function () {
        $('.site-nav-menu').toggleClass('mobile-menu');
        console.log('clicked');
    });
});

const menuLinks = document.querySelectorAll('.primary-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        // Remove the active class from all links
        menuLinks.forEach(link => {
            link.classList.remove('active');
        });
        // Adding the active class to the clicked link
        this.classList.add('active');
    });
});