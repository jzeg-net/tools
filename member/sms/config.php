<?php
require_once dirname(__FILE__) . "/template.php";
global $template_json;

$action_types = array_keys($template_json);

$action_name = $action_types[4];
$TemplateCode_value = $template_json[$action_name]['templateCode'];
$TemplateParam_value = json_encode($template_json[$action_name]['templateParam']);


$result_json = array(
  "product" => "Dysmsapi",
  "scheme" => "http",//生产模式的时候使用https
  "version" => "2017-05-25",
  "action" => "SendSms",
  "method" => "POST",
  "host" => "dysmsapi.aliyuncs.com",
);

$RegionId = 'cn-hangzhou';
//接收短信的手机号码,手机号码之间以英文逗号（,）分隔。上限为1000个手机号码。
$PhoneNumbers = '15227731266';
//短信签名名称
$SignName = '杰格网';
//短信模板ID
$TemplateCode = $TemplateCode_value;
//短信模板变量对应的实际值，JSON格式。
$TemplateParam = $TemplateParam_value;
//上行短信扩展码
$SmsUpExtendCode = '';
//外部流水扩展字段。
$OutId = '';
