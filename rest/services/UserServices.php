<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/UserDao.class.php';

class UserServices extends BaseService
{
    public function __construct()
    {
        parent::__construct(new UserDao);
    }

    function getEmail($email)
    {
        return $this->dao->get_email($email);
    }

    function getUserByFirstNameAndLastName($firstName, $lastName)
    {
        return $this->dao->getUserByFirstNameAndLastName($firstName, $lastName);
    }

    public function getUserById($id)
    {
        return $this->dao->getUserById($id);
    }

    public function getMaxUserId()
    {
        return $this->dao->getMaxUserId();
    }
}
?>