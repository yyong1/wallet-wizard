<?php

use Firebase\JWT\JWT;
use \Illuminate\Support\Facades\Hash;

/**
 * @OA\Get(path="/users", tags={"Users"}, security={{"ApiKeyAuth": {}}},
 *         summary="Return all users",
 *         @OA\Response( response=200, description="List of users")
 * )
 */
Flight::route('GET /users', function () {
    Flight::json(Flight::userService()->get_all());
});

/**
 * @OA\Get(path="/users/{id}", tags={"Users"}, security={{"ApiKeyAuth": {}}},
 *     summary="Return user by ID",
 *     @OA\Parameter(in="path", name="id", example=10, description="User data"),
 *     @OA\Response(response="200", description="Get user by ID")
 *     @OA\Response(response="404", description="User not found")
 * )
 */
Flight::route('GET /users/@id', function ($id) {
    $user = Flight::userService()->getUserById($id);
    if ($user) {
        Flight::json($user);
    } else {
        Flight::json(['error' => 'User not found'], 404);
    }
});

/**
 * @OA\Post(path="/login", tags={"Users"}, description="Check user (login) data and returns JWT token", security={{"ApiKeyAuth": {}}},
 *     @OA\RequestBody(required=true, description="Account data",
 *         @OA\MediaType(mediaType="application/json",
 *             @OA\Schema(required={"Email", "Password"},
 *                 @OA\Property(property="Email", type="string", example="exampl@mail.com"),
 *                 @OA\Property(property="Password", type="string", example="!123$rY")
 *             )
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="User has been successfully logged in"
 *     ),
 *     @OA\Response(
 *         response=401,
 *         description="Wrong password"
 *     ),
 *     @OA\Response(
 *         response=404,
 *         description="User not found"
 *     )
 * )
 */
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

/**
 * @OA\Post(path="/register", tags={"Users"}, description="Check user (registration) data and returns JWT token", security={{"ApiKeyAuth": {}}},
 *     @OA\RequestBody(required=true, description="Account data",
 *         @OA\MediaType(mediaType="application/json",
 *             @OA\Schema(required={"Email", "Password", "Username"},
 *                 @OA\Property(property="Email", type="string", example="exampl@mail.com"),
 *                 @OA\Property(property="Password", type="string", example="!123$rY"),
 *                 @OA\Property(property="Username", type="string", example="John Doe")
 *             )
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="User has been successfully registered"
 *     ),
 *     @OA\Response(
 *         response=500,
 *         description="Registration failed"
 *     )
 * )
 */
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

?>