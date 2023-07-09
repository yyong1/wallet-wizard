<?php
require_once __DIR__ . '/BaseDao.class.php';


class SubcategoryDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct("subcategory");
    }
    public function get_subcategory_id($categoryId, $subName){
        $stmt = $this->conn->prepare("SELECT SubCategoryID FROM subcategory WHERE CategoryID=:categoryId AND SubCategoryName=:subName");
        $stmt->execute(['categoryId' => $categoryId, 'subName' => $subName]); // binding the values to prevent injections
        $subId = $this->conn->lastInsertId();
        return $subId;
    }

}
?>