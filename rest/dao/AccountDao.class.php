<?php
require_once __DIR__ . '/BaseDao.class.php';


class AccountDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct("account");
    }

    public function get_account_with_user_by_id($id){
        $stmt = $this->conn->prepare(
            "SELECT AccountName, Value
            FROM account
            WHERE UserID=:id"
        );
        $stmt->execute(['id' => $id]); //prevents an SQL injection **binding the parameter
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function get_expense_accounts_by_id($id){
        $stmt = $this->conn->prepare(
            "SELECT AccountID, AccountName
            FROM account 
            WHERE UserID=:id"
        );
        $stmt->execute(['id' => $id]); //prevents an SQL injection **binding the parameter
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>