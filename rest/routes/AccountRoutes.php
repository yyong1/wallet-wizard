<?php



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

Flight::route('GET /accounts/@id', function ($id) {
    Flight::json(Flight::accountsService()->get_account_with_user_by_id($id));
});


Flight::route('GET /api/accountss/@firstName/@lastName', function ($firstName, $lastName) {
    Flight::json(Flight::accountsService()->getaccountsByFirstNameAndLastName($firstName, $lastName));
});


Flight::route('POST /add_accounts', function () {
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

Flight::route('GET /accounts_by_id/@id', function ($id) {
    Flight::json(Flight::accountsService()->get_expense_accounts_by_id($id));
});


?>