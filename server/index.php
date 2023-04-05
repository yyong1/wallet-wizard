<?php
require '../vendor/autoload.php';


// import and register all business logic files (services) to FlightPHP
require_once __DIR__ . '/services/UserService.php';


Flight::register('userService', "UserService");


// import all routes
require_once __DIR__ . '/routes/UserRoutes.php';


// it is still possible to add custom routes after the imports
Flight::route('GET /', function () {
    echo "Hello";
});


Flight::start();
?>
