<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/ExpensesDao.class.php';

class ExpensesServices extends BaseService
{
    public function __construct()
    {
        parent::__construct(new ExpensesDao);
    }
    public function get_expenses_with_user_by_id($id){
        return $this->dao->get_expenses_with_user_by_id($id);
    }

    public function get_expenses_for_graph($id){
        $expenses = $this->dao->get_expenses_for_graph($id);
        return $expenses;
    }
}
?>