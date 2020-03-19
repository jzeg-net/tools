<?php
require_once dirname(__DIR__) . '/mysqli/mysqli.php';

$db->addConnection("qrcode", $db_addConnection_params);


try {
  $db->connection('qrcode');
} catch (Exception $e) {
  die($e->getMessage());
}

try {
  $id = $db->insert('qrcode', $qrcode_data);
} catch (Exception $e) {
  die($e->getMessage());
}


if (!$id) {
//    global $result;
  $error_data = $qrcode_data;

  $result['message']['qrcode']['failure'] = '';
  $result['error']['errno'] = $db->getLastErrno();
  try {
    $result['error']['error'] = $db->getLastError();
  } catch (Exception $e) {
    die($e->getMessage());
  }
  $result['error']['data'] = $error_data;
} else {
  $result['message']['qrcode']['success'] = 'yes';
}
