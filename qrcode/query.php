<?php
if ($_GET) {
  die('方式错误');
}

if ($_POST) {
  if ($_POST['query']) {
    $query = $_POST['query'];
  } else {
    die('参数错误');
  }
} else {
  die('无参数');
}


global $query_result, $query_key;
$query_key = $query;

require_once dirname(__FILE__) . "/database_query_qrcode.php";


$query_result = json_encode($query_result);
//$query_result = $query_result;

echo $query_result;
