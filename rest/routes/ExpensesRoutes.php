<?php



Flight::route('GET /hi', function () {
    echo "hi";
    //Flight::json(Flight::expensesService()->get_all());
});
Flight::route('GET /api/expenses', function () {
    Flight::json(Flight::expensesService()->get_all());
});


Flight::route('GET /api/expenses/@id', function ($id) {
    Flight::json(Flight::expensesService()->get_by_id($id));
});


Flight::route('GET /api/expenses/@firstName/@lastName', function ($firstName, $lastName) {
    Flight::json(Flight::expensesService()->getexpensesByFirstNameAndLastName($firstName, $lastName));
});


Flight::route('POST /api/expenses', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::expensesService()->add($data));
});


Flight::route('PUT /api/expenses/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::expensesService()->update($id, $data);
    Flight::json(Flight::expensesService()->get_by_id($id));
});


Flight::route('DELETE /api/expenses/@id', function ($id) {
    Flight::expensesService()->delete($id);
});

?>