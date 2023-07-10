<?php

/*Flight::route('GET /connection-check', function () {
    Flight::categoriesService();
});*/

Flight::route('GET /hi', function () {
    echo "hi";
    //Flight::json(Flight::categoriesService()->get_all());
});


Flight::route('GET /categories/@id', function ($id) {
    Flight::json(Flight::categoriesService()->get_categories_with_user_by_id($id));
});


Flight::route('POST /add_category', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::categoriesService()->add($data));
});

Flight::route('GET /categories-by-id/@id', function ($id) {
    Flight::json(Flight::categoriesService()->get_categories_by_id($id));
});


?>