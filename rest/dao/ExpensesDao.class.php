<?php
require_once __DIR__ . '/BaseDao.class.php';


class ExpensesyDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct("expense");
    }
}
?>