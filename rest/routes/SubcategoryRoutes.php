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


Flight::route('GET /api/subcategorys/@firstName/@lastName', function ($firstName, $lastName) {
    Flight::json(Flight::subcategoryService()->getsubcategoryByFirstNameAndLastName($firstName, $lastName));
});

Flight::route('POST /add_subcategory_expense', function ($categoryId, $subName) {
    $data = Flight::request()->data->getData();
    Flight::subcategoryService()->getSubcategoryId($categoryId, $subName);
});

//  get subcategory id
Flight::route('GET /get_subcategory_id', function ($categoryId, $subName) {
    $data = Flight::request()->data->getData();
    Flight::subcategoryService()->getSubcategoryId($categoryId, $subName);
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