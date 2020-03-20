<?php

//namespace JZEG_NET\Member\Sms\SendSms;

if (!defined('JZEG_NET_SMS')) die();

require_once dirname(dirname(__DIR__)) . '/vendor/autoload.php';
global $accessKeyId,
       $accessSecret,
       $request_json,
       $RegionId,
       $PhoneNumbers,
       $SignName,
       $TemplateCode,
       $TemplateParam,
       $SmsUpExtendCode,
       $OutId;

use AlibabaCloud\Client\AlibabaCloud;
use AlibabaCloud\Client\Exception\ClientException;
use AlibabaCloud\Client\Exception\ServerException;

// Download：https://github.com/aliyun/openapi-sdk-php
// Usage：https://github.com/aliyun/openapi-sdk-php/blob/master/README.md

try {
  AlibabaCloud::accessKeyClient($accessKeyId, $accessSecret)
    ->regionId($RegionId)
    ->asDefaultClient();
} catch (ClientException $e) {
  $sms_request_result['error']['ClientException'] = $e->getErrorMessage() . PHP_EOL;
}

try {
  $request_result = AlibabaCloud::rpc()
    ->product($request_json['product'])
    ->scheme($request_json['scheme'])
    ->version($request_json['version'])
    ->action($request_json['action'])
    ->method($request_json['method'])
    ->host($request_json['host'])
    ->options([
      'query' => [
        'RegionId' => $RegionId,
        'PhoneNumbers' => $PhoneNumbers,
        'SignName' => $SignName,
        'TemplateCode' => $TemplateCode,
        'TemplateParam' => $TemplateParam,
        'SmsUpExtendCode' => $SmsUpExtendCode,
        'OutId' => $OutId,
      ],
    ])
    ->request();
  $sms_request_result = $request_result->toArray();
} catch (ClientException $e) {
  $sms_request_result['error']['ClientException'] = $e->getErrorMessage() . PHP_EOL;
} catch (ServerException $e) {
  $sms_request_result['error']['ServerException'] = $e->getErrorMessage() . PHP_EOL;
}

return $sms_request_result;
