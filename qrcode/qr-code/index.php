<?php
if (!defined('JT_QRCODE')) define('JT_QRCODE', true);

require_once dirname(__FILE__) . "/basic.php";

$options = array(
  'Size' => 300,
  'WriterByName' => 'png',
  'Margin' => 5,
  'Encoding' => 'UTF-8',
//    'ErrorCorrectionLevel' => ErrorCorrectionLevel::HIGH(),
  'ForegroundColor' => array('r' => 255, 'g' => 0, 'b' => 0, 'a' => 0),
  'BackgroundColor' => array('r' => 255, 'g' => 255, 'b' => 255, 'a' => 0),
  'LabelContent' => '本灵活码可维护使用',
  'LabelFontSize' => 14,
  'LabelFontPath' => __DIR__ . '/assets/fonts/Deng.ttf',
//    'LabelAlignment' => LabelAlignment::CENTER(),
  'LabelAlignment' => 'center',
  'LabelMargin' => array('t' => 0, 'r' => 10, 'b' => 4, 'l' => 10,),
  'LogoPath' => __DIR__ . '/assets/images/logo.jpg',
  'LogoWidth' => 50,
  'LogoHeight' => 50,
  'RoundBlockSize' => true,
  'ValidateResult' => false,
  'WriterOptions' => array('exclude_xml_declaration' => true),
);


$qrcode_url_text = 'http://tools.jzeg.org/qrcode/q.php?q=dd';
$save_file_path = dirname(__DIR__) . '/upload/qrcode_img/qrcode.png';

//echo create_qrcode($qrcode_url_text, $options, $save_file_path);
echo create_qrcode($qrcode_url_text, $options);
