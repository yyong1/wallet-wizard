<?php

Flight::route('DELETE /expenses/@id', function ($id) {
    Flight::expensesService()->delete($id);
});

Flight::route('GET /expenses/@id', function ($id) {
    Flight::json(Flight::expensesService()->get_expenses_with_user_by_id($id));
});

Flight::route('GET /expenses_for_graph/@id', function ($id) {
    Flight::json(Flight::expensesService()->get_expenses_for_graph($id));
});

Flight::route('GET /expenses_by_id/@id', function ($id) {
    Flight::json(Flight::expensesService()->get_expense_categories_by_id($id));
});

Flight::route('POST /add_expense', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::expensesService()->add($data));
});

?>