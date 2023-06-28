<?php
require_once __DIR__ . '/BaseDao.php';


class ExpensesyDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct("expense");
    }


    // custom function, which is not present in BaseDao
    // query_unique -> returns only 1 result if multiple are present
    function getUserByFirstNameAndLastName($firstName, $lastName)
    {
        return $this->query_unique("SELECT * FROM users WHERE firstName = :firstName AND lastName = :lastName", ["firstName" => $firstName, "lastName" => $lastName]);
    }
}
?>