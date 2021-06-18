<?php
require_once dirname(__DIR__) . "/config/env.php";


$db = new MysqliDb();
$db_addConnection_params = array(
    'host' => $_ENV['DB_HOST'],
    'username' => $_ENV['DB_USERNAME'],
    'password' => $_ENV['DB_PASSWORD'],
    'db' => $_ENV['DB_DATABASE_NAME'],
//        'port' => 3306,
//        'prefix' => '',
//        'charset' => 'utf8'
);
$db->addConnection("add_phone_number", $db_addConnection_params);
$db->addConnection("phone_number_search", $db_addConnection_params);
$db->addConnection("photo_info", $db_addConnection_params);
$db->addConnection("recaptcha", $db_addConnection_params);
$db->addConnection("jt_session", $db_addConnection_params);

$db->addConnection("number_stored", array(
  'host' => $_ENV['DB_HOST'],
  'username' => $_ENV['DB_USERNAME'],
  'password' => $_ENV['DB_PASSWORD'],
    'db' => "information_schema",
//        'port' => 3306,
//        'prefix' => '',
//        'charset' => 'utf8'
));
