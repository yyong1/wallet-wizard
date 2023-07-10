<?php

/**
 * @OA\Get(path="/incomes/{id}", tags={"Icomes"}, security={{"ApiKeyAuth": {}}},
 *     summary="Get income with user by ID",
 *     @OA\Parameter(in="path", name="id", example=5, description="User ID"),
 *     @OA\Response(response="200", description="Get incomes with user by ID")
 *     @OA\Response(response="404", description="User not found")
 * )
 */
Flight::route('GET /incomes/@id', function ($id) {
    Flight::json(Flight::incomeService()->get_income_with_user_by_id($id));
});

/**
 * @OA\Get(path="/incomes_for_graph/{id}", tags={"Icomes"}, security={{"ApiKeyAuth": {}}},
 *     summary="Get incomes with category by ID",
 *     @OA\Parameter(in="path", name="id", example=1, description="Category ID"),
 *     @OA\Response(response="200", description="Get incomes with Category ID")
 *     @OA\Response(response="404", description="User not found")
 * )
 */
Flight::route('GET /incomes_for_graph/@id', function ($id) {
    Flight::json(Flight::incomeService()->get_incomes_for_graph($id));
});

/**
 * @OA\Get(path="/income_by_id/{id}", tags={"Icomes"}, security={{"ApiKeyAuth": {}}},
 *     summary="Get categories for incomes by User ID",
 *     @OA\Parameter(in="path", name="id", example=5, description="User ID"),
 *     @OA\Response(response="200", description="Get categories with User ID")
 *     @OA\Response(response="404", description="User not found")
 * )
 */
Flight::route('GET /income_by_id/@id', function ($id) {
    Flight::json(Flight::incomeService()->get_income_categories_by_id($id));
});

/**
 * @OA\Post(path="/add_income", tags={"Incomes"}, description="Add a new Income", security={{"ApiKeyAuth": {}}},
 *     @OA\RequestBody(required=true, description="New Income",
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
Flight::route('POST /add_income', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::incomeService()->add($data));
});


?>