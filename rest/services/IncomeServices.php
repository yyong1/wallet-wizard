<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/IncomeDao.class.php';

class IncomeServices extends BaseService
{
    public function __construct()
    {
        parent::__construct(new IncomeDao);
    }
    public function get_income_with_user_by_id($id){
        $expenses = $this->dao->get_income_with_user_by_id($id);
        return $expenses;
    }

    public function get_incomes_for_graph($id){
        $expenses = $this->dao->get_incomes_for_graph($id);
        return $expenses;
    }

    public function get_income_categories_by_id($id){
        return $this->dao->get_income_categories_by_id($id);
    }
}
?>