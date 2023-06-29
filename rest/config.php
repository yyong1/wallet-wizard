<?php
class Config
{
    // $host = 'localhost' might not work, use '127.0.0.1' if that is the case
    public static function DB_HOST(){
        return Config::get_env('DB_HOST', 'localhost');
    }
    // public static $host = '127.0.0.1';
    public static function DB_SCHEME(){
        return Config::get_env('DB_SCHEME', '');
    }
    // public static $database = 'web-project-base';
    public static function DB_USERNAME(){
        return Config::get_env('DB_USERNAME', 'root');
    }
    // public static $username = 'root';
    public static function DB_PASSWORD(){
        return Config::get_env('DB_PASSWORD', '');
    }
    // public static $password = '123';
    public static function DB_PORT(){
        return Config::get_env('DB_PORT', '3306');
    }
    // public static $port = '3306';
    public static function get_env($name, $default){
        return isset($_ENV[$name]) && trim($_ENV[$name]) != '' ? $_ENV[$name] : $default;
    }
}
?>
