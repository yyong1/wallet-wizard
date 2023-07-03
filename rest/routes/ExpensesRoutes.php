<?php

Flight::route('DELETE /api/expenses/@id', function ($id) {
    Flight::expensesService()->delete($id);
});

Flight::route('GET /expenses/@id', function ($id) {
    Flight::json(Flight::expensesService()->get_expenses_with_user_by_id($id));
});

?>