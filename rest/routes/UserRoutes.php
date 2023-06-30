<?php

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

Flight::route('GET /users', function () {
    Flight::json(Flight::userService()->get_all());
});

Flight::route('GET /users/@id', function ($id) {
    Flight::json(Flight::userService()->get_by_id($id));
});

Flight::route('POST /user/login', function () {
    $loginData = Flight::request()->data->getData();
    $user = Flight::usersService()->getEmail($loginData['user_email']);
    if(isset($user['userID'])){
      if($user['password'] == md5($loginData['password'])){
        $user['id'] = $user['userID'];
        unset($user['userID']);
        unset($user['password']);
  
        $jwt = JWT::encode($user, Config::JWT_SECRET(), 'HS256');
        Flight::json(['jwt_token' => $jwt]);
      }else{
        Flight::json(["message"=> "Wrong password"],404);
      }
    }else{
      Flight::json(array($user),404);
    }
});

Flight::route('POST /user/register', function () {
    
});

Flight::route('GET /api/categories/@id', function ($id) {
    Flight::json(Flight::userService()->get_by_id($id));
});

Flight::route('GET /api/users/@firstName/@lastName', function ($firstName, $lastName) {
    Flight::json(Flight::userService()->getUserByFirstNameAndLastName($firstName, $lastName));
});

Flight::route('POST /api/users', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::userService()->add($data));
});

Flight::route('PUT /api/users/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::userService()->update($id, $data);
    Flight::json(Flight::userService()->get_by_id($id));
});

Flight::route('DELETE /api/users/@id', function ($id) {
    Flight::userService()->delete($id);
});

?>