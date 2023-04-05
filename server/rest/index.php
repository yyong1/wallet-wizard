<?php

require 'vendor/autoload.php';
require '/services/UserServices.php';

Flight::register('userService', 'UserServices');

// import all routes
require_once __DIR__ . '/routes/UserRoutes.php';

// it is still possible to add custom routes after the imports
Flight::route('GET /', function () {
    echo "Hello";
});


Flight::start();

?>