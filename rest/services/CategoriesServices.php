<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/CategoriesDao.class.php';

class CategoriesServices extends BaseService
{
    public function __construct()
    {
        parent::__construct(new CategoriesDao);
    }
}
?>