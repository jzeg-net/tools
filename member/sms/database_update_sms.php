<?php
if (!defined('JZEG_NET_SMS')) die();

require_once dirname(dirname(__DIR__)) . '/mysqli/mysqli.php';

$db->addConnection("sms", $db_addConnection_params);

try {
  $db->connection('sms');
} catch (Exception $e) {
  $database_result['error']['getMessage'][] = $e->getMessage();
}
