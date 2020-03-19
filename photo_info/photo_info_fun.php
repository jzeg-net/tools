<?php
//https://www.php.net/manual/zh/features.file-upload.errors.php
function file_error_status()
{
}

function filters_image_types($file_name, $file_ext_name, $tmp_file_name)
{
  $php_created_image = PHP_TMP_DIR . $file_name;

  if ($file_ext_name === 'jpg' || $file_ext_name === 'jpeg' && (imagetypes() & IMG_JPG)) {
    $image_tmp = imagecreatefromjpeg($tmp_file_name);
    $image_create_result = imagejpeg($image_tmp, $php_created_image, 100);
    imagedestroy($image_tmp);
  } elseif ($file_ext_name === 'tiff' || $file_ext_name === 'tif') {
    //todo:处理tiff格式
    $image_tmp = imagecreatefromtiff($tmp_file_name);
    $image_create_result = imagejpeg($image_tmp, $php_created_image, 100);
    imagedestroy($image_tmp);
  } elseif ($file_ext_name === 'png' && (imagetypes() & IMG_PNG)) {
    $image_tmp = imagecreatefrompng($tmp_file_name);
    $image_create_result = imagepng($image_tmp, $php_created_image, 9);
    imagedestroy($image_tmp);
  } elseif ($file_ext_name === 'gif' && (imagetypes() & IMG_GIF)) {
    $image_tmp = imagecreatefromgif($tmp_file_name);
    $image_create_result = imagegif($image_tmp, $php_created_image);
    imagedestroy($image_tmp);
  } elseif ($file_ext_name === 'webp' && (imagetypes() & IMG_WEBP)) {
    $image_tmp = imagecreatefromwebp($tmp_file_name);
    $image_create_result = imagewebp($image_tmp, $php_created_image, 100);
    imagedestroy($image_tmp);
  } else {
    $image_create_result = false;
  }

  return $image_create_result;
}

function imagecreatefromtiff($tiff_file)
{
  $info = pathinfo($tiff_file);
  $filename = $info['filename'];
  $base_dir = $info['dirname'] . "/";

  $jpeg_file = $base_dir . $filename . ".jpg";

  // comando para conversão de tiff para jpeg
  // necessita do imagemagick num servidor unix
  $command = "convert $tiff_file $jpeg_file";

  // executa o comando
  exec($command, $result);

  return imagecreatefromjpeg($jpeg_file);
}
