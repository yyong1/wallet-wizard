<?php



Flight::route('GET /hi', function () {
    echo "hi";
    //Flight::json(Flight::incomeService()->get_all());
});
Flight::route('GET /api/incomes', function () {
    Flight::json(Flight::incomeService()->get_all());
});


Flight::route('GET /incomes/@id', function ($id) {
    Flight::json(Flight::incomeService()->get_income_with_user_by_id($id));
});


Flight::route('GET /api/incomes/@firstName/@lastName', function ($firstName, $lastName) {
    Flight::json(Flight::incomeService()->getincomeByFirstNameAndLastName($firstName, $lastName));
});


Flight::route('POST /api/incomes', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::incomeService()->add($data));
});


Flight::route('PUT /api/incomes/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::incomeService()->update($id, $data);
    Flight::json(Flight::incomeService()->get_by_id($id));
});


Flight::route('DELETE /api/incomes/@id', function ($id) {
    Flight::incomeService()->delete($id);
});


Flight::route('GET /incomes/@id', function ($id) {
    Flight::json(Flight::incomeService()->get_income_with_user_by_id($id));
});
?>