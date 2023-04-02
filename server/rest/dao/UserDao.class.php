<?php

class UserDao
{
    private $conn;
    private $host = 'localhost';
    private $database = 'web-project';
    private $username = 'root';
    private $password = '123';

    public function __construct()
    {
        try {
            $this->conn = new PDO("mysql:host=$this->host;dbname=$this->database", $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
    function query($query, $params = [])
    {
        $stmt = $this->conn->prepare($query);
        $stmt->execute($params);
        return $stmt;
    }
    function getUsers()
    {
        $stmt = $this->query("SELECT * FROM users");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    function getUserById($id)
    {
        $stmt = $this->query("SELECT * FROM users WHERE id = :id", ["id" => $id]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    function addUser($user)
    {
        $this->query("INSERT INTO users (firstName, lastName, age) VALUES (:firstName, :lastName, :age)", $user);
        $user['id'] = $this->conn->lastInsertId();
        return $user;
    }
    function updateUser($id, $user)
    {
        $this->query("UPDATE users SET firstName = :firstName, lastName = :lastName, age = :age WHERE id = :id", array_merge(["id" => $id], $user));
        echo "User updated successfully <br>";
    }
    function deleteUser($id)
    {
        $this->query("DELETE FROM users WHERE id = :id", ["id" => $id]);
        echo "User deleted successfully <br>";
    }

}

?>