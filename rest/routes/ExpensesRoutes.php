<?php

/**
 * @OA\Get(path="/expenses/{id}", tags={"Expenses"}, security={{"ApiKeyAuth": {}}},
 *     summary="Get expenses with user by ID",
 *     @OA\Parameter(in="path", name="id", example=10, description="User ID"),
 *     @OA\Response(response="200", description="Get expenses with user by ID")
 *     @OA\Response(response="404", description="User not found")
 * )
 */
Flight::route('GET /expenses/@id', function ($id) {
    $expenses = Flight::expensesService()->get_expenses_with_user_by_id($id);
    if ($expenses) {
        Flight::json($expenses);
    } else {
        Flight::json(['error' => 'User not found'], 404);
    }
});

/**
 * @OA\Get(path="/expenses_for_graph/{id}", tags={"Expenses"}, security={{"ApiKeyAuth": {}}},
 *     summary="Get expenses for graph by ID",
 *     @OA\Parameter(in="path", name="id", example=10, description="User ID"),
 *     @OA\Response(response="200", description="Get expenses for graph by ID")
 *     @OA\Response(response="404", description="User not found")
 * )
 */
Flight::route('GET /expenses_for_graph/@id', function ($id) {
    $expenses = Flight::expensesService()->get_expenses_for_graph($id);
    if ($expenses) {
        Flight::json($expenses);
    } else {
        Flight::json(['error' => 'User not found'], 404);
    }
});

/**
 * @OA\Get(path="/expenses_by_id/{id}", tags={"Expenses"}, security={{"ApiKeyAuth": {}}},
 *     summary="Get expense categories by ID",
 *     @OA\Parameter(in="path", name="id", example=10, description="User ID"),
 *     @OA\Response(response="200", description="Get expense categories by ID")
 *     @OA\Response(response="404", description="User not found")
 * )
 */
Flight::route('GET /expenses_by_id/@id', function ($id) {
    $expenses = Flight::expensesService()->get_expense_categories_by_id($id);
    if ($expenses) {
        Flight::json($expenses);
    } else {
        Flight::json(['error' => 'User not found'], 404);
    }
});

/**
 * @OA\Post(path="/categories", tags={"Categories"}, description="Add a new category", security={{"ApiKeyAuth": {}}},
 *     @OA\RequestBody(required=true, description="New category",
 *         @OA\MediaType(mediaType="application/json",
 *             @OA\Schema(required={"SubCategoryID","Amount", "UserID", "CategoryID", "AccountID", "CurrencyID", "Date", "TimeFrameID"},
 *                 @OA\Property(property="SubCategoryID", type="integer", example="1"),
 *                 @OA\Property(property="Amount", type="integer", example="100"),
 *                 @OA\Property(property="UserID", type="integer", example="5"),
 *                 @OA\Property(property="CategoryID", type="integer", example="2"),
 *                 @OA\Property(property="AccountID", type="integer", example="1"),
 *                 @OA\Property(property="Date", type="date", example="2002.2.2"),
 *                 @OA\Property(property="TimeFrameID", type="integer", example="1"),
 *             )
 *         )
 *     ),
 * )
 */
Flight::route('POST /add_expense', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::expensesService()->add($data));
});

?>