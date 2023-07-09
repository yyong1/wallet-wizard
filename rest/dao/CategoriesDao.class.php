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
            WHERE UserID=:id"
        );
        $stmt->execute(['id' => $id]); //prevents an SQL injection **binding the parameter
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function get_categories_by_id($id){
        $stmt = $this->conn->prepare(
            "SELECT  CategoryName, Expenses 
            FROM category 
            WHERE UserID=:id"
        );
        $stmt->execute(['id' => $id]); //prevents an SQL injection **binding the parameter
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function add($entity){
        $columns = implode(", ", array_keys($entity));
        $placeholders = ":" . implode(", :", array_keys($entity));

        $query = "INSERT INTO category ($columns) VALUES ($placeholders)";
    
        $stmt = $this->conn->prepare($query);
        var_dump($entity);
        $stmt->execute($entity); // binding the values to prevent injections
    
        $entity['id'] = $this->conn->lastInsertId();
        return $entity;
    }
}
?>