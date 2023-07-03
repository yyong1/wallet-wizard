<?php



Flight::route('GET /hi', function () {
    echo "hi";
    //Flight::json(Flight::accountsService()->get_all());
});
Flight::route('GET /api/accounts', function () {
    Flight::json(Flight::accountsService()->get_all());
});


Flight::route('GET /accounts/@id', function ($id) {
    Flight::json(Flight::accountsService()->get_account_with_user_by_id($id));
});


Flight::route('GET /api/accounts/@firstName/@lastName', function ($firstName, $lastName) {
    Flight::json(Flight::accountsService()->getaccountsByFirstNameAndLastName($firstName, $lastName));
});


Flight::route('POST /api/accounts', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::accountsService()->add($data));
});


Flight::route('PUT /api/accounts/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::accountsService()->update($id, $data);
    Flight::json(Flight::accountsService()->get_by_id($id));
});


Flight::route('DELETE /api/accounts/@id', function ($id) {
    Flight::accountsService()->delete($id);
});

?>