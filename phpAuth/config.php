<?php
require_once dirname(__DIR__) . '/vendor/autoload.php';

use PHPAuth\Config as PHPAuthConfig;

require_once dirname(__FILE__) . '/auth_pdo.php';
global $dbh;

$phpAuthConfig = new PHPAuthConfig($dbh, null, '', 'zh_CN');
