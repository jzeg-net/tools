<?php
require_once dirname(dirname(__DIR__)) . '/config/functions.php';
require_once dirname(dirname(__DIR__)) . '/captcha/index.php';

global $captcha, $phrase_length;

$captcha_phrase = for_md5(1000, $captcha->getPhrase());
$captcha_img_base64 = $captcha->inline(30);

$result = array(
  'success' => 'true',
  'captcha' => array(
    'img_base64' => $captcha_img_base64,
    'hash' => $captcha_phrase,
    'size' => $phrase_length,
  ),
);

if (isset($_POST['reVerify']) && '1' === $_POST['reVerify']) {
  echo json_encode($result);
} else {
  echo $result['captcha']['img_base64'];
}
