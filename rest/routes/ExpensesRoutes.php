<?php



Flight::route('GET /hi', function () {
    echo "hi";
    //Flight::json(Flight::expensesService()->get_all());
});
Flight::route('GET /api/expensess', function () {
    Flight::json(Flight::expensesService()->get_all());
});


Flight::route('GET /api/expensess/@id', function ($id) {
    Flight::json(Flight::expensesService()->get_by_id($id));
});


Flight::route('GET /api/expensess/@firstName/@lastName', function ($firstName, $lastName) {
    Flight::json(Flight::expensesService()->getexpensesByFirstNameAndLastName($firstName, $lastName));
});


Flight::route('POST /api/expensess', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::expensesService()->add($data));
});


Flight::route('PUT /api/expensess/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::expensesService()->update($id, $data);
    Flight::json(Flight::expensesService()->get_by_id($id));
});


Flight::route('DELETE /api/expensess/@id', function ($id) {
    Flight::expensesService()->delete($id);
});

?>