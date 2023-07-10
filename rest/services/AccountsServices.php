<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/AccountDao.class.php';

class AccountsServices extends BaseService
{
    public function __construct()
    {
        parent::__construct(new AccountDao);
    }
    public function get_account_with_user_by_id($id){
        $accounts = $this->dao->get_account_with_user_by_id($id);
        return $accounts;
    }

    public function get_expense_accounts_by_id($id){
        $accounts = $this->dao->get_expense_accounts_by_id($id);
        return $accounts;
    }

    public function update_account_expense($accountid, $value){
        return $this->dao->update_account_expense($accountid, $value); 
    }    
    
}
?>