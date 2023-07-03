<?php
require_once __DIR__ . '/BaseDao.class.php';


class CategoriesDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct("category");
    }

    public function get_categories_with_user_by_id($id){
        $stmt = $this->conn->prepare(
            "SELECT c.CategoryName, sub.SubCategoryName 
            FROM category c
            JOIN subcategory sub on c.CategoryID=sub.CategoryID
            WHERE UserID=:id
            order by c.Income"
        );
        $stmt->execute(['id' => $id]); //prevents an SQL injection **binding the parameter
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>