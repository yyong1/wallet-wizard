<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/UserDao.class.php';

class UserServices extends BaseService
{
    public function __construct()
    {
        parent::__construct(new UserDao);
    }

    function getMail($email)
    {
        return $this->dao->getEmail($email);
    }

    function getUserByFirstNameAndLastName($firstName, $lastName)
    {
        return $this->dao->getUserByFirstNameAndLastName($firstName, $lastName);
    }
}
?>