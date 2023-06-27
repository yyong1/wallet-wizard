<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/UserDao.class.php';

class AccountsServices extends BaseService
{
    public function __construct()
    {
        parent::__construct(new UserDao);
    }

    function getAccount($account_code)
    {
        return $this->dao->getAccount($account_code);
    }
}
?>