<?php

use Firebase\JWT\JWT;
use \Illuminate\Support\Facades\Hash;

Flight::route('GET /users', function () {
    Flight::json(Flight::userService()->get_all());
});

Flight::route('GET /users/@id', function ($id) {
    $user = Flight::userService()->getUserById($id);
    if ($user) {
        Flight::json($user);
    } else {
        Flight::json(['error' => 'User not found'], 404);
    }
});


Flight::route('POST /login', function () {
    $loginData = Flight::request()->data->getData();

    $user = Flight::userService()->getEmail($loginData['Email']);

    if ($user) {
        if (md5($loginData['Password']) === $user['Password']) {
            unset($user['Password']);

            $jwtPayload = [
                'UserID' => $user['UserID'],
                'Email' => $user['Email'],
                'Username' => $user['Username']
                // Add any other relevant data to the payload
            ];

            $jwt = JWT::encode($jwtPayload, Config::JWT_SECRET(), 'HS256');
            Flight::json(['jwt_token' => $jwt]);
        } else {
            Flight::json(['error' => 'Wrong password'], 401);
        }
    } else {
        Flight::json(['error' => 'User not found'], 404);
    }
});


Flight::route('POST /register', function () {
    $registrationData = Flight::request()->data->getData();

    $hashedPassword = md5($registrationData['Password']);
    $userId = (Flight::userService()->getMaxUserId()) + 1;
    $registrationData['UserID'] = $userId;
    $registrationData['Password'] = $hashedPassword;

    $user = Flight::userService()->add($registrationData);

    if ($user) {
        $userForFront = Flight::userService()->get_user_by_id($user['UserID']);
        unset($userForFront['Password']);
        $jwt = JWT::encode($userForFront, Config::JWT_SECRET(), 'HS256');
        
        Flight::json(['jwt_token' => $jwt]);
    } else {
        Flight::json(['error' => 'Registration failed'], 500);
    }
});

Flight::route('GET /users/@id', function ($id) {
    Flight::json(Flight::userService()->get_by_id($id));
});

// Flight::route('GET /api/users/@firstName/@lastName', function ($firstName, $lastName) {
//     Flight::json(Flight::userService()->getUserByFirstNameAndLastName($firstName, $lastName));
// });

// Flight::route('POST /api/users', function () {
//     $data = Flight::request()->data->getData();
//     Flight::json(Flight::userService()->add($data));
// });

// Flight::route('PUT /api/users/@id', function ($id) {
//     $data = Flight::request()->data->getData();
//     Flight::userService()->update($id, $data);
//     Flight::json(Flight::userService()->get_by_id($id));
// });

// Flight::route('DELETE /api/users/@id', function ($id) {
//     Flight::userService()->delete($id);
// });

?>