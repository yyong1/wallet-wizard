<?php

/**
 * @OA\Get(path="/accounts/{id}", tags={"Accounts"}, security={{"ApiKeyAuth": {}}},
 *     summary="Return all account by user ID",
 *     @OA\Parameter(in="path", name="id", example=10, description="Account and user ID"),
 *     @OA\Response(response="200", description="Get all accounts by user ID")
 * )
 */

Flight::route('GET /accounts/@id', function ($id) {
    Flight::json(Flight::accountsService()->get_account_with_user_by_id($id));
});

/**
 * @OA\Post(path="/add_accounts", tags={"Accounts"}, description="Add a new account", security={{"ApiKeyAuth": {}}},
 *     @OA\RequestBody(required=true, description="New account",
 *         @OA\MediaType(mediaType="application/json",
 *             @OA\Schema(required={"id","title", "content", "create_time", "user_id", "category_id"},
 *                 @OA\Property(property="AccountName", type="string", example="Visa"),
 *                 @OA\Property(property="Value", type="integer", example="150"),
 *                 @OA\Property(property="UserID", type="integer", example="1"),
 *             )
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Account has been successfully added"
 *     ),
 *     @OA\Response(
 *         response=500,
 *         description="Error"
 *     )
 * )
 */

Flight::route('POST /add_accounts', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::accountsService()->add($data));
});

/**
 * @OA\Put(path="/accounts_by_id/{id}/{value}", tags={"Accounts"}, description="Update amount", security={{"ApiKeyAuth": {}}},
 *     @OA\Parameter(in="path", name="id", example=16, description="ID of the account to update", required=true),
 *     @OA\Parameter(in="path", name="value", example=100, description="New amount", required=true),
 *     @OA\RequestBody(required=false, description="Updated account amount"),
 *     @OA\Response(
 *         response=200,
 *         description="Account has been successfully updated"
 *     ),
 *     @OA\Response(
 *         response=404,
 *         description="Account not found"
 *     ),
 * )
 */

Flight::route('PUT /update_account_income/@accountid/@value', function ($accountid, $value) {
    Flight::accountsService()->update_account_income($accountid, $value);
});

/**
 * @OA\Get(path="/accounts_by_id/{id}", tags={"Accounts"}, security={{"ApiKeyAuth": {}}},
 *     summary="Return all expenses accounts by user ID",
 *     @OA\Parameter(in="path", name="id", example=10, description="Expenses account by user ID"),
 *     @OA\Response(response="200", description="Get all expenses accounts by user ID")
 * )
 */

Flight::route('GET /accounts_by_id/@id', function ($id) {
    Flight::json(Flight::accountsService()->get_expense_accounts_by_id($id));
});

?>