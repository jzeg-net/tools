<?php
require_once dirname(__DIR__) . '/vendor/autoload.php';

use PHPAuth\Auth as PHPAuth;

require_once dirname(__FILE__) . '/config.php';
global $phpAuthConfig;

require_once dirname(__FILE__) . '/auth_pdo.php';
global $dbh;

$Auth = new PHPAuth($dbh, $phpAuthConfig);
