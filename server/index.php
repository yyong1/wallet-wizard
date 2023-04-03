<?php

require 'vendor/autoload.php';
require 'rest/dao/UserDao.class.php';

Flight::register('userDao', 'UserDao');

Flight::route('/', function () {
    echo "hi";
});

Flight::route('GET /api/users', function () {
    Flight::json(Flight::userDao()->getUsers());
});

Flight::route('GET /api/users/@id', function ($id) {
    Flight::json(Flight::userDao()->getUserById($id));
});

Flight::route('POST /api/users', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::userDao()->addUser($data));
});

Flight::route('PUT /api/users/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::userDao()->updateUser($id, $data);
    Flight::json(Flight::userDao()->getUserById($id));
});

Flight::route('DELETE /api/users/@id', function ($id) {
    Flight::userDao()->deleteUser($id);
});

Flight::start();

?>