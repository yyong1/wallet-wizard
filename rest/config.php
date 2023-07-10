<?php
class Config
{
    // $host = 'localhost' might not work, use '127.0.0.1' if that is the case
    public static function DB_HOST(){
        return Config::get_env('DB_HOST', 'db-mysql-fra1-34064-do-user-14289781-0.b.db.ondigitalocean.com');
    }
    // public static $host = '127.0.0.1';
    public static function DB_SCHEME(){
        return Config::get_env('DB_SCHEME', 'defaultdb');
    }
    // public static $database = 'web-project-base';
    public static function DB_USERNAME()
    {
        return Config::get_env('DB_USERNAME', 'doadmin');
    }
    // public static $username = 'root';
    public static function DB_PASSWORD(){
        return Config::get_env('DB_PASSWORD', 'AVNS_daKXCm7AQ3GWxxN0Vl4');
    }
    // public static $password = '123';
    public static function DB_PORT()
    {
        return Config::get_env('DB_PORT', '25060');
    }
    // public static $port = '3306';

    public static function JWT_SECRET()
    {
        return Config::get_env('JWT_SECRET', 'jwt_secret');
    }
    public static function get_env($name, $default)
    {
        return isset($_ENV[$name]) && trim($_ENV[$name]) != '' ? $_ENV[$name] : $default;
    }
}
?>