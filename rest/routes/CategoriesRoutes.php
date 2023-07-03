<?php

Flight::route('GET /connection-check', function () {
    Flight::categoriesService();
});

Flight::route('GET /hi', function () {
    echo "hi";
    //Flight::json(Flight::categoriesService()->get_all());
});
Flight::route('GET /categories', function () {
    Flight::json(Flight::categoriesService()->get_all());
});


Flight::route('GET /categories/@id', function ($id) {
 
    Flight::json(Flight::categoriesService()->get_categories_with_user_by_id($id));
    
});


Flight::route('POST /categories', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::categoriesService()->add($data));
});


Flight::route('PUT /categories/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::categoriesService()->update($id, $data);
    Flight::json(Flight::categoriesService()->get_by_id($id));
});


Flight::route('DELETE /categories/@id', function ($id) {
    Flight::categoriesService()->delete($id);
});

?>