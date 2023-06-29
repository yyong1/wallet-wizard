<?php



Flight::route('GET /hi', function () {
    echo "hi";
    //Flight::json(Flight::categoriesService()->get_all());
});
Flight::route('GET /api/categoriess', function () {
    Flight::json(Flight::categoriesService()->get_all());
});


Flight::route('GET /api/categoriess/@id', function ($id) {
    Flight::json(Flight::categoriesService()->get_by_id($id));
});


Flight::route('GET /api/categoriess/@firstName/@lastName', function ($firstName, $lastName) {
    Flight::json(Flight::categoriesService()->getcategoriesByFirstNameAndLastName($firstName, $lastName));
});


Flight::route('POST /api/categoriess', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::categoriesService()->add($data));
});


Flight::route('PUT /api/categoriess/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::categoriesService()->update($id, $data);
    Flight::json(Flight::categoriesService()->get_by_id($id));
});


Flight::route('DELETE /api/categoriess/@id', function ($id) {
    Flight::categoriesService()->delete($id);
});

?>