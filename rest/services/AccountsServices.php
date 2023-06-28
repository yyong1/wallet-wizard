<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/AccountDao.class.php';

class AccountsServices extends BaseService
{
    public function __construct()
    {
        parent::__construct(new AccountDao);
    }

}
?>