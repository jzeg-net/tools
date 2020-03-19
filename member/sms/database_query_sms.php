<?php
require_once dirname(dirname(__DIR__)) . '/mysqli/mysqli.php';

$db->addConnection("qrcode", $db_addConnection_params);

try {
  $db->connection('qrcode');
} catch (Exception $e) {
  die($e->getMessage());
}


$static_array = array(
  'y' => 'yes',
  'n' => 'no',
  'u' => 'updated',
);
$static = $static_array['y'];

$result_columns = ["title", "description", "img_path"];


$db->Where("static", $static);

$db->Where("identifier", $query_key);


try {
  $query_result = $db->get("qrcode", null, $result_columns);
} catch (Exception $e) {
  die($e->getMessage());
}
