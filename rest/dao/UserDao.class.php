<?php
require_once __DIR__ . '/BaseDao.class.php';


class UserDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct("user");
    }

    public function getEmail($email){
        return $this->query_unique("SELECT * FROM users WHERE email= :email", ['email' => $email]);
    }
    
    function getUserByFirstNameAndLastName($firstName, $lastName)
    {
        return $this->query_unique("SELECT * FROM users WHERE firstName = :firstName AND lastName = :lastName", ["firstName" => $firstName, "lastName" => $lastName]);
    }
}
?>
