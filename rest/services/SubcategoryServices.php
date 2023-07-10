<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/SubcategoryDao.class.php';

class SubcategoryServices extends BaseService
{
    public function __construct()
    {
        parent::__construct(new SubcategoryDao);
    }

    function getUserByFirstNameAndLastName($firstName, $lastName)
    {
        return $this->dao->getUserByFirstNameAndLastName($firstName, $lastName);
    }

    function get_subcategory_id($categoryId, $subName)
    {
        return $this->dao->get_subcategory_id($categoryId, $subName);
    }
}
?>