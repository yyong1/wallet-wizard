<?php
require_once __DIR__ . '/BaseDao.class.php';


class UserDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct("user");
    }

    public function get_email($email)
    {
        return $this->query_unique("SELECT * FROM " . $this->table_name . " WHERE Email = :email", ['email' => $email]);
    }    

    function getUserByFirstNameAndLastName($firstName, $lastName)
    {
        return $this->query_unique("SELECT * FROM users WHERE firstName = :firstName AND lastName = :lastName", ["firstName" => $firstName, "lastName" => $lastName]);
    }

    public function getUserById($id)
    {
        return $this->get_user_by_id($id);
    }

    public function getMaxUserId()
    {
        return $this->get_max_user_id();
    }
}
?>