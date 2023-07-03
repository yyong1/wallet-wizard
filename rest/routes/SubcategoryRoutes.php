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


Flight::route('POST /api/subcategorys', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::subcategoryService()->add($data));
});


Flight::route('PUT /api/subcategorys/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::subcategoryService()->update($id, $data);
    Flight::json(Flight::subcategoryService()->get_by_id($id));
});


Flight::route('DELETE /api/subcategorys/@id', function ($id) {
    Flight::subcategoryService()->delete($id);
});

?>