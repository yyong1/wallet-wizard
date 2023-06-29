<?php
ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL);

require '../vendor/autoload.php';

require "dao/AccountDao.class.php";
require "dao/CategoriesDao.class.php";
require "dao/ExpensesDao.class.php";
require "dao/IncomeDao.class.php";
require "dao/SubcategoryDao.class.php";
require "dao/UserDao.class.php";

// import and register all business logic files (services) to FlightPHP
require_once __DIR__ . '/services/UserServices.php';
require_once __DIR__ . '/services/AccountsServices.php';
require_once __DIR__ . '/services/CategoriesServices.php';
require_once __DIR__ . '/services/ExpensesServices.php';
require_once __DIR__ . '/services/SubcategoryServices.php';
require_once __DIR__ . '/services/IncomeServices.php';


Flight::register('userService', "UserServices");
Flight::register('accountsService', "AccountsServices");
Flight::register('categoriesService', "CategoriesServices");
Flight::register('expensesService', "ExpensesServices");
Flight::register('subcategoryService', "SubcategoryServices");
Flight::register('incomeService', "IncomeServices");


// import all routes
require_once __DIR__ . '/routes/UserRoutes.php';
require_once __DIR__ . '/routes/AccountRoutes.php';
require_once __DIR__ . '/routes/CategoriesRoutes.php';
require_once __DIR__ . '/routes/ExpensesRoutes.php';
require_once __DIR__ . '/routes/SubcategoryRoutes.php';
require_once __DIR__ . '/routes/IncomeRoutes.php';


// it is still possible to add custom routes after the imports
Flight::route('GET /', function () {
    echo "Hello";
});


Flight::start();


// echo "hi";

?>
