<?php

/**
 * @OA\Get(path="/categories/{id}", tags={"Categories"}, security={{"ApiKeyAuth": {}}},
 *     summary="Return category name and Subcategory name by user ID",
 *     @OA\Parameter(in="path", name="id", example=5, description="User ID for category", required=true),
 *     @OA\Response(response="200", description="Fetch categories by user ID")
 * )
 */

Flight::route('GET /categories/@id', function ($id) {
    Flight::json(Flight::categoriesService()->get_categories_with_user_by_id($id));
});

/**
 * @OA\Post(path="/categories", tags={"Categories"}, description="Add a new category", security={{"ApiKeyAuth": {}}},
 *     @OA\RequestBody(required=true, description="New category",
 *         @OA\MediaType(mediaType="application/json",
 *             @OA\Schema(required={"UserID","CategoryName", "Income"},
 *                 @OA\Property(property="UserID", type="integer", example="5"),
 *                 @OA\Property(property="CategoryName", type="string", example="Salary"),
 *                 @OA\Property(property="Income", type="integer", example="10")
 *             )
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Category has been successfully added"
 *     ),
 *     @OA\Response(
 *         response=500,
 *         description="Error"
 *     )
 * )
 */

Flight::route('POST /add_category', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::categoriesService()->add($data));
});

/**
 * @OA\Get(path="/categories-by-id/{id}", tags={"Categories"}, security={{"ApiKeyAuth": {}}},
 *     summary="Return all expenses categories by user ID",
 *     @OA\Parameter(in="path", name="id", example=5, description="User ID for category", required=true),
 *     @OA\Response(response="200", description="Fetch categories by user ID")
 * )
 */

Flight::route('GET /categories-by-id/@id', function ($id) {
    Flight::json(Flight::categoriesService()->get_categories_by_id($id));
});

?>