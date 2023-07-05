<?php
require_once __DIR__ . '/BaseDao.class.php';


class IncomeDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct("income");
    }
    public function get_income_with_user_by_id($id){
        $stmt = $this->conn->prepare(
            "SELECT cat.CategoryName, sub.SubCategoryName, inc.Amount
            FROM category cat
            JOIN subcategory sub on cat.CategoryID=sub.CategoryID
            JOIN income inc on cat.CategoryID=inc.CategoryID
            WHERE cat.UserID=:id AND cat.Income=1
            ORDER BY cat.CategoryName"
        );
        $stmt->execute(['id' => $id]); //prevents an SQL injection **binding the parameter
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function get_incomes_for_graph($id){
        $stmt = $this->conn->prepare(
            "SELECT cat.CategoryName as 'CategoryName', SUM(inc.Amount) as 'Amount'
            FROM category cat
            JOIN income inc on cat.CategoryID=inc.CategoryID
            WHERE inc.UserID=:id
            GROUP BY cat.CategoryName"
        );
        $stmt->execute(['id' => $id]); //prevents an SQL injection **binding the parameter
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>