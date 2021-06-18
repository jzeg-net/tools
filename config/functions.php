<?php

require_once __DIR__ . '/init_functions.php';

function redirect_header_302_login($formURL = null)
{
  $formURL = (!empty($formURL)) ? "?formURL=" . $formURL : '';
  header('location: /login.php' . $formURL);
  exit();
}

function redirect_header_302_join()
{
  header('location: /join.php');
  exit();
}

function mk_dir($pathname, $mode = 0744, $recursive = true)
{
  mkdir($pathname, $mode, $recursive);
}

//获取文件扩展名
function get_file_ext_name($file_name)
{
  $file_ext_name = substr($file_name, strrpos($file_name, '.') + 1);
  $file_ext_name = mb_strtolower($file_ext_name);

  return $file_ext_name;
}

function for_md5(int $number, $array_or_string)
{
  $value = (is_array($array_or_string)) ? implode('', $array_or_string) : $array_or_string;
  if ($value === false) return false;
  $result = $value;
  for ($i = 0; $i <= $number; $i++) {
    $result = md5($result);
  }
  return $result;
}

function for_crypt(int $number, $array_or_string, $salt = null)
{
  $value = (is_array($array_or_string)) ? implode('', $array_or_string) : $array_or_string;
  if ($value === false) return false;
  $result = '';
  for ($i = 0; $i <= $number; $i++) {
    $result = crypt($value, $salt);
  }
  return $result;
}

function object2array($object)
{
  return json_decode(json_encode($object), true);
}

/* * php截取指定两个字符之间字符串 * */
function get_between(string $string, string $start, string $end)
{
  return substr($string, strlen($start) + strpos($string, $start), (strlen($string) - strpos($string, $end)) * (-1));
}

function getBetween($string, $start = "", $end = "")
{
  if (strpos($string, $start)) { // required if $start not exist in $string
    $startCharCount = strpos($string, $start) + strlen($start);
    $firstSubStr = substr($string, $startCharCount, strlen($string));
    $endCharCount = strpos($firstSubStr, $end);
    if ($endCharCount == 0) {
      $endCharCount = strlen($firstSubStr);
    }
    return substr($firstSubStr, 0, $endCharCount);
  } else {
    return '';
  }
}
