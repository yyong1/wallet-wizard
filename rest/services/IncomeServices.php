<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/IncomeDao.class.php';

class IncomeServices extends BaseService
{
    public function __construct()
    {
        parent::__construct(new IncomeDao);
    }
}
?>