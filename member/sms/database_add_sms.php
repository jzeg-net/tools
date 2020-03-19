<?php
if (!defined('JZEG_NET_SMS')) die();

require_once dirname(dirname(__DIR__)) . '/mysqli/mysqli.php';

$db->addConnection("sms", $db_addConnection_params);


try {
  $db->connection('sms');
} catch (Exception $e) {
  $database_result['error']['getMessage'][] = $e->getMessage();
}

$id = false;
try {
  global $sms_data;
  $id = $db->insert('history_sms', $sms_data);
} catch (Exception $e) {
  $database_result['error']['getMessage'][] = $e->getMessage();
}

if (!$id) {
  $database_result['success'] = 'no';
  $database_result['data'] = $sms_data;
  $database_result['error']['errno'] = $db->getLastErrno();
  try {
    $database_result['error']['error'] = $db->getLastError();
  } catch (Exception $e) {
    $database_result['error']['getMessage'][] = $e->getMessage();
  }
} else {
  $database_result['success'] = 'yes';
}

return $database_result;
