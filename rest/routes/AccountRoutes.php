<?php

Flight::route('GET /connection-check', function () {
    Flight::accountsService();
});

Flight::route('GET /hi', function () {
    echo "hi";
    //Flight::json(Flight::userService()->get_all());
});
Flight::route('GET /api/users', function () {
    Flight::json(Flight::accountsService()->get_all());
});


Flight::route('GET /api/users/@id', function ($id) {
    Flight::json(Flight::accountsService()->get_by_id($id));
});


Flight::route('GET /api/users/@firstName/@lastName', function ($firstName, $lastName) {
    Flight::json(Flight::accountsService()->getUserByFirstNameAndLastName($firstName, $lastName));
});


Flight::route('POST /api/users', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::accountsService()->add($data));
});


Flight::route('PUT /api/users/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::accountsService()->update($id, $data);
    Flight::json(Flight::userService()->get_by_id($id));
});


Flight::route('DELETE /api/users/@id', function ($id) {
    Flight::accountsService()->delete($id);
});

?>