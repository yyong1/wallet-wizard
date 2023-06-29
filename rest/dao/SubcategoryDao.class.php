<?php
require_once __DIR__ . '/BaseDao.class.php';


class SubcategoryDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct("subcategory");
    }
}
?>