<?php

// Flight::route('GET /hi', function () {
//     echo "hi";
//     //Flight::json(Flight::incomeService()->get_all());
// });
// Flight::route('GET /api/incomes', function () {
//     Flight::json(Flight::incomeService()->get_all());
// });


Flight::route('GET /incomes/@id', function ($id) {
    Flight::json(Flight::incomeService()->get_income_with_user_by_id($id));
});

Flight::route('GET /incomes_for_graph/@id', function ($id) {
    Flight::json(Flight::incomeService()->get_incomes_for_graph($id));
});

Flight::route('GET /income_by_id/@id', function ($id) {
    Flight::json(Flight::incomeService()->get_income_categories_by_id($id));
});

Flight::route('POST /add_income', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::incomeService()->add($data));
});

// Flight::route('POST /api/incomes', function () {
//     $data = Flight::request()->data->getData();
//     Flight::json(Flight::incomeService()->add($data));
// });

?>