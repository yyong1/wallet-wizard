<?php
require_once __DIR__ . '/BaseDao.class.php';


class ExpensesDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct("expense");
    }
   public function get_expenses_with_user_by_id($id){
        $stmt = $this->conn->prepare(
            "SELECT cat.CategoryName, sub.SubCategoryName, ex.Amount
            FROM category cat
            JOIN subcategory sub on cat.CategoryID=sub.CategoryID
            JOIN expense ex on cat.CategoryID=ex.CategoryID
            WHERE cat.UserID=:id AND cat.Expenses=1
            ORDER BY cat.CategoryName"
        );
        $stmt->execute(['id' => $id]); //prevents an SQL injection **binding the parameter
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function get_expenses_for_graph($id){
        $stmt = $this->conn->prepare(
            "SELECT cat.CategoryName as 'type', SUM(ex.Amount) as 'value'
            FROM category cat
            JOIN expense ex on cat.CategoryID=ex.CategoryID
            WHERE ex.UserID=:id
            GROUP BY cat.CategoryName"
        );
        $stmt->execute(['id' => $id]); //prevents an SQL injection **binding the parameter
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
}
?>