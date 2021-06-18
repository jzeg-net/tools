<?php
/**
 *
 *
 */

require_once dirname(__DIR__) . '/config/env_phpauth.php';

// 数据库类型
$dbms = $_ENV['PHPAuth_DB_CONNECTION'];
// 数据库主机名
$host = $_ENV['PHPAuth_DB_HOST'];
// 使用的数据库名
$dbName = $_ENV['PHPAuth_DB_DATABASE_NAME'];
// 数据库连接用户名
$user = $_ENV['PHPAuth_DB_USERNAME'];
// 对应的密码
$pass = $_ENV['PHPAuth_DB_PASSWORD'];

$dsn = "$dbms:host=$host;dbname=$dbName";

//初始化一个PDO对象
$dbh = new PDO($dsn, $user, $pass);
