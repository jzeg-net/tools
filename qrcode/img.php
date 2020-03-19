<?php

if ($_POST && $_FILES) {
  if (!($_FILES['qrcode_img']) || !($_POST['qrcode_title']) || !($_POST['qrcode_description']) || !($_POST['qrcode_password'])) {
    die('参数错误');
  }
} else {
  die('方式错误');
}


global $new_img_file, $result, $qrcode_img_file;

$qrcode_img_file = $_FILES['qrcode_img'];
require_once dirname(__FILE__) . "/file.php";

$new_img_file_path = $new_img_file['file_path'];

$qrcode_title = $_POST['qrcode_title'];
$qrcode_description = $_POST['qrcode_description'];
$qrcode_password = $_POST['qrcode_password'];

$img_path = $new_img_file_path;
$title = $qrcode_title;
$description = $qrcode_description;
$password = $qrcode_password;
$category = 'img_qrcode';
$identifier = 'LHM-' . time();
//$identifier = 'LHM-1582811959';
$img_md5 = '111';
$qrcode_content = '111';
$static = 'yes';

$qrcode_data = array(
  'img_path' => $img_path,
  'title' => $title,
  'description' => $description,
  'category' => $category,
  'identifier' => $identifier,
  'img_md5' => $img_md5,
  'qrcode_content' => $qrcode_content,
  'password' => $password,
  'static' => $static,
);


$result = array();

require_once dirname(__FILE__) . '/database_add_qrcode.php';

die(json_encode($result));
//echo json_encode($result);
