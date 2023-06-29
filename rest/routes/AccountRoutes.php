<?php

Flight::route('GET /connection-check', function () {
    Flight::categoriesService();
});

Flight::route('GET /hi', function () {
    echo "hi";
    //Flight::json(Flight::accountsService()->get_all());
});
Flight::route('GET /api/accountss', function () {
    Flight::json(Flight::accountsService()->get_all());
});


Flight::route('GET /api/accountss/@id', function ($id) {
    Flight::json(Flight::accountsService()->get_by_id($id));
});


Flight::route('GET /api/accountss/@firstName/@lastName', function ($firstName, $lastName) {
    Flight::json(Flight::accountsService()->getaccountsByFirstNameAndLastName($firstName, $lastName));
});


Flight::route('POST /api/accountss', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::accountsService()->add($data));
});


Flight::route('PUT /api/accountss/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::accountsService()->update($id, $data);
    Flight::json(Flight::accountsService()->get_by_id($id));
});


Flight::route('DELETE /api/accountss/@id', function ($id) {
    Flight::accountsService()->delete($id);
});

?>