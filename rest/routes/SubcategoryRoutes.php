<?php

/**
 * @OA\Get(path="/get_subcategory_id/{categoryID}/{SubCategoryName}", tags={"Categories"}, security={{"ApiKeyAuth": {}}},
 *     summary="Get subcategory id use category Id and Subcategory Name",
 *     @OA\Parameter(in="path", name="categoryID", example=2, description="Category ID", required=true),
 *     @OA\Parameter(in="path", name="SubCategoryName", example=2, description="Subcategory ID", required=true),
 *     @OA\Response(response="200", description="Get incomes with user by ID")
 *     @OA\Response(response="404", description="User not found")
 * )
 */
Flight::route('GET /get_subcategory_id/@categoryID/@SubCategoryName', function ($CategoryID,$SubCategoryName) {
    Flight::json(Flight::subcategoryService()->get_subcategory_id($CategoryID, $SubCategoryName));
});

Flight::route('POST /subcategory_add', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::subcategoryService()->add($data));
});

Flight::route('PUT /subcategory/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::subcategoryService()->update($id, $data);
    Flight::json(Flight::subcategoryService()->get_by_id($id));
});

?>