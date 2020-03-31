<?php
function session_init()
{
  require_once dirname(dirname(__DIR__)) . "/config/defined.php";
  require_once dirname(dirname(__DIR__)) . "/config/functions.php";

  if (!file_exists(SESSION_YMD_DIR)) mk_dir(SESSION_YMD_DIR);
  session_save_path(SESSION_YMD_DIR);

  session_name('JZEG_NET');

  $cookie_params = array(
//  "lifetime" => 0,
//  "path" => '/',
//  "domain" => '',
//  "secure" => true,
    "httponly" => true,
//  "samesite" => '',
  );
  session_set_cookie_params($cookie_params);

//设置session存储到数据库中
  $cookie_data = session_get_cookie_params();
  $session_data = array(
    'session_lifetime' => $cookie_data['lifetime'],
    'session_expires' => $cookie_data['expires'],
    'session_path' => $cookie_data['path'],
    'session_domain' => $cookie_data['domain'],
    'session_secure' => $cookie_data['secure'],
    'session_httpOnly' => $cookie_data['httponly'],
    'session_sameSite' => $cookie_data['samesite'],
  );

//session_set_save_handler();

  session_start();
}
