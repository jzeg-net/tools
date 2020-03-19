<?php
if (!defined('JT_QRCODE')) die();

require_once dirname(dirname(__DIR__)) . "/vendor/autoload.php";

use Endroid\QrCode\ErrorCorrectionLevel;
use Endroid\QrCode\LabelAlignment;
use Endroid\QrCode\QrCode;

if (!function_exists('create_qrcode')) {
  function create_qrcode(string $text, array $options = null, string $writeFile = null)
  {
    if (null === $text) return false;
    $default_options = array(
      'Size' => 300,
      'WriterByName' => 'png',
      'Margin' => 5,
      'Encoding' => 'UTF-8',
      'ErrorCorrectionLevel' => ErrorCorrectionLevel::HIGH(),
      'ForegroundColor' => array('r' => 0, 'g' => 0, 'b' => 0, 'a' => 0),
      'BackgroundColor' => array('r' => 255, 'g' => 255, 'b' => 255, 'a' => 0),
      'LabelContent' => '灵活码',
      'LabelFontSize' => 14,
      'LabelFontPath' => __DIR__ . '/assets/fonts/Deng.ttf',
      'LabelAlignment' => LabelAlignment::CENTER(),
      'LabelMargin' => array('t' => 0, 'r' => 10, 'b' => 10, 'l' => 10,),
      'LogoPath' => __DIR__ . '/assets/images/logo.jpg',
      'LogoWidth' => 50,
      'LogoHeight' => 50,
      'RoundBlockSize' => true,
      'ValidateResult' => false,
      'WriterOptions' => array('exclude_xml_declaration' => true),
    );
    if (null !== $options) {
      $new_options = array_replace($default_options, $options);
    } else {
      $new_options = $default_options;
    }

    $qrCode = new QrCode($text);
    $qrCode->setSize($new_options['Size']);
    $qrCode->setWriterByName($new_options['WriterByName']);
    $qrCode->setMargin($new_options['Margin']);
    $qrCode->setEncoding($new_options['Encoding']);
    $qrCode->setErrorCorrectionLevel($new_options['ErrorCorrectionLevel']);
    $qrCode->setForegroundColor($new_options['ForegroundColor']);
    $qrCode->setBackgroundColor($new_options['BackgroundColor']);
    $qrCode->setLabel($new_options['LabelContent'], $new_options['LabelFontSize'], $new_options['LabelFontPath'], $new_options['LabelAlignment'], $new_options['LabelMargin']);
    try {
      $qrCode->setLogoPath($new_options['LogoPath']);
    } catch (Endroid\QrCode\Exception\InvalidPathException $e) {
      die($e->getMessage());
    }
    $qrCode->setLogoSize($new_options['LogoWidth'], $new_options['LogoHeight']);
    $qrCode->setRoundBlockSize($new_options['RoundBlockSize']);
    $qrCode->setValidateResult($new_options['ValidateResult']);
    $qrCode->setWriterOptions($new_options['WriterOptions']);

    // 保存到文件
    if (null !== $writeFile) {
      $qrCode->writeFile($writeFile);
    }

    // 创建一个响应对象
    //$response = new QrCodeResponse($qrCode);
    //if (null !== $QrCodeResponse && true === $QrCodeResponse) {
    //return new QrCodeResponse($qrCode);
    //}

    // 直接输出二维码
    header('Content-Type: ' . $qrCode->getContentType());
    return $qrCode->writeString();

  }
}
