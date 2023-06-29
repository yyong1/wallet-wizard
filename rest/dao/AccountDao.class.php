<?php
require_once __DIR__ . '/BaseDao.class.php';


class AccountDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct("account");
    }

   
}
?>