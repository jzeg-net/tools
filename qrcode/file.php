<?php

require_once dirname(__DIR__) . "/config/defined.php";
require_once dirname(__DIR__) . "/config/functions.php";
require_once dirname(__DIR__) . "/photo_info/photo_info_fun.php";

$allowed_extension_name = array("pjpeg", "jpeg", "pjp", "jpg", "png");

$file = $qrcode_img_file;

$error = $file["error"];
$tmp_file_name = $file['tmp_name'];
$file_name = $file['name'];
$file_ext_name = get_file_ext_name($file_name);
$file_type = $file['type'];
$file_size = $file['size'];

$php_created_image = PHP_TMP_DIR . $file_name;


if (is_uploaded_file($tmp_file_name)) {
  if ($error === 0) {
    if (in_array($file_ext_name, $allowed_extension_name)) {
      if (!file_exists(UPLOAD_IMG_QRCODE_PATH_YMD)) mk_dir(UPLOAD_IMG_QRCODE_PATH_YMD);
      $image_create_result = filters_image_types($file_name, $file_ext_name, $tmp_file_name);
      if ($image_create_result === true) {
        if (!file_exists(UPLOAD_IMG_QRCODE_PATH_YMD . $file_name)) {
          $rename_file_result = rename($php_created_image, UPLOAD_IMG_QRCODE_PATH_YMD . $file_name);

          if ($rename_file_result === true) {
            global $new_img_file;
            $new_img_file = array(
              'file_path' => UPLOAD_IMG_QRCODE_DIR_YMD . $file_name,
              'file_name' => $file_name,
              'file_ext_name' => $file_ext_name,
              'file_size' => $file_size,
              '' => '',
            );
            return $new_img_file;
          } else {
            echo '文件创建成功，移动失败';
          }

        } else {
          die('文件已经存在');
        }
      } else {
        die('文件创建失败');
      }
    } else {
      if (file_exists($tmp_file_name)) unlink($tmp_file_name);
      die('文件格式不允许');
    }
  }
} else {
  if (file_exists($tmp_file_name)) unlink($tmp_file_name);
  die('文件获取途径问题');
}
