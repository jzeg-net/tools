<?php

if (filter_has_var(INPUT_POST, 'g_recaptcha')) {
  if ($_POST['g_recaptcha']['token'] && $_POST['g_recaptcha']['action']) {
    $result = array(
      'message' => array(),
      'error' => array(),
    );
    require_once dirname(__DIR__) . "/recaptcha/recaptcha_verify_v3.php";
    $g_recaptcha_result = verify_result($type = 'bool', $_POST['g_recaptcha']['token'], $_POST['g_recaptcha']['action'], 0.9);
    if ($g_recaptcha_result === true) {
      $result['message']['g_recaptcha']['verify'] = true;
      if (filter_has_var(INPUT_POST, 'data')) {
        $phone_number_data_post = filter_input(INPUT_POST, 'data');
      }
    } else {
      $result['message']['g_recaptcha']['verify'] = false;
      die(json_encode($result));
    }

  } else {
    die('访问受限');
  }
} else {
  die('访问受限');
}

$data_post_array = json_decode($phone_number_data_post, true);

$udate = new DateTime();
$create_date = $udate->format('Y-m-d H:i:s.u');
$modify_date = $udate->format('Y-m-d H:i:s.u');

$server_remote_addr = filter_input(INPUT_SERVER, 'REMOTE_ADDR', FILTER_VALIDATE_IP);

$validate_ip_v4 = filter_var($server_remote_addr, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4);
$validate_ip_v6 = filter_var($server_remote_addr, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6);

$ip = '';
$ip_v4 = '';
$ip_v6 = '';
if ($validate_ip_v4) {
  $ip_v4 = $server_remote_addr;
} elseif ($validate_ip_v6) {
  $ip_v6 = $server_remote_addr;
} else {
  $ip = 'unset';
}

$static = array(
  'n' => 'no',
  'y' => 'yes',
  'v' => 'verify',
  'vd' => 'verified',
);

$regional_value = $data_post_array['info']['regional'];

require_once dirname(__FILE__) . "/phone_number_common.php";

$regional = filter_var($regional_value, FILTER_VALIDATE_REGEXP, filter_validate_options_regexp($PREG_rules['a_zA_Z4']));
$regional = $regional ? $regional : '';
if (array_key_exists($regional, $regional_array)) {
  $regional_key = $regional_array[$regional];
} else {
  die($result['error']['error'] = '请提交正确的矿区');
}

//区队、科室
$department = array(
  'un' => 'unset',
  'bwk' => 'baoweike',
);

$user_agent = filter_input(INPUT_SERVER, 'HTTP_USER_AGENT');


$data_count = count($data_post_array) - 1;
$phone_number_data = array();
for ($i = 0; $i < $data_count; $i++) {
  $phone_number_data[$i] = array(
    'phone_name' => $data_post_array[$i]['phone_name'],
    'phone_nick_name' => '',
    'note' => '',
    'tel_number' => $data_post_array[$i]['tel_number'],
    'mobile_number' => $data_post_array[$i]['mobile_number'],
    'static' => $static['y'],
    'regional' => $regional_key,
    'department' => $department['un'],
    'create_data' => $create_date,
    'modify_data' => $modify_date,
    'ip' => $ip,
    'ip_v4' => $ip_v4,
    'ip_v6' => $ip_v6,
    'user_agent' => $user_agent,
  );
}


require_once dirname(__DIR__) . "/mysqli/mysqli.php";

try {
  $db->connection('add_phone_number');
} catch (Exception $e) {
  die($e->getMessage());
}

try {
  $id = $db->insertMulti('phone_number', $phone_number_data);
} catch (Exception $e) {
  die($e->getMessage());
}


if (!$id) {
  $phone_number_error_data = $phone_number_data;
  foreach ($phone_number_error_data as $k => $v) {
//        unset($phone_number_error_data[$k]['phone_name']);
    unset($phone_number_error_data[$k]['phone_nick_name']);
    unset($phone_number_error_data[$k]['note']);
//        unset($phone_number_error_data[$k]['tel_number']);
//        unset($phone_number_error_data[$k]['mobile_number']);
    unset($phone_number_error_data[$k]['static']);
//        unset($phone_number_error_data[$k]['regional']);
    unset($phone_number_error_data[$k]['department']);
    unset($phone_number_error_data[$k]['create_data']);
    unset($phone_number_error_data[$k]['modify_data']);
    unset($phone_number_error_data[$k]['ip']);
    unset($phone_number_error_data[$k]['ip_v4']);
    unset($phone_number_error_data[$k]['ip_v6']);
    unset($phone_number_error_data[$k]['user_agent']);
  }
  $result['message']['add_number']['failure'] = '';
  $result['error']['errno'] = $db->getLastErrno();
  $result['error']['error'] = $db->getLastError();
  $result['error']['data'] = $phone_number_error_data;
} else {
  $result['message']['add_number']['success'] = $data_count;
}
die(json_encode($result));
