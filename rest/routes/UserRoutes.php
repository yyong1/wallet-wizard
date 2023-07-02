<?php



Flight::route('GET /hi', function () {
    echo "hi";
    //Flight::json(Flight::userService()->get_all());
});
Flight::route('GET /users', function () {
    Flight::json(Flight::userService()->get_all());
});


Flight::route('GET /users/@id', function ($id) {
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