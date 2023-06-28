<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/ExpensesDao.class.php';

class ExpensesServices extends BaseService
{
    public function __construct()
    {
        parent::__construct(new ExpensesDao);
    }
}
?>