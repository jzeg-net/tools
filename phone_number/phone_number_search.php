<?php
if (filter_has_var(INPUT_POST, 'search_type')) {
  $search_type = filter_input(INPUT_POST, 'search_type');
} else {
  die("访问受限");
}

$query_key = filter_input(INPUT_POST, 'search_value');
if ($query_key === "") {
  die("请输入要查询的内容");
} elseif (isset($query_key{10})) {
  die("输入的内容过长");
} elseif (mb_strlen($query_key) < 3) {
  die("输入的内容过短");
}


$regional_value = filter_input(INPUT_POST, 'search_regional');

require_once dirname(__FILE__) . "/phone_number_common.php";

$regional = filter_var($regional_value, FILTER_VALIDATE_REGEXP, filter_validate_options_regexp($PREG_rules['a_zA_Z4']));
$regional = $regional ? $regional : '';
if (array_key_exists($regional, $regional_array)) {
  $regional_key = $regional_array[$regional];
} else {
  die($result['error']['error'] = '请提交正确的矿区');
}

$static = "yes";

$result_columns = ["phone_name", "tel_number", "mobile_number", "department", "phone_nick_name", "note"];

require_once dirname(__DIR__) . "/mysqli/mysqli.php";

$db->connection("phone_number_search");
$db->Where("static", $static);
$db->Where("regional", $regional_key);

switch ($search_type) {
  case "number":
    $db->orHaving("tel_number", "%$query_key%", 'LIKE');
    $db->orHaving("mobile_number", "%$query_key%", 'LIKE');

    $query = $db->get("phone_number", null, $result_columns);
    break;
  case "name":
    $db->orHaving("phone_name", "%$query_key%", 'LIKE');
    $db->orHaving("phone_nick_name", "%$query_key%", 'LIKE');
    $db->orHaving("note", "%$query_key%", 'LIKE');

    $query = $db->get("phone_number", null, $result_columns);
    break;
  default:
}

echo json_encode($query);
unset($query);
