<!-- 
require 'vendor/autoload.php';
// require_once realpath(__DIR__ . "/vendor/autoload.php");

// env part require from the .env file
// for this u should create file (server/.env) where u can write ur variables 
use Dotenv\Dotenv;
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// env variables
$dbPassword = getenv("DB_PASSWORD");
$dbUsername = getenv("DB_USERNAME");
$dbName = getenv("DB_NAME");


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS, PATCH');

Flight::register('db', 'PDO', array('mysql:host=localhost:3306;dbname=web-project','root','123'));

// Flight::register('db', 'PDO', array("mysql:host=localhost:3306;dbname={$dbName}", $dbUsername, $dbPassword));

Flight::route('GET /api/users', function(){
    $users = Flight::db()->query('SELECT * FROM Users', PDO::FETCH_ASSOC)->fetchAll();
    var_dump($users);
    Flight::json($users);
});
    

Flight::start(); -->

<?php

// require 'vendor/autoload.php';
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS, PATCH');
// Flight::register('db', 'PDO', array('mysql:host=localhost:3306;dbname=web-project','root','123'));
// Flight::route('GET /api/users', function(){
//     $users = Flight::db()->query('SELECT * FROM Users', PDO::FETCH_ASSOC)->fetchAll();
//     var_dump($users);
//     Flight::json($users);
// });
// Flight::start();

// 4 lab part wit middlewares ----->

require 'vendor/autoload.php';
require 'rest/dao/UserDao.class.php';

Flight::register('userDao', 'UserDao');

Flight::route('GET /api/users', function(){
    Flight::json(Flight::userDao()->getUsers());
});

Flight::route('GET /api/users/@id', function($id){
    Flight::json(Flight::userDao()->getUserById($id));
});

Flight::route('POST /api/users', function(){
    $data = Flight::request()->data->getData();
    Flight::json(Flight::userDao()->addUser($data));
});

Flight::route('PUT /api/users/@id', function($id){
    $data = Flight::request()->data->getData();
    Flight::userDao()->updateUser($id, $data);
    Flight::json(Flight::userDao()->getUserById($id));
});

Flight::route('DELETE /api/users/@id', function($id){
    Flight::userDao()->deleteUser($id);
});

Flight::start();

?>
