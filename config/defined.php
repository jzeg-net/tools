<?php
if (!defined("JZEG_NET")) define('JZEG_NET', '');

$php_tmp_dir = sys_get_temp_dir() . '/';
$yyyy_mm_dd = date("Y/m/d/");
$upload_tmp_dir = dirname(dirname(__DIR__)) . "/upload_tmp_dir/";
$upload_dir = dirname(dirname(__DIR__)) . "/upload/";
$upload_path = dirname(__DIR__) . $upload_dir;
$session_dir = dirname(dirname(__DIR__)) . "/session_files/";
$qrcode_img_dir = "/qrcode_img/";
$qrcode_img_path = $upload_path . $qrcode_img_dir;


if (!defined("PHP_TMP_DIR")) define('PHP_TMP_DIR', $php_tmp_dir);

if (!defined("UPLOAD_TMP_DIR")) define('UPLOAD_TMP_DIR', $upload_tmp_dir);
if (!defined("UPLOAD_DIR")) define('UPLOAD_DIR', $upload_dir);
if (!defined("SESSION_DIR")) define('SESSION_DIR', $session_dir);
if (!defined("UPLOAD_DIR_YMD")) define('UPLOAD_DIR_YMD', UPLOAD_DIR . $yyyy_mm_dd);
if (!defined("SESSION_DIR_YMD")) define('SESSION_DIR_YMD', SESSION_DIR . $yyyy_mm_dd);
if (!defined("YYYY_MM_DD")) define('Y_M_D', $yyyy_mm_dd);
if (!defined("UPLOAD_IMG_QRCODE_DIR")) define('UPLOAD_IMG_QRCODE_DIR', $qrcode_img_dir);
if (!defined("UPLOAD_IMG_QRCODE_DIR_YMD")) define('UPLOAD_IMG_QRCODE_DIR_YMD', $qrcode_img_dir . Y_M_D);
if (!defined("UPLOAD_IMG_QRCODE_PATH")) define('UPLOAD_IMG_QRCODE_PATH', $qrcode_img_path);
if (!defined("UPLOAD_IMG_QRCODE_PATH_YMD")) define('UPLOAD_IMG_QRCODE_PATH_YMD', UPLOAD_IMG_QRCODE_PATH . Y_M_D);


if (!file_exists(UPLOAD_DIR)) mkdir(UPLOAD_DIR, 0744, true);
