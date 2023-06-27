<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/UserDao.class.php';

class CategoriesServices extends BaseService
{
    public function __construct()
    {
        parent::__construct(new CategoriesDao);
    }

    function getAccount($category)
    {
        return $this->dao->getAccount($category);
    }
}
?>