$(document).ready(function () {
    $('.mobile-nav i').click(function () {
        $('.site-nav-menu').toggleClass('mobile-menu');
        console.log('clicked');
    });

    // Функция проверки JWT
    function isUserLoggedIn(){
        // Здесь вы можете вставить код для проверки JWT
        // ...
        // Вернуть true, если пользователь вошел в систему, и false в противном случае
        return true;
    };

    var loggedInNavbar = `
        <ul class="primary-menu">
            <li><a href="#home" class="active">Home</a></li>
            <li><a href="#expenses" class="">Expenses</a></li>
            <li><a href="#income" class="">Income</a></li>
            <li><a href="#categories" class="">Categories</a></li>
            <li><a href="#accounts" class="">Accounts</a></li>
            <li><button type="button" class="btn btn-secondary">Log out</button></li>
        </ul>
    `;

    const loggedOutNavbar = `
        <ul class="primary-menu">
            <li><a href="#home" class="active">Home</a></li>
            <li><button type="button" class="btn btn-primary">Log in</button></li>
            <li><button type="button" class="btn btn-secondary">Sign up</button></li>
        </ul>
    `;

    var navbar = isUserLoggedIn() ? loggedInNavbar : loggedOutNavbar;

    $('#navbar').html(navbar);

    // Обработчики событий для ссылок меню
    const menuLinks = document.querySelectorAll('.primary-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Удалить активный класс у всех ссылок
            menuLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Добавить активный класс к нажатой ссылке
            this.classList.add('active');
        });
    });
});



// // Animation for the header
// $(document).ready(function () {
//     $('.mobile-nav i').click(function () {
//         $('.site-nav-menu').toggleClass('mobile-menu');
//         console.log('clicked');
//     });
// });

// const menuLinks = document.querySelectorAll('.primary-menu a');
// menuLinks.forEach(link => {
//     link.addEventListener('click', function (event) {
//         // Remove the active class from all links
//         menuLinks.forEach(link => {
//             link.classList.remove('active');
//         });
//         // Adding the active class to the clicked link
//         this.classList.add('active');
//     });
// });
