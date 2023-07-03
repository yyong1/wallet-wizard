$(document).ready(function () {
    // Function to check JWT
    function isUserLoggedIn(){
        // Here check JWT
        var token = localStorage.getItem("jwt_token");
        return token !== null && token !== undefined;
    };

    var loggedInNavbar = `
        <ul class="primary-menu">
            <li><a href="#expenses" class="">Expenses</a></li>
            <li><a href="#income" class="">Income</a></li>
            <li><a href="#categories" class="">Categories</a></li>
            <li><a href="#accounts" class="">Accounts</a></li>
            <button type="button" class="btn btn-secondary btn-header-logout">Log out</button>
        </ul>
    `;

    const loggedOutNavbar = `
        <ul class="primary-menu">
            <li><a href="#home" class="active">Home</a></li>
            <button type="button" class="btn btn-primary btn-header-login">Log in</button>
            <button type="button" class="btn btn-secondary btn-header-signup">Sign up</button>
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

    function handleLogout() {
        localStorage.removeItem("jwt_token");
        isUserLoggedIn();
        console.log('Logged out successfully');
    }

    // Event listener for log out button click
    $(".btn-header-logout").on("click", function () {
        handleLogout();
    });
});
