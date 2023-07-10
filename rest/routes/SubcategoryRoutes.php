 <?php



Flight::route('GET /hi', function () {
    echo "hi";
    //Flight::json(Flight::subcategoryService()->get_all());
});
Flight::route('GET /api/subcategorys', function () {
    Flight::json(Flight::subcategoryService()->get_all());
});


Flight::route('GET /api/subcategorys/@id', function ($id) {
    Flight::json(Flight::subcategoryService()->get_by_id($id));
});

//  get subcategory id
Flight::route('GET /get_subcategory_id/@categoryID/@SubCategoryName', function ($CategoryID,$SubCategoryName) {
    Flight::subcategoryService()->get_subcategory_id($CategoryID, $SubCategoryName);
});
// ---> 
Flight::route('POST /subcategory_add', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::subcategoryService()->add($data));
});

Flight::route('PUT /subcategory/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::subcategoryService()->update($id, $data);
    Flight::json(Flight::subcategoryService()->get_by_id($id));
});


Flight::route('DELETE /api/subcategorys/@id', function ($id) {
    Flight::subcategoryService()->delete($id);
});

?>