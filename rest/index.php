<?php
ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL);

require '../vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

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

// Flight::route('/*', function(){
//     //perform JWT decode
//     $path = Flight::request()->url;
//     if ($path == '/login' || $path =='/register' || $path == '/docs.json') return TRUE;

//     $headers = getallheaders();
//     if (!isset($headers['Authentication'])){
//         // Flight::json(["message" => $headers]);
//         Flight::json(["message" => "Authorization is missing"], 403);
//         return FALSE;
//     }else{
//         try {
//             $decoded = (array)JWT::decode($headers['Authentication'], new Key(Config::JWT_SECRET(), 'HS256'));
//             Flight::set('user', $decoded);
//             return TRUE;
//         } catch (\Exception $e) {
//             Flight::json(["message" => "Authorization token is not valid"], 403);
//             return FALSE;
//         }
//     }
// });

Flight::route('GET /docs.json', function(){
    $openapi = \OpenApi\scan('routes');
    header('Content-Type: application/json');
    echo $openapi->toJson();
});

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
