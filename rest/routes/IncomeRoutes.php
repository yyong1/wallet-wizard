<?php

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


?>