$(document).ready(function () {
    // Function to check JWT
    function isUserLoggedIn(){
        // Here you can insert code to check JWT
        // ...
        // Return true if the user is logged in, and false otherwise
        return false;
    };

    var loggedInNavbar = `
        <ul class="primary-menu">
            <li><a href="#home" class="active">Home</a></li>
            <li><a href="#expenses" class="">Expenses</a></li>
            <li><a href="#income" class="">Income</a></li>
            <li><a href="#categories" class="">Categories</a></li>
            <li><a href="#accounts" class="">Accounts</a></li>
            <button type="button" class="btn btn-secondary">Log out</button>
        </ul>
    `;

    const loggedOutNavbar = `
        <ul class="primary-menu">
            <li><a href="#home" class="active">Home</a></li>
            <button type="button" class="btn btn-primary">Log in</button>
            <button type="button" class="btn btn-secondary">Sign up</button>
        </ul>
    `;

    var navbar = isUserLoggedIn() ? loggedInNavbar : loggedOutNavbar;

    $('#navbar').html(navbar);

    $('.mobile-nav i').click(function () {
        $('.site-nav-menu').toggleClass('mobile-menu');
        console.log('clicked');
    });

    // Event handlers for menu links
    const menuLinks = document.querySelectorAll('.primary-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Remove the active class from all links
            menuLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Add the active class to the clicked link
            this.classList.add('active');
        });
    });
});
